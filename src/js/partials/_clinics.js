PAD.Clinics = (function(){

	var clinics = {};

	for (var name in PAD.Data){

		var data = PAD.Data[name];
		var clinic = new THREE.Group();

		clinic.name = name;

		if (data.models)
			PAD.Helpers.loadModels(clinic, data.models);

		if (data.geometry)
			PAD.Helpers.loadGeometry(clinic, data.geometry);

		if (data.sceneLights)
			PAD.SceneLights(clinic, data.sceneLights);
		
		if (data.hotspots)
			PAD.Hotspots(clinic, data.hotspots);

		clinics[name] = clinic;

	}

	delete PAD.Data;

	return clinics;

})();