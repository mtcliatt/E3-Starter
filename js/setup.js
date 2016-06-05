'use strict';

// Overwrite the settings below by changing them
// in js/defaults.js, not here
const {
  fov = 45,
  near = 1,
  far = 100,
  antialiasingOn = true,
  width = window.innerWidth,
  height = window.innerHeight,
  backgroundColor = new THREE.Color(0, 0, 0),
} = require('./defaults.js');

// Exports
const {camera, scene, renderer} = setup();

module.exports = {
  camera,
  scene,
  renderer,
};

/** @private */
function setup() {
  const aspect = width / height;

  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  const scene = new THREE.Scene;
  const renderer = new THREE.WebGLRenderer({ antialias: antialiasingOn });

  scene.add(camera);

  renderer.setSize(width, height);
  renderer.setClearColor(backgroundColor, 1);

  window.addEventListener('resize', function() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });

  document.body.appendChild(renderer.domElement);

  return {camera, scene, renderer};
}
