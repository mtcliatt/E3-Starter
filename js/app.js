'use strict';

let THREE = require('./js/three.js');

// Necessary THREE.js components
let {camera, scene, renderer} = require('./js/setup');

createWorld();
animate();

function createWorld() {

  // width, height, and depth of each cube and spacing between them
  const cubeSize    = 1,
        cubeSpacing = 3;

  // Rows, columns, and layers
  const rows    = 5,
        columns = 5,
        layers  = 5;

  // Make BoxGeometry and MeshNormalMaterial once and reuse
  const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize),
        material = new THREE.MeshNormalMaterial();

  // Places a cube object in scene at position specified in parameters
  let cube;
  function createCube(x = 0, y = 0, z = 0) {
    cube = new THREE.Mesh(geometry, material);
    cube.position.set(x * cubeSpacing, y * cubeSpacing, z * cubeSpacing);
    scene.add(cube);
  }

  // Creates 3D grid of cubes
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      for (let z = 0; z < layers; z++) {
        createCube(x, y, z);
      }
    }
  }

  // Find the center of the mass of cubes
  const midX = (columns * cubeSize + (columns - 1) * cubeSpacing) / 2,
        midY = (rows    * cubeSize + (rows    - 1) * cubeSpacing) / 2,
        midZ = (layers  * cubeSize + (layers  - 1) * cubeSpacing) / 2;

  // Place the camera up and back from the grid for a better view
  camera.position.set(0, midY * 3, 50);

  // Point the camera at the center of the grid
  camera.lookAt(new THREE.Vector3(midX, midY, midZ));
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}








