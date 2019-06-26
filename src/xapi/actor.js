export class xapiActor {
  constructor( name ) {
    if (name) {
      this.name = name;
    } else {
      this.name = 'me';
    }
  }
}
