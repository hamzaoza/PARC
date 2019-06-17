import { canvas } from "./_canvas"
import { Clinics } from "./_clinics"

(function(){

	var buttons = document.querySelectorAll(".clinic");
	var scene = canvas.scene;
	var active;

	if (Clinics.Global)
		scene.add(Clinics.Global);

	buttons.forEach(function(button){

		button.addEventListener("click", function(event){

			event.preventDefault();

			var name = button.dataset.clinic;
			var clinic = Clinics[name];
			var current = scene.getObjectByName(active);

			if (current === clinic)
				return;

			if (current)
				scene.remove(current);
			
			if (clinic)
				scene.add(clinic);

			active = name;

		});

	});

	buttons[1].click();

	var gFormBTN = document.getElementById("gf-feedback");

	gFormBTN.addEventListener("click", function(event){

		var gForm = document.getElementById("surveyStage");
		var close = gForm.querySelector(".close");

		gForm.classList.add("open");

		close.addEventListener("click", function(event){

			gForm.classList.remove("open");
			canvas.renderer.domElement.click();
			event.preventDefault();
			
		});

		event.preventDefault();

	});

	// Fullscreen toggle.
	function toggleFullScreen() {

		if (!document.fullscreenElement) {
			document.documentElement.requestFullscreen();
		} else {
			if (document.exitFullscreen)
				document.exitFullscreen(); 
		}

	}

	var full = document.getElementById("fullscreen");
	full.addEventListener("click", toggleFullScreen);

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