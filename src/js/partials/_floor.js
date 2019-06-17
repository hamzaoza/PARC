import * as THREE from "three"
import { canvas } from "./_canvas";

export const Texture = function(source){

	var floor = canvas.scene.getObjectByName("floor");

	if (source == null || source == "") {
		floor.material.map = null;
		floor.material.needsUpdate = true;
		return;
	}

	var video = document.getElementById("texture");
	var texture = new THREE.VideoTexture(video, THREE.UVMapping);

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