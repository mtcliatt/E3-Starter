'use strict';

let camera;
let scene;
let renderer;
let controls;

const gridRows = 5;
const gridColumns = 5;
const gridLayers = 5;

const cubeSize = 1;
const spacing = 2;

const grid = [];

init();
createWorld();
animate();

function init() {

  const container = document.getElementById('appContainer');
  const width = container.clientWidth;
  const height = container.clientHeight;

  // params: field of view, aspect, near frustrum plane, far frustrum plane
  camera = new THREE.PerspectiveCamera(45, width / height, 1, 10000);

  scene = new THREE.Scene;
  scene.add(camera);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(width, height);
  renderer.setClearColor(new THREE.Color(0, 0, 0), 1.0);

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

  const midpoint = {
    x: (gridColumns - 1) * (spacing + cubeSize) / 2,
    y: (gridRows - 1) * (spacing + cubeSize) / 2,
    z: (gridLayers - 1) * (spacing + cubeSize) / 2,
  };

  camera.position.set(midpoint.x, midpoint.y * 2, midpoint.z * 5);

  for (let i = 0; i < gridRows; i++) {

    grid.push([]);

    for (let j = 0; j < gridColumns; j++) {

      grid[i].push([]);

      for (let k = 0; k < gridLayers; k++) {

        const color = new THREE.Color(
          (j / gridRows),
          (i / gridColumns),
          (k / gridLayers)
        );

        const geometry = new THREE.BoxGeometry(cubeSize, cubeSize, cubeSize);
        const material = new THREE.MeshBasicMaterial({ color });

        const cube = new THREE.Mesh(geometry, material);

        // Note j comes after i because j represents columns ie x-value
        cube.position.set(
          j * (spacing + cubeSize) - midpoint.x,
          i * (spacing + cubeSize) - midpoint.y,
          k * (spacing + cubeSize) - midpoint.z
        );

        scene.add(cube);
        grid[i][j].push(cube);

      }

    }

  }

  // This creates a line on each axis, from -100 to 100.
  for (let i = 0; i < 3 /* you */; i++) {

    const material = new THREE.LineBasicMaterial();
    const geometry = new THREE.Geometry();

    // The beginning and ending points of the line
    const p1 = new THREE.Vector3();
    const p2 = new THREE.Vector3();

    // Set the x, y, or z coordinate to 100 or -100
    p1.setComponent(i, 100)
    p2.setComponent(i, -100)

    geometry.vertices.push(p1, p2);

    scene.add(new THREE.Line(geometry, material));
  }

}

function animate() {

  requestAnimationFrame(animate);

  for (let i = 0; i < grid.length; i++) {

    for (let j = 0; j < grid[i].length; j++) {

      for (let k = 0; k < grid[i][j].length; k++) {

        let cube = grid[i][j][k];

        cube.rotateX(Math.random() * .05);
        cube.rotateY(Math.random() * .05);
        cube.rotateZ(Math.random() * .05);

        //TODO: Rotate all cubes around origin

      }

    }

  }

  controls.update();

  renderer.render(scene, camera);

}
