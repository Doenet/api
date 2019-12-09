import './panel.css'

let thePanel = undefined;
let theIFrame = undefined;
let theBar = undefined;
let theMeter = undefined;
let progress = undefined;

// FIXME: this creates a singleton, so there can be only one apiRoot
// on a given page
export function createPanelElement(apiRoot) {
  if (theIFrame !== undefined)
    return theIFrame;
  
  thePanel = document.createElement('div');
  thePanel.classList.add(  'doenet-panel' );

  ////////////////////////////////////////////////////////////////
  // Create the panel progress meter
  theMeter = document.createElement('div');
  theMeter.classList.add(  'doenet-meter' );
  thePanel.appendChild(theMeter);

  theBar = document.createElement('span');
  theBar.classList.add(  'doenet-progress' );
  setProgressBar( progress );  
  theMeter.appendChild( theBar );

  ////////////////////////////////////////////////////////////////
  // Display the user's name
  var name = document.createElement('div');
  name.classList.add(  'doenet-name' );
  thePanel.appendChild(name);

  // I want to use the identity logged into doenet, so we proxy this
  // all through an iframe
  var theIFrame = document.createElement('iframe');
  //theIFrame.style.display = "none";
  theIFrame.style.border = "0";
  theIFrame.style.overflow = "visible";
  // Kept in sync with size in https://github.com/Doenet/lrs/blob/master/src/controllers/iframe.js
  theIFrame.style.height = "14pt";
  theIFrame.style.width = "64pt";
  theIFrame.src = apiRoot + "/iframe.html";
  name.appendChild(theIFrame);
  
  document.body.appendChild(thePanel);
  
  return theIFrame;
}

export function setProgressBar( value ) {
  progress = value;
  
  if (theBar) {
    if (typeof value === 'number') {
      theBar.style.width = (Math.round(value * 1000) / 10.0).toString() + '%';
    } else {
      theBar.style.width = '0%';
    }
  }
}
