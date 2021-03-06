import { events } from "./_events";

export const media = function(mesh){

	const data = mesh.userData;
	let slide = document.querySelector(".slide");
	
	if (data.type != "video") {

		function getMobile() {

			if (data.mobile)
				return data.mobile;

			if (data.description)
				return data.description;

			if (data.quotes) {

				const quote = data.quotes[0];

				return `<strong>${quote.cite} says:</strong> "<em>${quote.quote}</em>"`;

			}

			return "";

		}

		const descpos = data.position || "top left";
		const content = data.description ? `<p>${data.description}</p>` : "";
		const credit = data.credit ? `<small><a href="${data.credit.link}" target="_blank">${data.credit.text}</a></small>` : "";
		const bgImage = data.url ? `background-image: url(${data.url});` : "";
		const mobiledes = getMobile();

		let bg = `<div class="bg" style="${bgImage}"></div>`;
		let summary = `<div class="slide-desc ${descpos}"><h2>${data.title}</h2> ${content} ${credit}</div>`;
		let mobileImg = `<div class="mobile-img scroll"><img src="${data.url.replace(".", "-m.")}" alt="Image for ${data.title}"/></div>`;
		let mobile = `<div class="mobile-desc scroll"><h2>${data.title}</h2><p>${mobiledes}</p> ${credit} </div>`;
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

		slide.innerHTML = bg + summary + quotes + mobileImg + mobile;

	}

	events.emit("changeSlide");

}