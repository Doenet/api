import template from './gdpr.html';

export function gdprConsent(callback) {
  var consent = localStorage.getItem('gdpr.doenet.cloud');

  if (consent) {
    callback(consent);
  } else {
    let dialog = document.createElement('div');
    dialog.classList.add( 'doenet-gdpr' );
    dialog.innerHTML = template;

    let yesButton = document.createElement('button');
    yesButton.type = 'button';
    yesButton.appendChild( document.createTextNode("Yes, share my information") );
    dialog.appendChild( yesButton );

    let noButton = document.createElement('button');
    noButton.type = 'button';
    noButton.appendChild( document.createTextNode("No, do not track me") );
    dialog.appendChild( noButton );
    
    document.body.appendChild(dialog);
    
    yesButton.addEventListener("click", () => {
      consent = Date.now();
      localStorage.setItem('gdpr.doenet.cloud', consent);
      dialog.remove();
      
      callback(consent);
    });

    noButton.addEventListener("click", () => {
      localStorage.removeItem('gdpr.doenet.cloud');
      dialog.remove();
    });
  }
}
