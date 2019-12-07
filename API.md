# The Javascript API

Often a user will want to display a link to Doenet with a progress
bar.

## new doenet.Worksheet({}) 

By default, the worksheet id is `window.location`.

Options include `api` to set an API root, `title` to set the title of
the worksheet, and `id` to set the worksheet URL.

A worksheet is also an `xAPI.Object`, where it plays the role of an
Activiy.

## worksheet.setProgress(p)

performs a cross-origin PUT
/learners/:user/worksheets/:worksheet/progress via an iframe to set
the progress for the given worksheet to `p`.

## worksheet.addEventListener('progress', function(event, progress) {});

A callback for progress changes.

## new doenet.xAPI.Actor( data )

Represents various xAPI nouns.  `new doenet.xAPI.Actor()` on its own
represents the learner `me`, which you can also access via `doenet.xAPI.actor.me`.

## new doenet.xAPI.Verb( data )

For example, to produce the `reviewed` verb, 
```
new doenet.xAPI.Verb({
  "id": "http://id.tincanapi.com/verb/reviewed",
  "display": {
    "en-US": "reviewed"
  }
});
```
A large number of verbs are available under `doenet.xAPI.verb`.  For
example, instead of creating the `reviewed` verb as above, use
`doenet.xAPI.verb.reviewed`.

## new doenet.xAPI.Object( data )

Generally one does not create an object directly, since there are various types.

For example, a `doenet.Worksheet` is also an `xAPI.Object`,
specifically an `Object` of type Activity.

## new doenet.xAPI.Result( data )

From a a Doenet worksheet, produce an xAPI activity object.

## new doenet.xAPI.Statement( actor, verb, object, ... )

Build an xAPI statement by combining an actor, a verb, and so on.  For example,
```
new doenet.xAPI.Statement(
  doenet.xAPI.actor.me, 
  doenet.xAPI.verb.checkedIn,
  worksheet
  );
```

## worksheet.recordStatement( stmt ) 

performs a cross-origin POST /learners/:user/worksheets/:worksheet/statements

## worksheet.saveState( db )

Save `db` to the remote server.

## worksheet.addEventListener('state', function(event, state) {});

A callback for state changes.

(This is "real-time" via the PATCH mechanism.)

## Example

```
let worksheet = new doenet.Worksheet();
worksheet.setProgress( 0.75 );
```
