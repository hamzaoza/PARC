import { Scene, PerspectiveCamera, Color, WebGLRenderer, Fog } from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { Options } from "./_pad"
import { events } from "./_events"
import { helpers } from "./_helper"

export const canvas = (function(){

	// variables
	var stage = document.getElementById("stage");
	var stageWidth = stage.offsetWidth;
	var stageHeight = stage.offsetHeight;

	var scene = new Scene();
	var camera = new PerspectiveCamera(45, stageWidth / stageHeight, 0.01, 1000);
	var bgColor = new Color(Options.bgColor);
	var fogColor = new Color(Options.bgColor);
	var renderer = new WebGLRenderer();
	var controls = new OrbitControls(camera, stage);

	// functions
	var onWindowResize = function() {
		stageWidth = stage.offsetWidth;
		stageHeight = stage.offsetHeight;
		camera.aspect = stageWidth / stageHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(stageWidth, stageHeight);
		events.emit("windowResize");
	}

	var update = function(){
		events.emit("sceneUpdate");
	};

	var render = function(){
		renderer.render(scene, camera);
		events.emit("sceneRender");
	};

	var GameLoop = function(){
		requestAnimationFrame(GameLoop);
		update();
		render();
	};

	// logic
	scene.background = bgColor;
	scene.name = "Scene";

	if (Options.fog)
		scene.fog = new Fog(fogColor, 0, Options.maxDistance * 2);

	camera.position.set(0, 0, 50);
	camera.name = "Camera";

	controls.minDistance = Options.minDistance;
	controls.maxDistance = Options.maxDistance;
	controls.maxPolarAngle = helpers.degRad(Options.maxPolarAngle);
	controls.minPolarAngle = helpers.degRad(Options.minPolarAngle);
	controls.enableKeys = true;
	controls.update();

	renderer.setSize(stageWidth, stageHeight);
	renderer.shadowMap.enabled = true;
	renderer.shadowMapSoft = true;

	stage.appendChild(renderer.domElement);
	window.addEventListener("resize", onWindowResize);
	GameLoop();

	window.scene = scene;

	return {
		scene: scene,
		camera: camera,
		controls: controls,
		renderer : renderer,
		stage : stage
	}

})();