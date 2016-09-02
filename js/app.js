'use strict';

const gridSize = 10;
const cellSize = 1;
const cellPadding = 2;

// This will hold the grid of cells so that we can rotate them as a whole
let gridContainer;

// THREE.js components
let camera;
let scene;
let renderer;
let controls;

init();
createWorld();
animate();

function init() {

  gridContainer = new THREE.Object3D();

  const container = document.getElementById('appContainer');
  const width = container.clientWidth;
  const height = container.clientHeight;

  // params: field of view, aspect, near frustrum plane, far frustrum plane
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);

  // Create a scene which will hold all of our 3D elements
  scene = new THREE.Scene;
  scene.add(camera);

  // Create a WebGL Renderer and set its rendering size
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);

  // This sets the background color (RGB of 0-1, 0-1, 0-1) and opacity
  renderer.setClearColor(new THREE.Color(0, 0, 0), 1.0);

  // Add the renderer object to the container we will be drawing on
  container.appendChild(renderer.domElement);

  controls = new THREE.OrbitControls(camera);

  window.addEventListener('resize', () => {

    const container = document.getElementById('appContainer');
    const width = container.clientWidth;
    const height = container.clientHeight;

    renderer.setSize(width, height);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

  });

}

function createWorld() {

  // The size each cell takes up, including spacing
  const sizePerCell = (cellSize + cellPadding);

  // The length of each row, column, and layer
  const totalGridSize = (gridSize * sizePerCell) - cellPadding;

  const midpoint = new THREE.Vector3(totalGridSize / 2, totalGridSize / 2, totalGridSize / 2);

  camera.position.set(totalGridSize / 2, totalGridSize * 2, totalGridSize * 3);

  const getPositionFromIndex = (row, column, layer) => {

    return new THREE.Vector3(
        sizePerCell * column, sizePerCell * row, sizePerCell * layer
    ).sub(midpoint);

  };

  for (let row = 0; row < gridSize; row++) {

    for (let column = 0; column < gridSize; column++) {

      for (let layer = 0; layer < gridSize; layer++) {

        const color = new THREE.Color(
            (column / gridSize), (row / gridSize), (layer / gridSize)
        );

        const position = getPositionFromIndex(row, column, layer);
        const geometry = new THREE.BoxGeometry(cellSize, cellSize, cellSize);
        const material = new THREE.MeshBasicMaterial({ color });

        const cube = new THREE.Mesh(geometry, material);
        cube.position.copy(position);

        console.log(position.x + ', ' + position.y + ', ' + position.z);

        // Add the cell to the container so we can rotate it with the others.
        gridContainer.add(cube);

      }

    }

  }

  scene.add(gridContainer);

  // Draw a line on each axis
  for (let i = 0; i < 3 /* you */; i++) {

    const material = new THREE.LineBasicMaterial();
    const geometry = new THREE.Geometry();

    // The beginning and ending points of the line
    const p1 = new THREE.Vector3();
    const p2 = new THREE.Vector3();

    // Sets one point at 1000 and the other at -1000
    p1.setComponent(i, 1000)
    p2.setComponent(i, -1000)

    // Add the two points to the geometry, which will create a line segment
    geometry.vertices.push(p1, p2);

    scene.add(new THREE.Line(geometry, material));
  }

}

function animate() {

  requestAnimationFrame(animate);

  gridContainer.rotateX(.01);
  gridContainer.rotateY(.02);
  gridContainer.rotateZ(.03);

  controls.update();

  renderer.render(scene, camera);

}
