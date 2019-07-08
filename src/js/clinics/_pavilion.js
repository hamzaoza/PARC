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
	"hotspots" : [
		{
			"name" : "ward",
			"position" : [0, 7, 10],
			"data" : {
				"url" : "",
				"title" : "Main Ward",
				"position": "left middle",
				"description": "The pavilion inverts internal and external space, detached from the main building, often amongst gardens, and having a tent-like cylindrical shape.",
				"quotes" : [{
					"quote" : "Its essential features are the separation of the ward from all others, the open window on each side of every bed, the relative lack of internal spatial divisions and the chimney flue in a central location.",
					"cite" : "Lindsay Prior (1992)",
					"colour" : "green",
					"position" : "left bottom",
				}]
			}
		},
		{
			"name" : "chimney",
			"position" : [0, 7, 4.5],
			"data" : {
				"url" : "images/pavilion/chimney.jpg",
				"title" : "Central Chimney",
				"position": "left bottom",
				"theme" : "dark",
				"description": "The job of the central chimney was to keep air moving and circulating. The central stove drew air from surrounding windows, to evacuate air up and out through high vaulted ceilings."
			}
		},
		{
			"name" : "windows-1",
			"position" : [-10.68, 2.75, 7.58],
			"data" : {
				"url" : "",
				"title" : "Windows",
				"position": "left middle",
				"description": "Windows were situated either side of each bed with direct access to create an <em>“island of fresh air”</em>. They tended to be floor to ceiling height to maximise ventilation and natural daylight."
			}
		},
		{
			"name" : "windows-2",
			"position" : [-10.44, 2.75, 1.26],
			"data" : {
				"url" : "",
				"title" : "Windows",
				"position": "left bottom",
				"quotes" : [{
					"quote" : "First rule of nursing, (is) to keep the air he breathes as pure as the external air, without chilling him.",
					"cite" : "Florence Nightingale (1860)",
					"colour" : "pink",
					"position" : "center middle",
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
				"quotes" : [{
					"quote" : "Beds were wheeled outside onto surrounding balconies / porch / galleries during the daytime as part of the <em>“fresh air cure”</em> with easy access to outside spaces and gardens.",
					"cite" : "Lindsay Prior (1992)",
					"position" : "left bottom",
					"colour" : "green"
				}]
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
			}
		},
		{
			"name" : "kitchen",
			"position" : [4.5, 7, -13.80],
			"data" : {
				"url" : "images/pavilion/kitchen.jpg",
				"title" : "Kitchen",
				"description": "Image courtesy of <a href='http://dla.library.upenn.edu/dla/archives/image.html?q=kitchen&id=ARCHIVES_20100316007&'>Penn Libraries, University of Pennsylvania</a>.",
				"position": "left bottom",
				"theme" : "dark",
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
			}
		},
	]
};