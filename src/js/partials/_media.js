// PAD.Media = (function(mesh){

// 	var data = mesh.userData;
// 	var content = document.querySelector(".content");
// 	var closeBTNS = document.querySelectorAll(".close");
// 	var plyr;

// 	closeBTNS.forEach(function(close){

// 		close.addEventListener("click", function(event){

// 			event.preventDefault();
// 			this.parentElement.classList.remove("open");
// 			PAD.Canvas.renderer.domElement.click();
// 			resetText();

// 			if (plyr)
// 				plyr[0].destroy();

// 		});

// 	});

// 	function showVideo(){

// 		var player = document.getElementById("videoStage");
// 		var video = document.querySelectorAll("#player");
		
// 		video[0].setAttribute("data-plyr-embed-id", data.id);
		
// 		plyr = Plyr.setup(video, {
// 			title: 'Example Title',
// 			autoplay: true
// 		});

// 		player.classList.add("open");

// 		showText();

// 	}

// 	function showImage() {

// 		var player = document.getElementById("imageStage");

// 		player.style.backgroundImage = `url(${ data.url })`;
// 		player.classList.add("open");

// 		showText();

// 	}

// 	function resetText() {

// 		var contentCache = document.getElementById("resetContent").innerHTML;

// 		content.innerHTML = contentCache;
// 	}
 
// 	function showText() {

// 		content.innerHTML = `<h1>${data.title}</h1> ${data.description}`;

// 		if (data.comments) {
// 			content.innerHTML += "<div id='disqus_thread'></div>";
// 			PAD.Comments(data.commentID);
// 		}

// 		setTimeout(function(){
// 			PAD.Canvas.renderer.domElement.click();
// 		}, 2000);
		
// 	}

// 	switch (data.type) {
// 		case "video" :
// 			showVideo();
// 			break;
// 		case "image" :
// 			showImage();
// 			break;
// 		case "text" :
// 			showText();
// 			break;
// 		default:
// 			break;
// 	}

// 	PAD.Texture(data.floor);
	
// });

// import "../../../node_modules/plyr/dist/plyr";

import Plyr from "../../../node_modules/plyr/dist/plyr.polyfilled";
import { canvas } from "./_canvas";

export const media = function(mesh){

	const data = mesh.userData;
	const content = document.querySelector(".content");
	// const closeBTNS = document.querySelectorAll(".close");
	let player;

	function showVideo(){

		const stage = document.getElementById("videoStage");
		const video = document.querySelectorAll("#player");

		video[0].setAttribute("data-plyr-embed-id", data.id);

		player = Plyr.setup(video, { autoplay: true });

		stage.classList.add("open");

		showText();

	}

	function showText() {

		content.innerHTML = `<h1>${data.title}</h1> ${data.description}`;

		// if (data.comments) {
		// 	content.innerHTML += "<div id='disqus_thread'></div>";
		// 	PAD.Comments(data.commentID);
		// }

		setTimeout(function(){
			canvas.renderer.domElement.click();
		}, 2000);

	}

	switch (data.type) {
		case "video" :
			showVideo();
			break;
		// case "image" :
		// 	showImage();
		// 	break;
		// case "text" :
		// 	showText();
		// 	break;
		default:
			break;
	}

}