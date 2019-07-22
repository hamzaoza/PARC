import * as THREE from "three"
import { Data } from "./../clinics/_data"
import { helpers } from "./_helper";
import { SceneLights } from "./_sceneLights";
import { hotspots } from "./_hotspots";

export const Clinics = (function(){

	var clinics = {};

	for (var name in Data){

		var data = Data[name];
		var clinic = new THREE.Group();

		clinic.name = name;

		if (data.models)
			helpers.loadModels(clinic, data.models);

		if (data.geometry)
			helpers.loadGeometry(clinic, data.geometry);

		if (data.sceneLights)
			new SceneLights(clinic, data.sceneLights);
		
		if (data.hotspots)
			hotspots(clinic, data.hotspots);

		if (data.floor)
			clinic.userData.floor = data.floor;

		clinics[name] = clinic;

	}

	return clinics;


})();