import * as THREE from "three"
import { canvas } from "./_canvas";
import { events } from "./_events"

export const raycaster = function(group, emitter){

	let CLICK_INTERSECTED;
	// const $this = this;
	const renderer = canvas.renderer;

	events.on("sceneRender", function(){
		renderer.domElement.addEventListener("click", onClick);
		renderer.domElement.addEventListener("touchend", onClick);
	});

	function onClick(event) {

		event.preventDefault();

		const intersects = rays(event);

		if (intersects.length > 0) {

			var current = intersects[0].object;

			if (CLICK_INTERSECTED == current) {

				events.emit(emitter + "_currentItem", current);

			} else if (CLICK_INTERSECTED != current) {
			
				if (CLICK_INTERSECTED)
					events.emit(emitter + "_prevItem", CLICK_INTERSECTED);

				CLICK_INTERSECTED = current;

				events.emit(emitter + "_newItem", current);

			} 

		} else {

			if (CLICK_INTERSECTED) {

				events.emit(emitter + "_noItem", CLICK_INTERSECTED);

			}

			CLICK_INTERSECTED = null;
		}

	}

	function rays(event) {

		let raycaster = new THREE.Raycaster();
		let mouse = {x: 0, y: 0};
		let mouse3D = new THREE.Vector3();
		let camera = canvas.camera;
		let stage = canvas.stage;
		let rect = stage.getBoundingClientRect();
		let top =  rect.top + document.body.scrollTop;
		let left = rect.left + document.body.scrollLeft;
		let vector3D = mouse3D.clone().unproject(camera);

		mouse.x = ((event.clientX - left) / stage.offsetWidth ) * 2 - 1;
		mouse.y = - (((event.clientY - top) / stage.offsetHeight ) * 2 - 1);
		vector3D.set(mouse.x, mouse.y, 0.5);
		vector3D.unproject(camera);

		console.log(mouse);

		raycaster.set(camera.position, vector3D.sub(camera.position).normalize());

		return raycaster.intersectObjects(group.children, true);

	}

}