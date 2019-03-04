PAD.Canvas = (function(){

	// variables
	var stage = document.getElementById("stage");
	var stageWidth = stage.offsetWidth;
	var stageHeight = stage.offsetHeight;

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(45, stageWidth / stageHeight, 0.01, 1000);
	var bgColor = new THREE.Color(PAD.Options.bgColor);
	var fogColor = new THREE.Color(PAD.Options.bgColor);
	var renderer = new THREE.WebGLRenderer();
	var controls = new THREE.OrbitControls(camera, stage);

	// functions
	var onWindowResize = function() {
		stageWidth = stage.offsetWidth;
		stageHeight = stage.offsetHeight;
		camera.aspect = stageWidth / stageHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(stageWidth, stageHeight);
		PAD.Events.emit("windowResize");
	}

	var update = function(){
		PAD.Events.emit("sceneUpdate");
	};

	var render = function(){
		renderer.render(scene, camera);
		PAD.Events.emit("sceneRender");
	};

	var GameLoop = function(){
		requestAnimationFrame(GameLoop);
		update();
		render();
	};

	// logic
	scene.background = bgColor;
	scene.name = "Scene";

	if (PAD.Options.fog)
		scene.fog = new THREE.Fog(fogColor, 0, PAD.Options.maxDistance * 2);

	camera.position.set(0, 0, 50);
	camera.name = "Camera";

	controls.minDistance = PAD.Options.minDistance;
	controls.maxDistance = PAD.Options.maxDistance;
	controls.maxPolarAngle = PAD.Helpers.degRad(PAD.Options.maxPolarAngle);
	controls.minPolarAngle = PAD.Helpers.degRad(PAD.Options.minPolarAngle);
	controls.enableKeys = true;
	controls.update();

	renderer.setSize(stageWidth, stageHeight);
	renderer.shadowMap.enabled = true;
	renderer.shadowMapSoft = true;

	stage.appendChild(renderer.domElement);
	window.addEventListener("resize", onWindowResize, false);
	GameLoop();

	// window.scene = scene;

	function toggleFullScreen() {

		if (!document.fullscreenElement) {
			
			document.documentElement.requestFullscreen();

		} else {
			
			if (document.exitFullscreen)
				document.exitFullscreen(); 
		}

	}

	var full = document.getElementById("fullscreen");
	full.addEventListener("click", toggleFullScreen);

	return {
		scene: scene,
		camera: camera,
		controls: controls,
		renderer : renderer,
		stage : stage
	}

})();