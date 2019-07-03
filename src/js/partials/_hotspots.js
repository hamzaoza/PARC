import * as THREE from "three"
import { Options } from "./_pad";
import { events } from "./_events";
import { helpers } from "./_helper";
import { raycaster } from "./_raycaster";
import { gtag } from "./_google";
import { media } from "./_media";

export const hotspots = function(clinic, hotspots){

	const color = Options.hotspotColor;
	const geometry = new THREE.ConeBufferGeometry(0.4, 1.2, 16);
	const points = new THREE.Group();
	let counter = 0;

	function updateCounter(amount) {
		const counterDiv = document.querySelector(".hotspots span");
		counterDiv.innerHTML = parseInt(counterDiv.innerHTML) + amount;
	}

	function incCounter(amount) {
		updateCounter(amount);
	}

	function decCounter(amount) {
		updateCounter(-amount);
	}

	function checkCounter(data){

		if (data.clicked == false) {
			decCounter(1);
			data.clicked = true;
		}

	}

	function rotate(){
		clinic.rotation.y += helpers.degRad(0.07);
	}

	function _newItem(mesh){
		// console.log(mesh);
		media(mesh);
		// events.off("sceneUpdate", rotate);
		gtag.event("Hotspot", "click", mesh.name);
		mesh.material.emissiveIntensity = 0;
	}

	function _prevItem(mesh){
		checkCounter(mesh.userData);
	}

	function _noItem(mesh) {
		// events.on("sceneUpdate", rotate);
		checkCounter(mesh.userData);
	}

	hotspots.forEach(function(hotspot){

		let t = 0;
		let increment = 0.01 + (counter * 0.005);

		const material = new THREE.MeshLambertMaterial({ 
			color: color,
			emissive: color,
			emissiveIntensity: 0.6
		});

		const shape = new THREE.Mesh(geometry, material);
		
		shape.rotation.x = helpers.degRad(180);
		shape.position.set(hotspot.position[0], hotspot.position[1], hotspot.position[2]);
		shape.name = "hotspot-" + hotspot.name;
		shape.userData = hotspot.data;
		shape.userData.clicked = false;

		if (hotspot.comments) {
			shape.userData.comments = true;
			shape.userData.commentID = (clinic.name + "-" + hotspot.name).toLowerCase();
		}

		events.on("sceneUpdate", function(){
			t += increment;
			shape.position.y = hotspot.position[1] + Math.sin(t);
		});

		points.add(shape);
		counter++;

	});

	points.name = "hotspots";
	incCounter(counter);
	clinic.add(points);

	raycaster(points, clinic.name);

	// events.on("sceneUpdate", rotate);
	events.on(clinic.name + "_prevItem", _prevItem);
	events.on(clinic.name + "_newItem", _newItem);
	events.on(clinic.name + "_noItem", _noItem);

	window.THREE = THREE;

}