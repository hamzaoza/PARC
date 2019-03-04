(function(){

	var buttons = document.querySelectorAll(".clinic");
	var scene = PAD.Canvas.scene;
	var active;

	if (PAD.Clinics.Global)
		scene.add(PAD.Clinics.Global);

	buttons.forEach(function(button){

		button.addEventListener("click", function(event){

			event.preventDefault();

			var name = button.dataset.clinic;
			var clinic = PAD.Clinics[name];
			var current = scene.getObjectByName(active);

			if (current == clinic)
				return;

			if (current)
				scene.remove(current);
			
			if (clinic)
				scene.add(clinic);

			active = name;

		});

	});

	buttons[0].click();

})();