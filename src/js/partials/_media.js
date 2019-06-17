import Plyr from "../../../node_modules/plyr/dist/plyr.polyfilled";
import { canvas } from "./_canvas";
import { comments } from "./_comments";
import { Texture } from "./_floor";

export const media = function(mesh){

	const data = mesh.userData;
	const content = document.querySelector(".content");
	const closeBTNS = document.querySelectorAll(".close");
	let player;

	closeBTNS.forEach(function(close){

		close.addEventListener("click", function(event){

			event.preventDefault();
			this.parentElement.classList.remove("open");
			canvas.renderer.domElement.click();
			resetText();

			if (player)
				player[0].destroy();

		});

	});

	function showVideo(){

		const stage = document.getElementById("videoStage");
		const video = document.querySelectorAll("#player");

		video[0].setAttribute("data-plyr-embed-id", data.id);

		player = Plyr.setup(video, { autoplay: true });

		stage.classList.add("open");

		showText();

	}

	function showImage() {

		player = document.getElementById("imageStage");

		player.style.backgroundImage = `url(${ data.url })`;
		player.classList.add("open");

		showText();

	}

	function showText() {

		content.innerHTML = `<h1>${data.title}</h1> ${data.description}`;

		if (data.comments) {
			content.innerHTML += "<div id='disqus_thread'></div>";
			comments(data.commentID);
		}

		setTimeout(function(){
			canvas.renderer.domElement.click();
		}, 2000);

	}

	function resetText() {
		var contentCache = document.getElementById("resetContent").innerHTML;
		content.innerHTML = contentCache;
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

	Texture(data.floor);

}