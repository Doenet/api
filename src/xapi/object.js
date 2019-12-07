export class xapiObject {
  constructor() {
  }

  extendStatement( statement ) {
    statement.object = this;
  }
}

