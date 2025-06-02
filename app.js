const canvas = document.getElementById("renderCanvas");
const engine = new BABYLON.Engine(canvas, true);

const createScene = () => {
  const scene = new BABYLON.Scene(engine);

  // Camera
  const camera = new BABYLON.ArcRotateCamera("camera", 
      Math.PI / 2, Math.PI / 3, 30, BABYLON.Vector3.Zero(), scene);
  camera.attachControl(canvas, true);

  // Light
  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

  return scene;
};

const scene = createScene();
engine.runRenderLoop(() => scene.render());

window.addEventListener('resize', () => engine.resize());
