# Starter template application for Electron.js and Three.js

### Description

##### package.json
The package.json file tells Electron.js to start by running main.js

##### main.js
main.js creates an electron window to hold our html and run our JavaScript code
main.js also tells the window to load the file js/index.html

##### index.html
index.html includes app.js in script tags and creates any HTML elements to be in the window

##### app.js
app.js draws the graphics on the screen
app.js uses the js/three.js, which is the Three.js library, and js/setup.js, which initializes the Three components
app.js creates and places a grid of cubes in the scene

##### three.js
three.js is the Three.js JavaScript library created by mr. doob
this file contains everything we need to start working with the Three.js library

##### setup.js
setup.js intializes the important things we need to work with three.js like the camera, the scene, and the renderer
setup.js creates a scene, places a camera in that scene, and makes a renderer to render the graphics on the screen
setup.js reads the variables from js/defaults.js to overwrite the default values used

##### defaults.js
defaults.js is a file that you can use to change the default values of some properties like:

 - Field of view
 - Near and far clipping places
 - Height and width of the area to draw graphics in
 - Window background color

By default, all values in defaults.js are set to undefined, this means that no value is specified and the values will be decided by setup.js. Changing any value from undefined will allow you to specify its value. 


