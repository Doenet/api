export class xapiActor {
  constructor( data ) {
    if (data && data.name) {
      this.name = data.name;
    } else {
      this.name = 'me';
    }
  }

  extendStatement( statement ) {
    statement.actor = this;
  }
}
