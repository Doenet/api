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

    this.id = window.location.toString();

    // I want to use the identity logged into doenet, so we proxy this
    // all through an iframe
    var iframe = document.createElement('iframe');
    iframe.style.display = "none";
    iframe.src = this.api + "/iframe.html";
    document.body.appendChild(iframe);
    this.contentWindow = iframe.contentWindow;

    let worksheet = this;
    iframe.addEventListener("load", function() {
      iframe.contentWindow.postMessage( { message: 'getProgress',
                                        parameters: { worksheet: worksheet.id } },
                                      worksheet.api );
    });
    
    (async function() {
      let fp = await fetchFingerprint();
      console.log(fp);
      console.log(hash(fp));
    })();
  }
  
  recordStatement( stmt ) {
  }

  set progress( score ) {
    this.contentWindow.postMessage( { message: 'setProgress',
                                      parameters: { score: score, worksheet: this.id } },
                                    this.api );
  }

  get progress() {
  }

  
  saveState( state ) {
  }

  fetchState( state ) {
  }

  watchState( state ) {
  }    
}
