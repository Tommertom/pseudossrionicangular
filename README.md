# Pseudo SSR - Ionic Angular
For lack of better words that is...

A demo repo to show one can add truckload of static content to an angular app, and then bootstrap it on user action.

With the point that SSR and Ionic/Angular not working nicely (assumption!) - I was thinking of an alternative strategy to realise the following:
* Fast loading of content to achieve fast FCP and TTI (so first pain and soon interaction)
* SEO friendliness by having static content

And maybe not necessarily an SSR point - but an PWA point  - create some landing page that explains the user if how and when she/he can install the app.

Which in turn also helps in surpassing the time until the beforeinstallprompt is fired for a clean install in Android.

So, I came up with the following repo that does a few things different compared to an out-of-the-box Angular-SPA with PWA:

* There is lots of content in index.html which is shown if the app is not an PWA
* The angular app is not bootstrapped until a useraction is done (or time passed) otherwise
* Meanwhile a service worker is loaded anyway to start caching stuff, once the SPA is needed

Under the hood, two "magical" things happening:
* index.html is communicating with main.ts via the window object to boostrap the SPA - so no automatic bootstrap
* index.html manually loads the service worker. Afterwards, angular picks up

And here the demo - https://oima-543bb.web.app

All Ionic Angular folks out there - any thoughts on this experiment?

Code to look at:
- src/index.html (including class='hydrated' in html!!)
- src/main.ts

And here the demo - https://oima-543bb.web.app

Agree?

(also on Ionic forum - https://forum.ionicframework.com/t/pseudo-ssr-for-ionic-angular-is-this-a-realistic-alternative/225757)

