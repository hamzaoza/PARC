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

	var gFormBTN = document.getElementById("gf-feedback");

	gFormBTN.addEventListener("click", function(event){

		var gForm = document.getElementById("surveyStage");
		var close = gForm.querySelector(".close");

		gForm.classList.remove("hidden");

		close.addEventListener("click", function(event){

			gForm.classList.add("hidden");
			PAD.Canvas.renderer.domElement.click();
			event.preventDefault();
			
		});

		event.preventDefault();

	});

	// Add Disqus

	var disqus_config = function () {
		this.page.url = window.location.origin + "/#!";
		this.page.identifier = "prodhome";
	};
	
	var s = document.createElement("script");
	
	s.src = "https://pad-1.disqus.com/embed.js";
	s.setAttribute("data-timestamp", +new Date());

	document.body.appendChild(s);

})();