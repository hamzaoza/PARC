import * as THREE from "three"
import { Options } from "./_pad";
import { events } from "./_events";
import { helpers } from "./_helper";
import { raycaster } from "./_raycaster";
import { gtag } from "./_google";
import { media } from "./_media";

export const hotspots = function(clinic, hotspots){

	const color = Options.hotspotColor;
	const size = 0.5;
	const geometry = new THREE.ConeBufferGeometry(size, size * 3, 16);
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
		clinic.rotation.y += helpers.degRad(0.02);
	}

	function _newItem(mesh){
		media(mesh);
		gtag.event("Hotspot", "click", mesh.name);
		mesh.scale.set(2, 2, 2);
		mesh.material.emissiveIntensity = 0;
	}

	function _prevItem(mesh){
		checkCounter(mesh.userData);
	}

	function _noItem(mesh) {
		checkCounter(mesh.userData);
		mesh.scale.set(0.6, 0.6, 0.6);
		mesh.material.emissive.setHex(0xe74c3c);
		mesh.material.color.setHex(0xe74c3c);
	}

	hotspots.forEach(function(hotspot){

		let t = 0;
		let increment = 0.005 + (counter * 0.001);

		const material = new THREE.MeshLambertMaterial({ 
			color: color,
			emissive: color,
			emissiveIntensity: 0.7
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

	events.on("sceneUpdate", rotate);
	events.on(clinic.name + "_prevItem", _prevItem);
	events.on(clinic.name + "_newItem", _newItem);
	events.on(clinic.name + "_noItem", _noItem);

	// window.THREE = THREE;

}