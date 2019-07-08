// import Plyr from "../../../node_modules/plyr/dist/plyr.polyfilled";
// import { canvas } from "./_canvas";
// import { Texture } from "./_floor";
import { events } from "./_events";

export const media = function(mesh){

	const data = mesh.userData;
	let slide = document.querySelector(".slide");
	
	if (data.type != "video") {

		const descpos = data.position || "top left";
		const content = data.description ? `<p>${data.description}</p>` : "";
		const credit = data.credit ? `<small><a href="${data.credit.link}" target="_blank">${data.credit.text}</a></small>` : "";
		const bgImage = data.url ? `background-image: url(${data.url});` : "";

		let bg = `<div class="bg" style="${bgImage}"></div>`;
		let summary = `<div class="slide-desc ${descpos}"><h2>${data.title}</h2> ${content} ${credit}</div>`;
		let quotes = "";

		if (data.quotes && data.quotes.length == 1 && !content) {
			
			const quote = data.quotes[0];
			const cite = quote.cite ? `<cite class="shadow">${quote.cite}</cite>` : "";
			summary = `<div class="slide-desc ${descpos}"><h2>${data.title}</h2>${credit}<blockquote class="rounded-small shadow ${quote.colour}"><p>${quote.quote}</p>${cite}</blockquote></div>`;

		} else if (data.quotes) {
			data.quotes.forEach(quote => {
				const cite = quote.cite ? `<cite class="shadow">${quote.cite}</cite>` : "";
				quotes += `<blockquote class="rounded-small shadow ${quote.position} ${quote.colour}"><p>${quote.quote}</p>${cite}</blockquote>`
			});
		}

		if (data.theme)
			slide.classList.add(data.theme);

		slide.innerHTML = bg + summary + quotes;

	}

	events.emit("changeSlide");

	// const content = document.querySelector(".content");
	// const closeBTNS = document.querySelectorAll(".close");
	// let player;

	// closeBTNS.forEach(function(close){

	// 	close.addEventListener("click", function(event){

	// 		event.preventDefault();
	// 		this.parentElement.classList.remove("open");
	// 		canvas.renderer.domElement.click();
	// 		resetText();

	// 		if (player)
	// 			player[0].destroy();

	// 	});

	// });

	// function showVideo(){

	// 	const stage = document.getElementById("videoStage");
	// 	const video = document.querySelectorAll("#player");

	// 	video[0].setAttribute("data-plyr-embed-id", data.id);

	// 	player = Plyr.setup(video, { autoplay: true });

	// 	stage.classList.add("open");

	// 	showText();

	// }

	// function showImage() {

	// 	player = document.getElementById("imageStage");

	// 	player.style.backgroundImage = `url(${ data.url })`;
	// 	player.classList.add("open");

	// 	showText();

	// }

	// function showText() {

	// 	content.innerHTML = `<h1>${data.title}</h1> ${data.description}`;

	// 	if (data.comments) {
	// 		content.innerHTML += "<div id='disqus_thread'></div>";
	// 		comments(data.commentID);
	// 	}

	// 	setTimeout(function(){
	// 		canvas.renderer.domElement.click();
	// 	}, 2000);

	// }

	// function resetText() {
	// 	var contentCache = document.getElementById("resetContent").innerHTML;
	// 	content.innerHTML = contentCache;
	// }

	// switch (data.type) {
	// 	case "video" :
	// 		showVideo();
	// 		break;
	// 	case "image" :
	// 		showImage();
	// 		break;
	// 	case "text" :
	// 		showText();
	// 		break;
	// 	default:
	// 		break;
	// }

	// Texture(data.floor);

}