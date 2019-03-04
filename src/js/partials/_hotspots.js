PAD.Hotspots = function(clinic, hotspots) {

	var color = PAD.Options.hotspotColor;
	var geometry = new THREE.ConeBufferGeometry(0.4, 1.2, 16);
	var points = new THREE.Group();
	var counterDiv = document.querySelector(".counter span");
	var counter = 0;

	var updateCounter = function(amount){
		counterDiv.innerHTML = parseInt(counterDiv.innerHTML) + amount;
	};

	var incCounter = function(amount) {
		updateCounter(amount);
	};

	var decCounter = function(amount) {
		updateCounter(-amount);
	};

	var checkCounter = function(data){

		if (data.clicked == false) {
			decCounter(1);
			data.clicked = true;
		}

	}

	var rotate = function(){
		clinic.rotation.y += PAD.Helpers.degRad(0.07);
	};

	var _newItem = function(mesh){
		mesh.scale.set(1.5, 1.5, 1.5);
		mesh.intensity = mesh.intensity * 3;
		PAD.Media(mesh);
		PAD.Events.off("sceneUpdate", rotate);
	}

	var _prevItem = function(mesh){
		mesh.scale.set(0.3, 0.3, 0.3);
		mesh.intensity = mesh.intensity / 6;
		checkCounter(mesh.userData);
	}

	var _noItem = function(mesh) {
		mesh.scale.set(0.3, 0.3, 0.3);
		mesh.intensity = mesh.intensity / 6;
		PAD.Events.on("sceneUpdate", rotate);
		checkCounter(mesh.userData);
	}

	hotspots.forEach(function(hotspot){

		var t = 0;
		var increment = 0.01 + (counter * 0.005);
		var source = new THREE.PointLight(color, 0, hotspot.position[1] * 2, 1);

		var material = new THREE.MeshLambertMaterial({ 
			color: color,
			emissive: color,
			emissiveIntensity: 0.6
		});

		var shape = new THREE.Mesh(geometry, material);
		shape.rotation.x = PAD.Helpers.degRad(180);
		
		source.position.set(hotspot.position[0], hotspot.position[1], hotspot.position[2]);
		source.add(shape);
		source.castShadow = true;
		source.name = "hotspot-" + hotspot.name;

		source.userData = hotspot.data;
		source.userData.clicked = false;

		PAD.Events.on("sceneUpdate", function(){
			t += increment;
			shape.position.y = Math.sin(t);
		});

		points.add(source);
		counter++;

	});

	points.name = "hotspots";
	incCounter(counter);
	clinic.add(points);

	PAD.Raycaster(points, clinic.name);
	PAD.Events.on("sceneUpdate", rotate);
	PAD.Events.on(clinic.name + "_prevItem", _prevItem);
	PAD.Events.on(clinic.name + "_newItem", _newItem);
	PAD.Events.on(clinic.name + "_noItem", _noItem);

};