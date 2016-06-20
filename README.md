# Starter template application for Electron.js and Three.js

## Running the application
Once you have installed electron, run this application by running `electron .`
from this directory. Click and drag your mouse to rotate the scene.

## Description of files

 - The package.json file tells Electron that the entry point of the program
is `main.js`

 - main.js create our 'BrowserWindow' and loads `index.html`
in that window.

 - index.html is just like any other HTML file. It sets the page's title and
includes our JavaScript files in script tags.

 - app.js is where we initialize our THREE.js components and create our scene.

