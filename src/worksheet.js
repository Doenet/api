import axios from 'axios';
import fingerprint from 'fingerprintjs2';
import hash from 'object-hash';
import { xapiObject } from './xapi/object.js';

import { createPanelElement, setProgressBar } from './panel.js';

import { gdprConsent } from './gdpr.js';

async function fetchFingerprint() {
  return new Promise((resolve, reject) => {
    if (window.requestIdleCallback) {
      requestIdleCallback(function () {
        fingerprint.get(resolve);
      });
    } else {
      setTimeout(function () {
        fingerprint.get(resolve);
      }, 500);
    }
  });
}

export class Worksheet extends xapiObject {
  constructor(options = {}) {
    super();
    
    if (options.api) {
      this.api = options.api;
    } else {
      this.api = "https://api.doenet.cloud";
    }

    if (options.id) {
      // We are *trusting* the caller here...  We'll end up verifying
      // the same-origin on the iframe side, by comparing this to the
      // origin of our PostMessage
      this.id = options.id;
    } else {
      this.id = window.location.toString();
    }

    if (options.title) {
      this.title = options.title;
    } else {
      this.title = document.title;
    }

    this.progressCallbacks = [];
    this.progress = undefined;

    let worksheet = this;

    // not consented to data collection yet...
    worksheet.consent = null;
    gdprConsent( (consent) => {
      // Now the user has affirmatively consented to data collection
      worksheet.consent = consent;
      
      let iframe = createPanelElement(worksheet.api);
      worksheet.contentWindow = iframe.contentWindow;

      // let registered event handlers know about updates
      window.addEventListener("message", function(event) {
        if (event.source == iframe.contentWindow) {
          if (event.data.message === 'setProgress') {
            worksheet.progress = event.data.parameters.score;
            
            setProgressBar( worksheet.progress );
            
            for( const callback of worksheet.progressCallbacks ) {
              callback( event, event.data );
            }
          }
        }
      }, false);
      
      // request the current page progress as soon as possible
      iframe.addEventListener("load", function() {
        iframe.contentWindow.postMessage( { message: 'getProgress',
                                            parameters: { worksheet: worksheet.id } },
                                          worksheet.api );
      });
      
      // get a browser fingerprint
      (async function() {
        let fp = await fetchFingerprint();
        console.log(fp);
        console.log(hash(fp));
      })();
      
    });
  }
                 
  addEventListener( eventName, callback ) {
    if (eventName == 'progress') {
      callback( {}, this.progress );
      this.progressCallbacks.push( callback );
    }
  }

  setProgress( score ) {
    this.progress = score;
    
    this.contentWindow.postMessage( { message: 'setProgress',
                                      parameters: { score: this.progress,
                                                    worksheet: this.id,
                                                    title: this.title } },
                                    this.api );
  }

  recordStatement( statement ) {
    this.contentWindow.postMessage( { message: 'recordStatement',
                                      parameters: { worksheet: this.id,
                                                    statement: statement.toJSON()
                                                  } },
                                    this.api );
  }
  
  saveState( state ) {
  }

  fetchState( state ) {
  }

  watchState( state ) {
  }

  ////////////////////////////////////////////////////////////////
  // Because a worksheet is also an xAPI.Object
  extendStatement( statement ) {
    statement.object = {
      id: this.id,
      definition: {
        name: {
          "en-US": this.title,
        }
      },
      objectType: "Activity"
    };
  }
}
