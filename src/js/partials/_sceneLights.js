import * as THREE from "three"
import { Options } from "./_pad"

export class SceneLights {

	constructor(clinic, lights){

		this.showLights = Options.showLights;
		this.globalLights = new THREE.Group();
		this.sphere = new THREE.SphereBufferGeometry(0.25, 16, 8);

		this.globalLights.name = "SceneLights";

		const $this = this;

		lights.forEach(function(light){

			switch (light.type) {
				case "Directional" :
					$this.addDirectional(light);
					break;
				case "Ambient" :
					$this.addAmbient(light);
					break;
				case "Point" :
					$this.addPoint(light);
					break;
				case "Hemisphere" :
					$this.addHemisphere(light);
					break;
				default:
					break;
			}

		});

		clinic.add(this.globalLights);

	}

	addDirectional(light) {

		const source = new THREE.DirectionalLight(light.color);

		source.position.set(light.position[0], light.position[1], light.position[2]);
		source.castShadow = light.shadow;
		source.name = light.name || null;

		this.globalLights.add(source);

	}

	addAmbient(light) {
		
		const source = new THREE.AmbientLight(light.color || 0x404040, light.intensity || 1);

		source.name = light.name || "Ambient";

		this.globalLights.add(source);

	}

	addPoint(light) {
		
		const source = new THREE.PointLight(light.color, light.intensity, light.distance || 0, light.decay || 2);
		source.position.set(light.position[0], light.position[1], light.position[2]);

		if (this.showLights)
			source.add(new THREE.Mesh(this.sphere, new THREE.MeshBasicMaterial({ color: light.color })));

		source.castShadow = light.shadow;	
		source.name = light.name || "Point" + light.color;
		
		this.globalLights.add(source);

	}

	addHemisphere(light) {
		const source = new THREE.HemisphereLight(light.sky, light.ground, light.intensity || 1);
		source.name = light.name || "Sky";
		this.globalLights.add(source);
	}

}