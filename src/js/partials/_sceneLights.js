PAD.SceneLights = (function(clinic, lights){

	var showLights = PAD.Options.showLights;
	var globalLights = new THREE.Group();
	var sphere;
	
	globalLights.name = "SceneLights";

	var addDirectional = function(light) {
		var source = new THREE.DirectionalLight(light.color);
		source.position.set(light.position[0], light.position[1], light.position[2]);
		source.castShadow = light.shadow;
		source.name = light.name || null;
		globalLights.add(source);
	}

	var addAmbient = function(light) {
		var source = new THREE.AmbientLight(light.color || 0x404040, light.intensity || 1);
		source.name = light.name || "Ambient";
		globalLights.add(source);
	}

	var addPoint = function(light) {
		var source = new THREE.PointLight(light.color, light.intensity, light.distance || 0, light.decay || 2);
		source.position.set(light.position[0], light.position[1], light.position[2]);

		if (showLights)
			source.add(new THREE.Mesh(sphere, new THREE.MeshBasicMaterial({ color: light.color })));

		source.castShadow = light.shadow;	
		source.name = light.name || "Point" + light.color;
		globalLights.add(source);
	}

	var addHemisphere = function(light) {
		var source = new THREE.HemisphereLight(light.sky, light.ground, light.intensity || 1);
		source.name = light.name || "Sky";
		globalLights.add(source);
	}

	if (showLights)
		sphere = new THREE.SphereBufferGeometry(0.25, 16, 8);

	lights.forEach(function(light){

		switch(light.type) {
			case "Directional" :
				addDirectional(light);
				break;
			case "Ambient" :
				addAmbient(light);
				break;
			case "Point" :
				addPoint(light);
				break;
			case "Hemisphere" :
				addHemisphere(light);
				break;
			default:
				break;
		}

	});

	clinic.add(globalLights);

});