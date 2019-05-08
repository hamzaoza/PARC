class GTag {

	constructor(id) {

		const g = document.createElement("script");
		
		g.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
		document.body.appendChild(g);

		window.dataLayer = window.dataLayer || [];

		this.gtag('js', new Date());
		this.gtag('config', id , {'site_speed_sample_rate': 100});

	}

	gtag() {
		dataLayer.push(arguments);
	}

	event(category, action, label) {
		
		if (typeof window.dataLayer !== "undefined") {
				
			this.gtag('event', action, {
				'event_category': category,
				'event_label': label
			});

		}

	}

}

export const gtag = new GTag("UA-138062674-1");

// gtag.event("Test Category", "click", "Something");