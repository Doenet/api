export class xapiVerb {
  constructor( data ) {
    this.id = data.id;
    
    if (data.display) {
      this.display = data.display;
    }
  }

  extendStatement( statement ) {
    statement.verb = this;
  }
}

/*
{
  "id": "http://adlnet.gov/expapi/verbs/experienced",
  "display": { 
    "en-US": "experienced"
  }
}*/
