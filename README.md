# Pseudo SSR - Ionic Angular

For lack of better words that is...


A demo repo to show one can add truckload of static content to an angular app, and then bootstrap it on user action.

Meanwhile the service worker registers and loads all the chunks.

So when the app installed as PWA (or fired as SPA) - we have instant action (FCP, TTI).

It will be easy to create logic that skips the static content if the app is in PWA mode. In which case we don't need SSR that much any more.

Agree?
