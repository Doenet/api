export class xapiObject {
  constructor() {
  }

  extendStatement( statement ) {
    statement.object = this;
  }
}

export class xapiActivity extends xapiObject {
  constructor() {
  }
}
