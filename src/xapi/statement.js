export class xapiStatement {
  constructor() {
    for( const x in arguments ) {
      x.extendStatement( this );
    }
  }
}
