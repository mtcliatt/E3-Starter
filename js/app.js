'use strict';

let camera;
let scene;
let renderer;
let controls;

init();
createNeatScene();
animateNeatScene();

function init() {
  const fov = 45;
  const near = 1;
  const far = 10000;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const backgroundColor = new THREE.Color(0, .2, .3);
  const opacity = 1.00;

  camera = new THREE.PerspectiveCamera(fov, width / height, near, far);

  scene = new THREE.Scene;
  scene.add(camera);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  renderer.setClearColor(backgroundColor, opacity);

  controls = new THREE.OrbitControls(camera);

  document.body.appendChild(renderer.domElement);

  window.addEventListener('resize', function() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    renderer.setSize(width, height);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  });
}

function createNeatScene() {

  const cubeSize = 2;
  const spacing = 5;

  const rows = 15;
  const columns = 15;
  const layers = 15;

  const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);

  // Places a cube object in scene at position specified in parameters
  function createNeatCube(x = 0, y = 0, z = 0) {
    const color = new THREE.Color(x / columns, y / rows, z / layers);
    const material = new THREE.MeshBasicMaterial({
      color: color
    });

    const cube = new THREE.Mesh(geometry, material);
    cube.position.set(x * spacing, y * spacing, z * spacing);
    scene.add(cube);
  }

  // Creates 3D grid of cubes
  for (let x = 0; x < columns; x++) {
    for (let y = 0; y < rows; y++) {
      for (let z = 0; z < layers; z++) {
        createNeatCube(x, y, z);
      }
    }
  }

  // Find the center of the mass of cubes
  const xMidpoint = (columns * spacing) / 2;
  const yMidpoint = (rows * spacing) / 2;
  const zMidpoint = (layers * spacing) / 2;

  // Place the camera up and back from the grid for a better view
  camera.position.set(-xMidpoint, yMidpoint * 3, zMidpoint * 5);
  camera.lookAt(new THREE.Vector3(xMidpoint, yMidpoint, zMidpoint));
}

function animateNeatScene() {
  requestAnimationFrame(animateNeatScene);

  controls.update();

  renderer.render(scene, camera);
}
