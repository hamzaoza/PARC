import { canvas } from "./_canvas";
import { events } from "./_events"

export class Raycaster {

	constructor(group, emitter) {

		this.CLICK_INTERSECTED;
		this.group = group;
		this.emitter = emitter;

		const $this = this;
		const renderer = canvas.renderer;

		events.on("sceneRender", function(){
			renderer.domElement.addEventListener("click", $this.onClick.bind($this));
			renderer.domElement.addEventListener("touchend", $this.onClick.bind($this));
		});

	}

	onClick(event) {

		event.preventDefault();

		const $this = this;
		const intersects = this.rays(event, this);

		if (intersects.length > 0) {

			var current = intersects[0].object;

			if ($this.CLICK_INTERSECTED == current) {

				events.emit($this.emitter + "_currentItem", current);

			} else if ($this.CLICK_INTERSECTED != current) {
			
				if ($this.CLICK_INTERSECTED)
					events.emit($this.emitter + "_prevItem", $this.CLICK_INTERSECTED);

				$this.CLICK_INTERSECTED = current;

				events.emit($this.emitter + "_newItem", current);

			} 

		} else {

			if ($this.CLICK_INTERSECTED) {

				events.emit($this.emitter + "_noItem", $this.CLICK_INTERSECTED);

			}

			$this.CLICK_INTERSECTED = null;
		}

	}

	rays(event, self) {

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

		raycaster.set(camera.position, vector3D.sub(camera.position).normalize());

		return raycaster.intersectObjects(self.group.children, true);

	}

}