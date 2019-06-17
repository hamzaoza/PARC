import * as THREE from "three"

export class Helpers {
	
	degRad(deg) {
		return deg * Math.PI / 180;
	}

	loadModels(group, models){

		var loader = new THREE.ObjectLoader();

		models.forEach(function(model){

			loader.load(model.path, function(object){

				object.children.forEach(function(mesh) {

					var baseMaterial = new THREE.MeshPhongMaterial({ 
						color: 0xffffff,
						flatShading: true,
						side: THREE.DoubleSide
					});

					mesh.material = model.material || baseMaterial;
					mesh.name = model.name;
					mesh.castShadow = model.castShadow || true;
					mesh.receiveShadow = model.receiveShadow || false;
					
					if (model.scale)
						mesh.scale.set(model.scale[0], model.scale[1], model.scale[2])

					group.add(mesh);

				});

			});

		});

	}

	loadGeometry(group, objects) {

		const $this = this;

		objects.forEach(function(object) {

			var baseMaterial = new THREE.MeshPhongMaterial({ 
				color: 0xffffff,
				flatShading: true,
				side: THREE.DoubleSide
			});

			var mesh = new THREE.Mesh(object.geometry, object.material || baseMaterial);
			mesh.position.set(object.position[0], object.position[1], object.position[2]);
			mesh.rotation.set(
				$this.degRad(object.rotation[0]), 
				$this.degRad(object.rotation[1]), 
				$this.degRad(object.rotation[2])
			);

			mesh.name = object.name;
			mesh.receiveShadow = object.receiveShadow || true;
			mesh.castShadow = object.castShadow || false;

			group.add(mesh);

		});

	}

}

export const helpers = new Helpers();