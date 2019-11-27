# Doenet JavaScript API

On the open web, a variety of pages may provide some educational
content; as learners engage with this content, these pages should
report back to the gradebook so the instructor can reward learners
with points.

A traditional approach is LTI, which is challenging.  The Doenet API
makes it easy for even static pages to connect to a gradebook.

To enable your page to send "progress" (meaning gradebook) back
to the Doenet gradebook, simply include code like this.
```
let worksheet = new doenet.Worksheet();
worksheet.setProgress( 0.75 );
```
