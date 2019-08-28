export const Pavilion = {
	"models" : [
		{
			"name": "floor",
			"path": "assets/models/pavilion/pavilion-floor.json",
			"scale" : [0.65, 0.65, 0.65]
		},
		{
			"name": "beds",
			"path": "assets/models/pavilion/pavilion-beds.json",
			"scale" : [0.65, 0.65, 0.65]
		},
		{
			"name": "layout",
			"path": "assets/models/pavilion/pavilion-layout.json",
			"scale" : [0.65, 0.65, 0.65]
		}
	],
	"floor" : "assets/textures/pavilion.mp4",
	"hotspots" : [
		{
			"name" : "ward",
			"position" : [0, 7, 10],
			"data" : {
				"url" : "images/pavilion/main-ward.jpg",
				"title" : "Main Ward",
				"position": "left bottom",
				"description": "The pavilion inverts internal and external space, detached from the main building, often amongst gardens, and having a tent-like cylindrical shape.",
				"quotes" : [{
					"quote" : "Its essential features are the separation of the ward from all others, the open window on each side of every bed, the relative lack of internal spatial divisions and the chimney flue in a central location.",
					"cite" : "Lindsay Prior (1992)",
					"colour" : "grad-orange-pink",
					"position" : "right middle",
				}],
				"credit" : {
					"text" : "Image courtesy of University Archives, University of Pennsylvania.",
					"link" : "http://hdl.library.upenn.edu/1017/d/archives/20040413004"
				},
			}
		},
		{
			"name" : "chimney",
			"position" : [0, 7, 4.5],
			"data" : {
				"url" : "images/pavilion/chimney.jpg",
				"title" : "Central Chimney",
				"position": "left bottom",
				"bgPosition" : "top center",
				"bgColour" : "#2b2227",
				"theme" : "dark",
				"description": "The central chimney keeps air moving and circulating. The stove draws air from surrounding windows, to be expelled up and out through high vaulted ceilings.",
				"credit" : {
					"text" : "Image courtesy of University Archives, University of Pennsylvania.",
					"link" : "http://hdl.library.upenn.edu/1017/d/archives/20020501003"
				},
			}
		},
		{
			"name" : "windows-1",
			"position" : [-10.68, 2.75, 7.58],
			"data" : {
				"url" : "images/pavilion/windows-1.jpg",
				"title" : "Windows",
				"position": "left bottom",
				"theme" : "dark",
				"description": "Windows were situated either side of each bed with direct access to create an “island of fresh air”. They tended to be floor to ceiling height to maximise ventilation and natural daylight.",
				"credit" : {
					"text" : "Image courtesy of University Archives, University of Pennsylvania.",
					"link" : "http://hdl.library.upenn.edu/1017/d/archives/20040414002"
				},
			}
		},
		{
			"name" : "windows-2",
			"position" : [-10.44, 2.75, 1.26],
			"data" : {
				"url" : "images/pavilion/windows-2.jpg",
				"title" : "Windows",
				"position": "center bottom",
				"theme" : "dark",
				"mobile" : "First rule of nursing, (is) to keep the air he breathes as pure as the external air, without chilling him. - Florence Nightingale (1860)",
				"quotes" : [{
					"quote" : "First rule of nursing, (is) to keep the air he breathes as pure as the external air, without chilling him.",
					"cite" : "Florence Nightingale (1860)",
					"colour" : "pink",
					"position" : "center middle"
				}]
			}
		},
		{
			"name" : "piazza",
			"position" : [13.5, 4, 4],
			"data" : {
				"url" : "images/pavilion/piazza.jpg",
				"title" : "Piazza",
				"position": "left middle",
				"mobile" : "Beds were wheeled outside onto surrounding balconies / porch / galleries during the daytime as part of the <em>“fresh air cure”</em> with easy access to outside spaces and gardens. - Lindsay Prior (1992)",
				"quotes" : [{
					"quote" : "Beds were wheeled outside onto surrounding balconies / porch / galleries during the daytime as part of the <em>“fresh air cure”</em> with easy access to outside spaces and gardens.",
					"cite" : "Lindsay Prior (1992)",
					"position" : "left bottom",
					"colour" : "grad-orange-pink"
				}],
				"credit" : {
					"text" : "",
					"link" : ""
				},
			}
		},
		{
			"name" : "toilets",
			"position" : [16, 7, -16],
			"data" : {
				"url" : "images/pavilion/toilets.jpg",
				"title" : "Toilets",
				"position": "left middle",
				"description": "Sanitary areas (toilets, baths) were situated to expel foul gasses away from the main <em>“fresh air”</em> ward.",
				"bgPosition" : "center",
				"bgColour" : "#fbeaa6",
			}
		},
		{
			"name" : "kitchen",
			"position" : [4.5, 7, -13.80],
			"data" : {
				"url" : "images/pavilion/kitchen.jpg",
				"title" : "Kitchen",
				"position": "left bottom",
				"theme" : "dark",
				"credit" : {
					"text" : "Image courtesy of University Archives, University of Pennsylvania.",
					"link" : "http://hdl.library.upenn.edu/1017/d/archives/20100316007"
				},
			}
		},
		{
			"name" : "surgery",
			"position" : [-15, 7, -14],
			"data" : {
				"url" : "images/pavilion/surgery.jpg",
				"title" : "Surgery",
				"position": "left bottom",
				"theme" : "dark",
				"credit" : {
					"text" : "Image courtesy of University Archives, University of Pennsylvania.",
					"link" : "http://hdl.library.upenn.edu/1017/d/archives/20040413006"
				},
			}
		},
		{
			"name" : "pavilion",
			"position" : [0, 7, -8.5],
			"data" : {
				"url" : "images/pavilion/pavillion.jpg",
				"title" : "Pavilion",
				"position": "left bottom",
				"description": "The pavilion and the fresh air ward are classic 19th century expressions of miasmic theories of disease.<br /><br />Miasmic theories of disease follows the idea that disease is carried in the air: decaying decomposition, putrefaction fumes and stagnating vapours where disease “lurks” in dark airless corners.",
			}
		},
		{
			"name" : "anitbiotic",
			"position" : [0, 7, 17],
			"data" : {
				"url" : "images/pavilion/antibiotic-1.jpg",
				"title" : "Antibiotic Era",
				"position": "left bottom",
				"theme" : "dark",
				"mobile" : "Antibiotics meant that hospitals '... turned away from Nightingale’s principles, closing their windows and shutting out the sun' - Swain (2013)",
				"quotes" : [{
					"quote" : "The ‘... introduction of drug therapy at the close of World War II’ represented a ‘dramatic break … by the 1960s, antimicrobial treatment had rendered sanatoria, [and] the rest cure obsolete",
					"cite" : "Adams et al (2008)",
					"colour" : "grad-orange",
					"position" : "top left",
				},{
					"quote" : "Antibiotics meant that hospitals '... turned away from Nightingale’s principles, closing their windows and shutting out the sun'",
					"cite" : "Swain (2013)",
					"colour" : "grad-pink-blue",
					"position" : "middle center",
				}],
			}
		}
	]
};