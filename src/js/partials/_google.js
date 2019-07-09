// <script>
// window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
// ga('create', 'UA-XXXXX-Y', 'auto'); ga('set','transport','beacon'); ga('send', 'pageview')
// </script>
// <script src="https://www.google-analytics.com/analytics.js" async></script>

class GTag {

	constructor(id) {

		const g = document.createElement("script");
		
		g.src = "https://www.google-analytics.com/analytics.js";
		document.body.appendChild(g);

		window.ga = this.ga;
		
		this.ga.q = [];
		this.ga.l = +new Date;
		this.ga('create', id, 'auto');
		this.ga('set','transport','beacon');
		this.ga('send', 'pageview');

		// this.ga('create', id, 'auto');
		// this.ga('set','transport','beacon');
		// this.ga('send', 'pageview');		

		// this.gtag('js', new Date());
		// this.gtag('config', id , {'site_speed_sample_rate': 100});

	}

	// gtag() {
	// 	dataLayer.push(arguments);
	// }

	ga() {
		console.log("triggered");
		this.ga.q.push(arguments);
		console.log(this.ga.q);
	}

	event(category, action, label) {
		
		// if (typeof window.dataLayer !== "undefined") {
				
		// 	this.gtag('event', action, {
		// 		'event_category': category,
		// 		'event_label': label
		// 	});

		// }

		// if (typeof window.ga !== "undefined") {
			this.ga('send', 'event', category, action, label);
		// }

	}

}

export const gtag = new GTag("UA-138062674-1");

// window.ga = gtag.ga();
// window.ga.q = [];
// window.ga.l = +new Date;

// gtag.ga('create', "UA-138062674-1", 'auto');
// gtag.ga('set','transport','beacon');
// gtag.ga('send', 'pageview');

// gtag.event("Test Category", "click", "Something");