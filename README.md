# Offline-App-Try
App for trying out service workers and offline first approach

## Getting started
You must have node installed to run the app. Run the following commands to install the dependencies and start the server:
* npm install
* node server.js

Then load the "http://localhost:3000/" in the browser.

## Trying offline mode
* Load the app first time. All the static resources would be cached after that.
* Open Chome Dev Tools -> Application -> Service Workers.
* Select the checkbox "Offline".
* Reload the app.
* Alternatively you can also stop the server and try reloading the app.
