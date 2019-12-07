export class xapiStatement {
  constructor() {
    this.triple = {}
    for( const x of arguments ) {
      x.extendStatement( this.triple );
    }
  }

  toJSON() {
    return this.triple;
  }
}
