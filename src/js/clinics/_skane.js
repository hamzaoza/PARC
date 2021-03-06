export const Skane = {
	"models" : [
		{
			"name": "floor",
			"path": "assets/models/skane/skane-floor.json",
			"castShadow" : false,
			"scale" : [0.65, 0.65, 0.65]
		},
		{
			"name": "layout",
			"path": "assets/models/skane/skane-layout.json",
			"scale" : [0.65, 0.65, 0.65]
		}
	],
	// "floor" : "assets/textures/skane.mp4",
	"summary" : "An architectural design for the 'post-antibiotic future' - a hospital for infectious disease in Malmo, Sweden.",
	"hotspots" : [{
		"name" : "skane",
		"position" : [0, 3, 0],
		"data" : {
			"url" : "images/skane/skane-view.jpg",
			"title" : "Malmo Infectious Disease Hospital",
			"position": "left bottom",
			"theme" : "dark",
			"credit" : {
				"text" : "Image courtesy of C.F. Møller Architects and Joergen True",
				"link" : "https://www.cfmoller.com/p/Emergency-and-Infectious-Diseases-Unit-SUS-Malmo-i2150.html"
			},
			"quotes" : [{
				"quote" : "To better anticipate the coming 25 years, we chose to look back 25 years...Generally a belief prevailed in the medical discourse that problems were solved with antibiotics and by improving socio-economic conditions.",
				"cite" : "Holmdahl et al (2013)",
				"colour" : "grad-pink-blue",
				"position" : "left middle",
			}],
		}
	},{
		"name" : "entrance",
		"position" : [-1.5, 3, 18.5],
		"data" : {
			"url" : "images/skane/entrance.jpg",
			"title" : "Entrance",
			"position": "left bottom",
			"theme" : "dark",
			"credit" : {
				"text" : "Image courtesy of C.F. Møller Architects and Joergen True",
				"link" : "https://www.cfmoller.com/p/Emergency-and-Infectious-Diseases-Unit-SUS-Malmo-i2150.html"
			},
			"quotes" : [{
				"quote" : "Entrance from the outside makes it possible for patients and relatives to enter rooms under isolation measures without entering the interior areas of the ward.",
				"cite" : "Holmdahl et al (2013)",
				"colour" : "grad-pink-blue",
				"position" : "center bottom",
			}],
		}
	},{
		"name" : "outer-perimeter",
		"position" : [11, 3, 16],
		"data" : {
			"url" : "images/skane/bg-3.jpg",
			"title" : "Outer Perimeter",
			"description": "Patients, relatives and visitors occupy the outer ring of the building - seperated by 'anterooms' from the inner ring occupied by clinical staff.",
			"position": "left bottom",
			"quotes" : [{
				"quote" : "By proposing a round building, a high degree of standardisation could be achieved because the patient room units were distributed along the outer perimeter...",
				"cite" : "Holmdahl et al (2013)",
				"position": "middle center",
				"colour" : "grad-pink-blue",
			}],
		}
	},{
		"name" : "circulation",
		"position" : [-12, 3, 0],
		"data" : {
			"url" : "images/skane/bg-1.jpg",
			"title" : "Circulation",
			"description": "A goal of the hospital is 'outdoor circulation' removing 'indoor' corridors and passageways.",
			"position": "center middle",
			"quotes" : [{
				"quote" : "...it should be possible to separate the flow or circulation of patients with contagious diseases from other patient circulation...",
				"cite" : "Holmdahl et al (2013)",
				"position": "center bottom",
				"colour" : "grad-pink-blue",
			}],
		}
	},{
		"name" : "inner-perimeter",
		"position" : [-4.3, 3, -8.5],
		"data" : {
			"url" : "images/skane/corridor.jpg",
			"title" : "Inner Perimeter",
			"description": "Clinical staff occupy the inner ring of the building - seperated from the outer ring (occupied by patients) by 'anterooms'.",
			"position": "left bottom",
			"theme" : "dark",
			"credit" : {
				"text" : "Image courtesy of C.F. Møller Architects and Joergen True",
				"link" : "https://www.cfmoller.com/p/Emergency-and-Infectious-Diseases-Unit-SUS-Malmo-i2150.html"
			},
			"quotes" : [{
				"quote" : "Nursing offices and stations, staff rooms, supply rooms were located in the inner perimeter",
				"cite" : "Holmdahl et al (2013)",
				"colour" : "grad-pink-blue",
				"position" : "center bottom",
			}],
		}
	},{
		"name" : "microbiome",
		"position" : [15.2, 3, 4.6],
		"data" : {
			"url" : "images/skane/bg-2.jpg",
			"title" : "Human Microbiome",
			"position": "left top",
			"quotes" : [{
				"quote" : "...the use of broad-spectrum antibiotics, bleach, and hand sanitiser might take out some of the harmful pathogens, but it also cuts a swath through the hordes of non-pathogenic micro-organisms",
				"cite" : "Carrie. A. (2014)",
				"colour" : "pink",
				"position" : "center bottom",
			},{
				"quote" : "Human microbiome research has shown that the use of antibiotics can disrupt the normal array of microbes that live in and on our bodies. The constant attempts at sterilisation in hospitals might function on a similar level...",
				"colour" : "pink",
				"position" : "left middle",
			}],
		}
	},{
		"name" : "anterooms",
		"position" : [11.68, 3, 6],
		"data" : {
			"url" : "images/skane/bg-1.jpg",
			"title" : "Anterooms",
			"description": "Situated between the outer and inner ring of the hospital - containing sanitory equipment, changing facilities and hand wash basins, etc.",
			"position": "center middle",
		}
	},{
		"name" : "balconies",
		"position" : [7, 3, -17.5],
		"data" : {
			"url" : "images/skane/bg-2.jpg",
			"title" : "Balconies",
			"position": "left bottom",
			"quotes" : [{
				"quote" : "Design of the exterior balconies led to discussions regarding exposure to wind, rain, and snow, exposure which was unavoidable to some degree. On the other hand, too much enclosure or shelter on the exterior paths could violate the principle that fresh outdoor air reduces infection transmission risk",
				"cite" : "Holmdahl and Lanbeck (2013)",
				"colour" : "grad-pink-blue",
				"position" : "center bottom",
			}]
		}
	}]
};