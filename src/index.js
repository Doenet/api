import { xapiActor } from './xapi/actor.js';
import { xapiVerb } from './xapi/verb.js';
import { xapiObject } from './xapi/object.js';
import { xapiStatement } from './xapi/statement.js';

export var xAPI = {
  Actor: xapiActor,
  actor: {
    me: new xapiActor(),
  },
  
  Verb: xapiVerb,
  verb: {
    accepted: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/accept",
      display: {
        "en-US": "accepted"
      }
    }),
    accessed: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/access",
      display: {
        "en-US": "accessed"
      }
    }),
    acknowledged: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/acknowledge",
      display: {
        "en-US": "acknowledged"
      }
    }),
    added: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/add",
      display: {
        "en-US": "added"
      }
    }),
    agreed: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/agree",
      display: {
        "en-US": "agreed"
      }
    }),
    appended: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/append",
      display: {
        "en-US": "appended"
      }
    }),
    approved: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/approve",
      display: {
        "en-US": "approved"
      }
    }),
    archived: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/archive",
      display: {
        "en-US": "archived"
      }
    }),
    assigned: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/assign",
      display: {
        "en-US": "assigned"
      }
    }),
    wasAt: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/at",
      display: {
        "en-US": "was at"
      }
    }),
    attached: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/attach",
      display: {
        "en-US": "attached"
      }
    }),
    attended: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/attend",
      display: {
        "en-US": "attended"
      }
    }),
    authored: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/author",
      display: {
        "en-US": "authored"
      }
    }),
    authorized: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/authorize",
      display: {
        "en-US": "authorized"
      }
    }),
    borrowed: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/borrow",
      display: {
        "en-US": "borrowed"
      }
    }),
    built: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/build",
      display: {
        "en-US": "built"
      }
    }),
    canceled: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/cancel",
      display: {
        "en-US": "canceled"
      }
    }),
    checkedIn: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/checkin",
      display: {
        "en-US": "checked in"
      }
    }),
    closed: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/close",
      display: {
        "en-US": "closed"
      }
    }),
    completed: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/complete",
      display: {
        "en-US": "completed"
      }
    }),
    confirmed: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/confirm",
      display: {
        "en-US": "confirmed"
      }
    }),
    consumed: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/consume",
      display: {
        "en-US": "consumed"
      }
    }),
    created: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/create",
      display: {
        "en-US": "created"
      }
    }),
    deleted: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/delete",
      display: {
        "en-US": "deleted"
      }
    }),
    delivered: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/deliver",
      display: {
        "en-US": "delivered"
      }
    }),
    denied: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/deny",
      display: {
        "en-US": "denied"
      }
    }),
    disagreed: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/disagree",
      display: {
        "en-US": "disagreed"
      }
    }),
    disliked: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/dislike",
      display: {
        "en-US": "disliked"
      }
    }),
    experienced: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/experience",
      display: {
        "en-US": "experienced"
      }
    }),
    favorited: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/favorite",
      display: {
        "en-US": "favorited"
      }
    }),
    found: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/find",
      display: {
        "en-US": "found"
      }
    }),
    flaggedAsInappropriate: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/flag-as-inappropriate",
      display: {
        "en-US": "flagged as inappropriate"
      }
    }),
    followed: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/follow",
      display: {
        "en-US": "followed"
      }
    }),
    gave: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/give",
      display: {
        "en-US": "gave"
      }
    }),
    hosted: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/host",
      display: {
        "en-US": "hosted"
      }
    }),
    ignored: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/ignore",
      display: {
        "en-US": "ignored"
      }
    }),
    inserted: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/insert",
      display: {
        "en-US": "inserted"
      }
    }),
    installed: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/install",
      display: {
        "en-US": "installed"
      }
    }),
    interacted: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/interact",
      display: {
        "en-US": "interacted"
      }
    }),
    invited: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/invite",
      display: {
        "en-US": "invited"
      }
    }),
    joined: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/join",
      display: {
        "en-US": "joined"
      }
    }),
    left: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/leave",
      display: {
        "en-US": "left"
      }
    }),
    liked: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/like",
      display: {
        "en-US": "liked"
      }
    }),
    listened: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/listen",
      display: {
        "en-US": "listened"
      }
    }),
    lost: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/lose",
      display: {
        "en-US": "lost"
      }
    }),
    madeFriend: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/make-friend",
      display: {
        "en-US": "made friend"
      }
    }),
    opened: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/open",
      display: {
        "en-US": "opened"
      }
    }),
    played: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/play",
      display: {
        "en-US": "played"
      }
    }),
    presented: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/present",
      display: {
        "en-US": "presented"
      }
    }),
    purchased: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/purchase",
      display: {
        "en-US": "purchased"
      }
    }),
    qualified: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/qualify",
      display: {
        "en-US": "qualified"
      }
    }),
    read: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/read",
      display: {
        "en-US": "read"
      }
    }),
    received: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/receive",
      display: {
        "en-US": "received"
      }
    }),
    rejected: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/reject",
      display: {
        "en-US": "rejected"
      }
    }),
    removed: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/remove",
      display: {
        "en-US": "removed"
      }
    }),
    removedFriend: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/remove-friend",
      display: {
        "en-US": "removed friend"
      }
    }),
    replaced: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/replace",
      display: {
        "en-US": "replaced"
      }
    }),
    requested: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/request",
      display: {
        "en-US": "requested"
      }
    }),
    requestedFriend: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/request-friend",
      display: {
        "en-US": "requested friend"
      }
    }),
    resolved: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/resolve",
      display: {
        "en-US": "resolved"
      }
    }),
    retracted: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/retract",
      display: {
        "en-US": "retracted"
      }
    }),
    returned: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/return",
      display: {
        "en-US": "returned"
      }
    }),
    rsvpedMaybe: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/rsvp-maybe",
      display: {
        "en-US": "rsvped maybe"
      }
    }),
    rsvpedNo: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/rsvp-no",
      display: {
        "en-US": "rsvped no"
      }
    }),
    rsvpedYes: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/rsvp-yes",
      display: {
        "en-US": "rsvped yes"
      }
    }),
    satisfied: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/satisfy",
      display: {
        "en-US": "satisfied"
      }
    }),
    saved: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/save",
      display: {
        "en-US": "saved"
      }
    }),
    scheduled: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/schedule",
      display: {
        "en-US": "scheduled"
      }
    }),
    searched: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/search",
      display: {
        "en-US": "searched"
      }
    }),
    sold: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/sell",
      display: {
        "en-US": "sold"
      }
    }),
    sent: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/send",
      display: {
        "en-US": "sent"
      }
    }),
    shared: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/share",
      display: {
        "en-US": "shared"
      }
    }),
    sponsored: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/sponsor",
      display: {
        "en-US": "sponsored"
      }
    }),
    started: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/start",
      display: {
        "en-US": "started"
      }
    }),
    stoppedFollowing: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/stop-following",
      display: {
        "en-US": "stopped following"
      }
    }),
    submitted: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/submit",
      display: {
        "en-US": "submitted"
      }
    }),
    tagged: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/tag",
      display: {
        "en-US": "tagged"
      }
    }),
    terminated: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/terminate",
      display: {
        "en-US": "terminated"
      }
    }),
    tied: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/tie",
      display: {
        "en-US": "tied"
      }
    }),
    unfavorited: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/unfavorite",
      display: {
        "en-US": "unfavorited"
      }
    }),
    unliked: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/unlike",
      display: {
        "en-US": "unliked"
      }
    }),
    unsatisfied: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/unsatisfy",
      display: {
        "en-US": "unsatisfied"
      }
    }),
    unsaved: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/unsave",
      display: {
        "en-US": "unsaved"
      }
    }),
    unshared: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/unshare",
      display: {
        "en-US": "unshared"
      }
    }),
    updated: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/update",
      display: {
        "en-US": "updated"
      }
    }),
    used: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/use",
      display: {
        "en-US": "used"
      }
    }),
    watched: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/watch",
      display: {
        "en-US": "watched"
      }
    }),
    won: new xapiVerb({
      id: "http://activitystrea.ms/schema/1.0/win",
      display: {
        "en-US": "won"
      }
    }),
    answered: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/answered",
      display: {
        "en-US": "answered"
      }
    }),
    asked: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/asked",
      display: {
        "en-US": "asked"
      }
    }),
    attempted: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/attempted",
      display: {
        "en-US": "attempted"
      }
    }),
    attended: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/attended",
      display: {
        "en-US": "attended"
      }
    }),
    commented: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/commented",
      display: {
        "en-US": "commented"
      }
    }),
    completed: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/completed",
      display: {
        "en-US": "completed"
      }
    }),
    exited: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/exited",
      display: {
        "en-US": "exited"
      }
    }),
    experienced: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/experienced",
      display: {
        "en-US": "experienced"
      }
    }),
    failed: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/failed",
      display: {
        "en-US": "failed"
      }
    }),
    imported: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/imported",
      display: {
        "en-US": "imported"
      }
    }),
    initialized: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/initialized",
      display: {
        "en-US": "initialized"
      }
    }),
    interacted: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/interacted",
      display: {
        "en-US": "interacted"
      }
    }),
    launched: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/launched",
      display: {
        "en-US": "launched"
      }
    }),
    mastered: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/mastered",
      display: {
        "en-US": "mastered"
      }
    }),
    passed: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/passed",
      display: {
        "en-US": "passed"
      }
    }),
    preferred: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/preferred",
      display: {
        "en-US": "preferred"
      }
    }),
    progressed: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/progressed",
      display: {
        "en-US": "progressed"
      }
    }),
    registered: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/registered",
      display: {
        "en-US": "registered"
      }
    }),
    responded: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/responded",
      display: {
        "en-US": "responded"
      }
    }),
    resumed: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/resumed",
      display: {
        "en-US": "resumed"
      }
    }),
    scored: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/scored",
      display: {
        "en-US": "scored"
      }
    }),
    shared: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/shared",
      display: {
        "en-US": "shared"
      }
    }),
    suspended: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/suspended",
      display: {
        "en-US": "suspended"
      }
    }),
    terminated: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/terminated",
      display: {
        "en-US": "terminated"
      }
    }),
    voided: new xapiVerb({
      id: "http://adlnet.gov/expapi/verbs/voided",
      display: {
        "en-US": "voided"
      }
    }),
    edited: new xapiVerb({
      id: "http://curatr3.com/define/verb/edited",
      display: {
        "en-US": "edited"
      }
    }),
    edited: new xapiVerb({
      id: "http://curatr3.com/define/verb/voted-down",
      display: {
        "en-US": "edited"
      }
    }),
    edited: new xapiVerb({
      id: "http://curatr3.com/define/verb/voted-up",
      display: {
        "en-US": "edited"
      }
    }),
    pressed: new xapiVerb({
      id: "http://future-learning.info/xAPI/verb/pressed",
      display: {
        "en-US": "pressed"
      }
    }),
    released: new xapiVerb({
      id: "http://future-learning.info/xAPI/verb/released",
      display: {
        "en-US": "released"
      }
    }),
    adjourned: new xapiVerb({
      id: "http://id.tincanapi.com/verb/adjourned",
      display: {
        "en-US": "adjourned"
      }
    }),
    applauded: new xapiVerb({
      id: "http://id.tincanapi.com/verb/applauded",
      display: {
        "en-US": "applauded"
      }
    }),
    arranged: new xapiVerb({
      id: "http://id.tincanapi.com/verb/arranged",
      display: {
        "en-US": "arranged"
      }
    }),
    bookmarked: new xapiVerb({
      id: "http://id.tincanapi.com/verb/bookmarked",
      display: {
        "en-US": "bookmarked"
      }
    }),
    called: new xapiVerb({
      id: "http://id.tincanapi.com/verb/called",
      display: {
        "en-US": "called"
      }
    }),
    closedSale: new xapiVerb({
      id: "http://id.tincanapi.com/verb/closed-sale",
      display: {
        "en-US": "closed sale"
      }
    }),
    createdOpportunity: new xapiVerb({
      id: "http://id.tincanapi.com/verb/created-opportunity",
      display: {
        "en-US": "created opportunity"
      }
    }),
    defined: new xapiVerb({
      id: "http://id.tincanapi.com/verb/defined",
      display: {
        "en-US": "defined"
      }
    }),
    disabled: new xapiVerb({
      id: "http://id.tincanapi.com/verb/disabled",
      display: {
        "en-US": "disabled"
      }
    }),
    discarded: new xapiVerb({
      id: "http://id.tincanapi.com/verb/discarded",
      display: {
        "en-US": "discarded"
      }
    }),
    downloaded: new xapiVerb({
      id: "http://id.tincanapi.com/verb/downloaded",
      display: {
        "en-US": "downloaded"
      }
    }),
    earned: new xapiVerb({
      id: "http://id.tincanapi.com/verb/earned",
      display: {
        "en-US": "earned"
      }
    }),
    enabled: new xapiVerb({
      id: "http://id.tincanapi.com/verb/enabled",
      display: {
        "en-US": "enabled"
      }
    }),
    estimatedTheDuration: new xapiVerb({
      id: "http://id.tincanapi.com/verb/estimated-duration",
      display: {
        "en-US": "estimated the duration"
      }
    }),
    expected: new xapiVerb({
      id: "http://id.tincanapi.com/verb/expected",
      display: {
        "en-US": "expected"
      }
    }),
    expired: new xapiVerb({
      id: "http://id.tincanapi.com/verb/expired",
      display: {
        "en-US": "expired"
      }
    }),
    focused: new xapiVerb({
      id: "http://id.tincanapi.com/verb/focused",
      display: {
        "en-US": "focused"
      }
    }),
    enteredFrame: new xapiVerb({
      id: "http://id.tincanapi.com/verb/frame/entered",
      display: {
        "en-US": "entered frame"
      }
    }),
    exitedFrame: new xapiVerb({
      id: "http://id.tincanapi.com/verb/frame/exited",
      display: {
        "en-US": "exited frame"
      }
    }),
    hired: new xapiVerb({
      id: "http://id.tincanapi.com/verb/hired",
      display: {
        "en-US": "hired"
      }
    }),
    interviewed: new xapiVerb({
      id: "http://id.tincanapi.com/verb/interviewed",
      display: {
        "en-US": "interviewed"
      }
    }),
    laughed: new xapiVerb({
      id: "http://id.tincanapi.com/verb/laughed",
      display: {
        "en-US": "laughed"
      }
    }),
    unread: new xapiVerb({
      id: "http://id.tincanapi.com/verb/marked-unread",
      display: {
        "en-US": "unread"
      }
    }),
    mentioned: new xapiVerb({
      id: "http://id.tincanapi.com/verb/mentioned",
      display: {
        "en-US": "mentioned"
      }
    }),
    mentored: new xapiVerb({
      id: "http://id.tincanapi.com/verb/mentored",
      display: {
        "en-US": "mentored"
      }
    }),
    paused: new xapiVerb({
      id: "http://id.tincanapi.com/verb/paused",
      display: {
        "en-US": "paused"
      }
    }),
    performed: new xapiVerb({
      id: "http://id.tincanapi.com/verb/performed-offline",
      display: {
        "en-US": "performed"
      }
    }),
    personalized: new xapiVerb({
      id: "http://id.tincanapi.com/verb/personalized",
      display: {
        "en-US": "personalized"
      }
    }),
    previewed: new xapiVerb({
      id: "http://id.tincanapi.com/verb/previewed",
      display: {
        "en-US": "previewed"
      }
    }),
    promoted: new xapiVerb({
      id: "http://id.tincanapi.com/verb/promoted",
      display: {
        "en-US": "promoted"
      }
    }),
    rated: new xapiVerb({
      id: "http://id.tincanapi.com/verb/rated",
      display: {
        "en-US": "rated"
      }
    }),
    replied: new xapiVerb({
      id: "http://id.tincanapi.com/verb/replied",
      display: {
        "en-US": "replied"
      }
    }),
    repliedToTweet: new xapiVerb({
      id: "http://id.tincanapi.com/verb/replied-to-tweet",
      display: {
        "en-US": "replied to tweet"
      }
    }),
    requestedAttention: new xapiVerb({
      id: "http://id.tincanapi.com/verb/requested-attention",
      display: {
        "en-US": "requested attention"
      }
    }),
    retweeted: new xapiVerb({
      id: "http://id.tincanapi.com/verb/retweeted",
      display: {
        "en-US": "retweeted"
      }
    }),
    reviewed: new xapiVerb({
      id: "http://id.tincanapi.com/verb/reviewed",
      display: {
        "en-US": "reviewed"
      }
    }),
    secured: new xapiVerb({
      id: "http://id.tincanapi.com/verb/secured",
      display: {
        "en-US": "secured"
      }
    }),
    selected: new xapiVerb({
      id: "http://id.tincanapi.com/verb/selected",
      display: {
        "en-US": "selected"
      }
    }),
    skipped: new xapiVerb({
      id: "http://id.tincanapi.com/verb/skipped",
      display: {
        "en-US": "skipped"
      }
    }),
    talked: new xapiVerb({
      id: "http://id.tincanapi.com/verb/talked-with",
      display: {
        "en-US": "talked"
      }
    }),
    terminatedEmploymentWith: new xapiVerb({
      id: "http://id.tincanapi.com/verb/terminated-employment-with",
      display: {
        "en-US": "terminated employment with"
      }
    }),
    tweeted: new xapiVerb({
      id: "http://id.tincanapi.com/verb/tweeted",
      display: {
        "en-US": "tweeted"
      }
    }),
    unfocused: new xapiVerb({
      id: "http://id.tincanapi.com/verb/unfocused",
      display: {
        "en-US": "unfocused"
      }
    }),
    unregistered: new xapiVerb({
      id: "http://id.tincanapi.com/verb/unregistered",
      display: {
        "en-US": "unregistered"
      }
    }),
    viewed: new xapiVerb({
      id: "http://id.tincanapi.com/verb/viewed",
      display: {
        "en-US": "viewed"
      }
    }),
    downVoted: new xapiVerb({
      id: "http://id.tincanapi.com/verb/voted-down",
      display: {
        "en-US": "down voted"
      }
    }),
    upVoted: new xapiVerb({
      id: "http://id.tincanapi.com/verb/voted-up",
      display: {
        "en-US": "up voted"
      }
    }),
    wasAssignedJobTitle: new xapiVerb({
      id: "http://id.tincanapi.com/verb/was-assigned-job-title",
      display: {
        "en-US": "was assigned job title"
      }
    }),
    wasHiredBy: new xapiVerb({
      id: "http://id.tincanapi.com/verb/was-hired-by",
      display: {
        "en-US": "was hired by"
      }
    }),
    annotated: new xapiVerb({
      id: "http://risc-inc.com/annotator/verbs/annotated",
      display: {
        "en-US": "annotated"
      }
    }),
    modifiedAnnotation: new xapiVerb({
      id: "http://risc-inc.com/annotator/verbs/modified",
      display: {
        "en-US": "modified annotation"
      }
    }),
    earnedAnOpenBadge: new xapiVerb({
      id: "http://specification.openbadges.org/xapi/verbs/earned",
      display: {
        "en-US": "earned an open badge"
      }
    }),
    drew: new xapiVerb({
      id: "http://www.digital-knowledge.co.jp/tincanapi/verbs/drew",
      display: {
        "en-US": "drew"
      }
    }),
    cancelledPlannedLearning: new xapiVerb({
      id: "http://www.tincanapi.co.uk/pages/verbs.html#cancelled_planned_learning",
      display: {
        "en-US": "cancelled planned learning"
      }
    }),
    planned: new xapiVerb({
      id: "http://www.tincanapi.co.uk/pages/verbs.html#planned_learning",
      display: {
        "en-US": "planned"
      }
    }),
    enrolledOntoLearningPlan: new xapiVerb({
      id: "http://www.tincanapi.co.uk/verbs/enrolled_onto_learning_plan",
      display: {
        "en-US": "enrolled onto learning plan"
      }
    }),
    evaluated: new xapiVerb({
      id: "http://www.tincanapi.co.uk/verbs/evaluated",
      display: {
        "en-US": "evaluated"
      }
    }),
    added: new xapiVerb({
      id: "https://brindlewaye.com/xAPITerms/verbs/added/",
      display: {
        "en-US": "added"
      }
    }),
    logIn: new xapiVerb({
      id: "https://brindlewaye.com/xAPITerms/verbs/loggedin/",
      display: {
        "en-US": "log in"
      }
    }),
    logOut: new xapiVerb({
      id: "https://brindlewaye.com/xAPITerms/verbs/loggedout/",
      display: {
        "en-US": "log out"
      }
    }),
    ran: new xapiVerb({
      id: "https://brindlewaye.com/xAPITerms/verbs/ran/",
      display: {
        "en-US": "ran"
      }
    }),
    removed: new xapiVerb({
      id: "https://brindlewaye.com/xAPITerms/verbs/removed/",
      display: {
        "en-US": "removed"
      }
    }),
    reviewed: new xapiVerb({
      id: "https://brindlewaye.com/xAPITerms/verbs/reviewed/",
      display: {
        "en-US": "reviewed"
      }
    }),
    walked: new xapiVerb({
      id: "https://brindlewaye.com/xAPITerms/verbs/walked/",
      display: {
        "en-US": "walked"
      }
    }),
  },
  
  Object: xapiObject,
  Statement: xapiStatement,
};

export { Worksheet } from './worksheet.js';

