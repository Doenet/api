# JavaScript library for Doenet services

On the open web, a variety of pages may provide some educational
content; as learners engage with this content, these pages should
report back to a gradebook (or rather an **atlas,** i.e., report to
"learning activity storage") so the instructor can reward learners'
good activity with points.

A traditional approach for connecting external tools to a gradebook is
LTI, which is challenging to say the least.  Worse, the current LTI
and LMS ecosystem encourages walled gardens and hidden content.
Instructors are building great content which most of the world cannot
see, and if they can see it, they cannot participate as first-class
learners, seeing their progress, recording their successes.  Doenet
aims to change this by making it easy for even static pages to connect
to a gradebook.

To enable your page to send "progress" (meaning those gradebook updates) back
to Doenet, load the Doenet javascript and include code like this.
```
let worksheet = new doenet.Worksheet();
worksheet.setProgress( 0.75 );
```



## GDPR compliance

This software is third-party tracking---the point is to let
instructors track their students' scores across various websites---so
for GDPR it is especially important to consider how to explain this to
website visitors.  Running `new doenet.Worksheet()` will trigger a
GDPR disclosure and consent process for the first-time visitor.
