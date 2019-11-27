import axios from 'axios';
import fingerprint from 'fingerprintjs2';
import hash from 'object-hash';

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

export class Worksheet {
  constructor(options = {}) {    
    if (options.api) {
      this.api = options.api;
    } else {
      this.api = "https://doenet.org";
    }

    if (options.id) {
      // FIXME: We are *trusting* the caller here...
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

    // I want to use the identity logged into doenet, so we proxy this
    // all through an iframe
    var iframe = document.createElement('iframe');
    iframe.style.display = "none";
    iframe.src = this.api + "/iframe.html";
    document.body.appendChild(iframe);
    this.contentWindow = iframe.contentWindow;

    // let registered event handlers know about progress updates
    window.addEventListener("message", function(event) {
      if (event.source == iframe.contentWindow) {
        worksheet.progress = event.data;
        
        for( const callback of worksheet.progressCallbacks ) {
          callback( event, event.data );
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

  recordStatement( stmt ) {
  }
  
  saveState( state ) {
  }

  fetchState( state ) {
  }

  watchState( state ) {
  }    
}
