PAD.Media = (function(mesh){

	var data = mesh.userData;

	function showVideo(){

		var player = document.getElementById("videoStage");
		var iframe = player.querySelector("iframe");
		var close = player.querySelector(".close");

		iframe.src = data.url + "?autoplay=1&portrait=0&controls=0&showinfo=0&rel=1&modestbranding=1";
		player.classList.remove("hidden");

		close.addEventListener("click", function(event){
			
			event.preventDefault();
			iframe.src = "";
			player.classList.add("hidden");
			PAD.Canvas.renderer.domElement.click();

		});

	}

	function showImage() {

		var player = document.getElementById("imageStage");
		var figure = player.querySelector("figure img");
		var caption = player.querySelector("figure figcaption");
		var close = player.querySelector(".close");

		figure.src = data.url;
		caption.innerHTML= data.caption;
		player.classList.remove("hidden");

		close.addEventListener("click", function(event){
			
			event.preventDefault();
			figure.src = "";
			caption.innerHTML = "";
			player.classList.add("hidden");
			PAD.Canvas.renderer.domElement.click();

		});

	}

	function showText() {

		var player = document.querySelector(".content");
		player.innerHTML = "<h1>" + data.title + "</h1>" + data.description;

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