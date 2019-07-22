import * as THREE from "three"
import { canvas } from "./_canvas";

export const Texture = function(source){

	const floor = canvas.scene.getObjectByName("floor");
	const video = document.getElementById("texture");
	const texture = new THREE.VideoTexture(video, THREE.UVMapping);

	console.log(floor);

	if (source == null || source == "") {
		floor.material.map = null;
		floor.material.needsUpdate = true;
		return;
	}

	texture.minFilter = THREE.LinearFilter;
	texture.magFilter = THREE.LinearFilter;
	texture.format = THREE.RGBFormat;

	video.src = source;
	video.play();

	function checkLoad() {
		if (video.readyState === 4) {
			floor.material.map = texture;
			floor.material.needsUpdate = true;
		} else {
			setTimeout(checkLoad, 100);
		}
	}

	checkLoad();

}