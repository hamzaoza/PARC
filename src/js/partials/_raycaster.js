PAD.Raycaster = function(group, emitter){

	var CLICK_INTERSECTED;
	var renderer = PAD.Canvas.renderer;

	function rays(event) {

		var raycaster = new THREE.Raycaster();
		var mouse = {x: 0, y: 0};
		var mouse3D = new THREE.Vector3();
		var camera = PAD.Canvas.camera;
		var stage = PAD.Canvas.stage;
		var rect = stage.getBoundingClientRect();
		var top =  rect.top + document.body.scrollTop;
		var left = rect.left + document.body.scrollLeft;
		var vector3D = mouse3D.clone().unproject(camera);

		mouse.x = ((event.clientX - left) / stage.offsetWidth ) * 2 - 1;
		mouse.y = - (((event.clientY - top) / stage.offsetHeight ) * 2 - 1);
		vector3D.set(mouse.x, mouse.y, 0.5);
		vector3D.unproject(camera);

		raycaster.set(camera.position, vector3D.sub(camera.position).normalize());

		return raycaster.intersectObjects(group.children, true);

	}

	function onClick(event) {

		event.preventDefault();

		var intersects = rays(event);

		if (intersects.length > 0) {

			var current = intersects[0].object;

			if (CLICK_INTERSECTED == current) {
				PAD.Events.emit(emitter + "_currentItem", current.parent);
			} else if (CLICK_INTERSECTED != current) {
				
				if (CLICK_INTERSECTED)
					PAD.Events.emit(emitter + "_prevItem", CLICK_INTERSECTED.parent);

				CLICK_INTERSECTED = current;
				PAD.Events.emit(emitter + "_newItem", current.parent);
			} 

		} else {

			if (CLICK_INTERSECTED) {
				PAD.Events.emit(emitter + "_noItem", CLICK_INTERSECTED.parent);
			}

			CLICK_INTERSECTED = null;
		}
 
	}

	PAD.Events.on("sceneRender", function(){
		renderer.domElement.addEventListener("click", onClick);
		renderer.domElement.addEventListener("touchend", onClick);
	});

};