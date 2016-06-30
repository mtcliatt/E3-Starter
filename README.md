# Starter template application for Electron.js and Three.js

## Description

**This is small sample application to demonstrate the simplicity of
using THREE.js in an electron.js application.**

The application uses THREE.js to create a rotating grid of rotating cubes.
The 3D grid rotates around the origin, and each cube within the grid
rotates individually. Each cube is colored based on its position.
There are 3 lines running along the x, y, and z axes.

## Running the application

Once you have installed electron, run this application with this command: 
  
    electron /path/to/directory/

Click and drag or scroll in and out to change the view

## How it works

 - The entry point for the application is defined in `package.json` as main.js.

 - `main.js` creates an electron.js application and loads index.html.

 - `index.html` creates a div element on the page which app.js uses to draw in.
