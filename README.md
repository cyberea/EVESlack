# EVESlack (Work in Progress)
EVE Online styled UI for Slack Web &amp; Desktop Apps

Whilst the WebApp version works pretty well as seen in the screenshot, the DesktopApp is quite flakey and I am working on it.

— Cyberea

# Example

![EVE Slack](https://github.com/cyberea/EVESlack/raw/master/assets/screenshot.jpg)

# Instructions: Web App

1. Install a Style Manipulator Extension to your Web Browser. Recommended: Stylus or Stylish.
1. Create a new Style Profile.
1. Apply URLs matching: `https://[^./]*\.slack\.com/(?!pricing)(?!security).*`
1. Paste the contents of `ui.scss` into the code block.
1. Save the profile.
1. Reload Slack.

# Instructions: Desktop App

NOTE: You will need to perform this procedure after each Slack update/patch.

1. Copy the following file to your Desktop:
    - MacOS: `Applications/Slack.app/Contents/Resources/app.asar.unpacked/src/static/index.js`
    - Windows: `C:\Users\___USER___\AppData\Local\slack\app-___VERSION___\resources\app.asar.unpacked\src\static\index.js`
1. Open the file with a text editor of your choosing.
1. Append the (uncommented) javascript within `index.js` to the end of the file. Do not modify the existing scripts!
1. Save the file and overwrite the original.
1. Reload Slack.

Any issues, please contact me.

# Optional: Preferences > Sidebar

![Preferences 1](https://github.com/cyberea/EVESlack/raw/master/assets/slack-preferences-sidebar-1.jpg)

![Preferences 2](https://github.com/cyberea/EVESlack/raw/master/assets/slack-preferences-sidebar-2.jpg)
