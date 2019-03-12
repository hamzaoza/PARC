PAD.Media = (function(mesh){

	var data = mesh.userData;
	var content = document.querySelector(".content");

	function showVideo(){

		var player = document.getElementById("videoStage");
		var close = player.querySelector(".close");
		var video = document.querySelectorAll("#player");
		
		video[0].setAttribute("data-plyr-embed-id", data.id);
		
		var plyr = Plyr.setup(video);

		player.classList.remove("hidden");

		close.addEventListener("click", function(event){
			
			event.preventDefault();
			player.classList.add("hidden");
			PAD.Canvas.renderer.domElement.click();
			plyr[0].destroy();

		});

		resetText();

	}

	function showImage() {

		var player = document.getElementById("imageStage");
		var close = player.querySelector(".close");

		player.style.backgroundImage = `url( ${ data.url } )`;
		player.classList.remove("hidden");

		showText();

		close.addEventListener("click", function(event){
			
			event.preventDefault();
			player.classList.add("hidden");
			PAD.Canvas.renderer.domElement.click();
			resetText();

		});

	}

	function resetText() {

		var contentCache = '<h1>Pathways, Practices and Architectures</h1><p>The PARC Project is exploring antimicrobial resistance and how cross infection is managed in cystic fibrosis clinics, using qualitative methods, including creative visual approaches. It is a multidisciplinary project involving sociologists of medicine and science, an academic architect, micro-biologists and a graphic artist. The research compares the way three outpatient lung infection clinics attempt to control AMR and cross-infection through the design, practices and architectural layout of their built environments. For further information contact Nik Brown (nik.brown@york.ac.uk) or Chrissy Buse (christina.buse@york.ac.uk).</p>';

		content.innerHTML = contentCache;
	}
 
	function showText() {

		content.innerHTML = `<h1>${data.title}</h1> ${data.description}`;

		if (data.comments) {
			content.innerHTML += "<div id='disqus_thread'></div>";
			PAD.Comments(data.commentID);
		}

		setTimeout(function(){
			PAD.Canvas.renderer.domElement.click();
		}, 2000);
		
	}

	switch (data.type) {
		case "video" :
			showVideo();
			break;
		case "image" :
			showImage();
			break;
		case "text" :
			showText();
			break;
		default:
			break;
	}

	PAD.Texture(data.floor);
	
	
});