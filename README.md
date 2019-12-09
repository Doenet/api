# JavaScript library for Doenet services

**This is a public beta for a piece of the Doenet infrastructure.**
Reflecting this, the current name of this package on npm is
[@doenet/beta](https://www.npmjs.com/package/@doenet/beta).

Content authors can use Doenet to send scores back to a course
instructor.

## What is this?

On the open web, a variety of pages may provide some educational
content; as learners engage with this content, these pages should
report back to a gradebook (or rather to an **atlas,** i.e., report to
"learning activity storage" which presents various dashboards to the
instructor) so the instructor can reward learners' good activity with
points.

A traditional approach for connecting external tools to an LMS
gradebook is LTI, which is challenging to say the least.  Worse than
the technical challenge, the current LTI and LMS ecosystem encourages
walled gardens and hidden closed-source content.  Instructors may be
building great content, but it's content most of the world cannot see,
and if they can see it, they cannot participate as first-class
learners.  A first-class learner can see his/her own progress, view a
record their successes.  Doenet aims to open these walled gardens and
invite learner's everywhere to engage deeply with interactive content
by making it easy for content authors to connect their (statically
hosted!) pages to something richer than a gradebook.

In short, it's **"Google analytics for education"**, co-opting the
"good" parts of e-commerce to improve open educational materials.

## Complete demo

If you put the following stanza in your HTML file's `<head>`

```
<script src="https://unpkg.com/@doenet/beta/dist/doenet.js" />
<link rel="stylesheet" href="https://unpkg.com/@doenet/beta/dist/main.css">
<script type=“text/javascript”>
window.addEventListener('DOMContentLoaded', (event) => {
  let worksheet = new doenet.Worksheet();
  worksheet.setProgress( 1.00 );
});
</script>
```

then visitors will automatically receive full credit (a `progress` of
`1.00`) when they visit your page.

Let's break down what this is doing.

### Loading Doenet

The first two lines

```
<script src="https://unpkg.com/@doenet/beta/dist/doenet.js" />
<link rel="stylesheet" href="https://unpkg.com/@doenet/beta/dist/main.css">
```

load the Doenet JavaScript and CSS.  Relying on
[unpkg.com](https://unpkg.com) is just a convenience here; you can
also access the Doenet library via `npm`.

### GDPR compliance

This software **is** third-party tracking---one goal is to let
instructors track their students' scores across various websites---so
for GDPR it is especially important to consider how to explain this to
website visitors and handle consent.

Running `new doenet.Worksheet()` will trigger a GDPR disclosure and an
affirmative consent process for the first-time visitor to your domain.

Visitors must choose whether or not to participate in tracking at that
point.  If they choose not to participate, they can still engage with
your website but their data will not be stored on a Doenet server.

So running

```
let worksheet = new doenet.Worksheet();
```

will get us started.  If they consent, the logged-in learner's first
name will appear in the upper right corner, or "anonymous" for those
who haven't authenticated to Doenet before.  Worried about FERPA?  The
first name is wrapped in an iframe on a doenet origin; the same-origin
constraint then serves as a FERPA protection, i.e., the Javascript
running on your page cannot read the identity of the learner.

### Progress

To enable your page to send "progress" (meaning those gradebook
updates) back to Doenet, use

```
worksheet.progress = 0.17;
```

or equivalently `worksheet.setProgress( 0.17 );`.

This will record a score of 17% to the gradebook.  Progress is a float
between 0 and 1, and it is **monotone** so a student who has made
progress cannot lose that progress.

### Page state

Suppose we wanted to store some information about the page.  Running
```
worksheet.state = { x: 3, y: 5 };
```
will trigger a `PATCH` to record the page state.

Let's say the learner has the page open on another devices, and that other device runs `worksheet.state.y = 17`.  If you have subscribed to state updates with
```
worksheet.addEventListener('state', function(event, state) {
  console.log("The new state is", state);
});
```
you will then receive these changes.

### xAPI

Doenet also makes it easy to send and record xAPI events.  More on
these advanced features are described in the [API](./API.md).


