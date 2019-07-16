import { events } from "./_events";

class GTag {

	setup(id) {
		
		const g = document.createElement("script");
		
		g.setAttribute("id", "analytics");
		g.src = "https://www.google-analytics.com/analytics.js";
		document.body.appendChild(g);

		window.ga = this.ga;
		
		this.ga.q = [];
		this.ga.l = +new Date;
		this.ga("create", id, {"siteSpeedSampleRate": 100});
		this.ga("set","transport","beacon");
		this.ga("send", "pageview");

	}

	remove() {
		const g = document.getElementById("analytics");

		if (g)
			g.parentNode.removeChild(g);

		window.ga = "";
	}

	ga() {
		this.ga.q.push(arguments);
	}

	event(category, action, label) {
		if (typeof window.ga == "function" && window.analytics == "true")
			window.ga("send", "event", category, action, label);
	}

}

export const gtag = new GTag();

events.on("analytics", updateConsent);

function updateConsent() {

	const consentDIV = document.getElementById("cookies");

	if (window.analytics == "true") {
		gtag.setup("UA-138062674-1");
		consentDIV.innerHTML = "Opted In";
	} else {
		gtag.remove();
		consentDIV.innerHTML = "Opted Out";
	}

}

updateConsent();

// gtag.event("Test Category", "click", "Something");