/*

... SCRIPT WITHIN INDEX.JS - DO NOT MODIFY ...
... SCRIPT WITHIN INDEX.JS - DO NOT MODIFY ...
... SCRIPT WITHIN INDEX.JS - DO NOT MODIFY ...

MACOS:   /Applications/Slack.app/Contents/Resources/app.asar.unpacked/src/static/index.js
WINDOWS: C:\Users\___USER____\AppData\Local\slack\app-____VERSION____\resources\app.asar.unpacked\src\static\index.js

 */

// First make sure the wrapper app is loaded
document.addEventListener("DOMContentLoaded", function() { // eslint-disable-line
   // Then get its webviews
   let webviews = document.querySelectorAll(".TeamView webview");

   // Fetch EVEStyle CSS in parallel ahead of time
   const cssURI = 'https://gist.githubusercontent.com/widget-/f97f6e6697b185692f3836e47e2b6ad3/raw/ea5b8764e66c44aa367f44dcff33f89c480ae58b/custom.css';
   let cssPromise = fetch(cssURI).then(response => response.text());

   // Then wait for the views to load
   webviews.forEach(webview => {
      webview.addEventListener('ipc-message', message => {
         if (message.channel == 'didFinishLoading')
            // Finally add the CSS in
            cssPromise.then(css => webview.insertCSS(css));
      });
   });
});
