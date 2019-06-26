import axios from 'axios';

export class Worksheet {
  constructor(options = {}) {
    if (options.api) {
      this.api = options.api;
    } else {
      this.api = "https://doenet.org";
    }

    this.id = window.location.toString();
  }
  
  recordStatement( stmt ) {
  }

  recordProgress( score ) {
    // BADBAD: send this.id too because sometimes the referer isn't
    // sent
    return axios.put(this.api + '/learners/me/progress', {
      score: score      
    });
  }

  saveState( state ) {
  }

  fetchState( state ) {
  }

  watchState( state ) {
  }    
}
