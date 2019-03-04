PAD.Texture = function(source){

	var floor = PAD.Canvas.scene.getObjectByName("floor");

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

	floor.material.map = texture;
	floor.material.needsUpdate = true;

};