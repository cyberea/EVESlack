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
   const cssURI = 'https://raw.githubusercontent.com/cyberea/EVESlack/master/ui.scss';
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
