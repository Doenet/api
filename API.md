# The Javascript API

## new doenet.Worksheet() 

By default, the worksheet id is `window.location.path`. 

## new doenet.xAPI.Actor( { blah blah } )
## new doenet.xAPI.Verb( { blah blah } )
## new doenet.xAPI.Object( { blah blah } )
## new doenet.xAPI.Statement( { blah blah } )

represents various xAPI nouns.  `new doenet.Actor()` on its own is the
learner `me`.

## worksheet.progress = p

performs a cross-origin PUT /learners/:user/progress to set the progress to `p`.

## worksheet.recordStatement( stmt ) 

performs a cross-origin POST /learners/:user/statements

## worksheet.saveState( db )

Save `db` to the remote server.

## worksheet.fetchState()

Return a `Promise` that resolves to the previously saved `db` object.

## worksheet.watchState()

Somehow provide real-time updates?

## Example

```
let worksheet = new doenet.Worksheet();
worksheet.progress = 0.75;
```

