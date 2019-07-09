class GTag {

	constructor(id) {

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

	ga() {
		this.ga.q.push(arguments);
	}

	event(category, action, label) {
		if (typeof window.ga !== "undefined")
			window.ga("send", "event", category, action, label);
	}

}

export const gtag = new GTag("UA-138062674-1");

// gtag.event("Test Category", "click", "Something");