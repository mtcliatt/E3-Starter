# Electron.js & Three.js Starter Application

<p align="center">
<img src="SCREENSHOTS/e3_app.png" width="70%" height="70%">
<div align="center"><i>A basic template to start coding your first desktop application with 3D graphics.</i></div>
</p>

-------------------

## Description

Electron.js is a great JavaScript library which allows you to "Build cross platform desktop apps with JavaScript, HTML, and CSS". Three.js is another great JavaScript library which provides you with a lightweight 3D library.

These two libraries can be combined to create amazing 3D applications written in JavaScript with great performance, and none of the limitations of running within a web browser.

Use this template to see how easy it is to create your first 3D desktop application with JavaScript.

--------------------

## What's in this template

This template uses Three.js and Electron.js to create a cross-platform desktop application with 3D graphics. The app creates a simple scene with a rotating grid of cubes and colored lines on the world's axes. You can rotate the scene and zoom in/out with the mouse.

--------------------

### File structure

- package.json - generated by `npm init`; tells Electron which file is the entry point
- main.js - entry point; tells Electron to load the index.html file
- index.html - just like any other HTML file;
  - this is the app's main page; it includes the JS and CSS files we use
- css/
  - styles.css - the only stylesheet our app uses
- js/
  - app.js - our JS code which creates the scene we see
  - three.js - the Three.js library
  - OrbitControls.js - needed to control scene with mouse
- SCREENSHOTS/ and README.md - just for GitHub

-------------------

## Running The Application

1. Install Electron.js - `npm install -g electron`
2. Clone this repository.
3. Run `electron /path/to/cloned/repository/`, or from within the directory: `electron .`


