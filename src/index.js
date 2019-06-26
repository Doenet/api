import { xapiActor } from './xapi/actor.js';
import { xapiVerb } from './xapi/verb.js';
import { xapiObject, xapiActivity } from './xapi/object.js';
import { xapiStatement } from './xapi/statement.js';

export var xAPI = {
  Actor: xapiActor,
  Verb: xapiVerb,
  Object: xapiObject,
  Statement: xapiStatement,
  Activity: xapiActivity
};

export { Worksheet } from './worksheet.js';

