export const Site1 = {
	"models" : [
		{
			"name": "floor",
			"path": "assets/models/site1/site1-floor.json",
			"castShadow" : false
		},
		{
			"name": "layout",
			"path": "assets/models/site1/site1-layout.json"
		}
	],
	"floor" : "assets/textures/site1.mp4",
	"hotspots" : [{
		"name" : "entrance",
		"position" : [-17.5, 4, 14],
		"data" : {
			"url" : "images/site1/entrance.jpg",
			"title" : "Main Entrance",
			"position": "left bottom",
			"quotes" : [{
				"quote" : "This is known as the only hospital entrance...that’s where I feel that the biggest risk is, because you don’t know who is in that area, and there are turnstiles and it can be busy.",
				"cite" : "Neil, Patient",
				"colour" : "orange",
				"position" : "left bottom",
			}]
		}
	},{
		"name" : "lifts",
		"position" : [-21.5, 4, 8],
		"data" : {
			"url" : "images/site1/lifts.jpg",
			"title" : "Lifts",
			"position": "center top",
			"quotes" : [{
				"quote" : "…the lifts would be a risky area, you’re in with quite a few people, people are coughing, I try to like avoid them as much as I can...the only times I’d use the lift are if I’m a bit poorly.",
				"cite" : "Ella, Patient",
				"colour" : "orange",
				"position" : "left bottom",
			}]
		}
	},{
		"name" : "toilets",
		"position" : [-21, 4, -2],
		"data" : {
			"url" : "images/site1/toilets.jpg",
			"title" : "Toilets",
			"position": "left middle",
			"quotes" : [{
				"quote" : "There are no toilets in outpatient clinic rooms...CF patients don’t know what each other looks like, so they don’t know whether they’re standing next to a CF patient.",
				"cite" : "Anne, Physiotherapist",
				"colour" : "red",
				"position" : "left bottom",
			},{
				"quote" : "The toilets are small, so you always get queues for the toilets. That can be another risky area, because you have to wait in this tiny little corridor.",
				"cite" : "Rupert, Patient",
				"colour" : "orange",
				"position" : "center bottom",
			}]
		}
	},{
		"name" : "waiting",
		"position" : [-0.5, 4, 6],
		"data" : {
			"url" : "images/site1/waiting.jpg",
			"title" : "Waiting",
			"position": "left middle",
			"theme" : "dark",
			"quotes" : [{
				"quote" : "...we don’t have our own outpatient healthcare assistants (HCAs), they are generic clinic ones. Patients come in and there’s a little row of seats here, we’ll peek our head around, and one of the HCAs has sat them there to wait...our ideal is that patients go straight into a room.",
				"cite" : "Rachel, Physiotherapist",
				"colour" : "red",
				"position" : "center bottom",
			},{
				"quote" : "...there is a waiting area here, you get put in there - not by the CF nurse, but one of the people who works on the outpatient corridor...once the CF team find out you are here they put you in a room.",
				"cite" : "Rupert, Patient",
				"colour" : "orange",
				"position" : "left bottom",
			}]
		}
	},{
		"name" : "wayfinding",
		"position" : [17.5, 4, 0],
		"data" : {
			"url" : "images/site1/rupert.jpg",
			"title" : "Wayfinding",
			"position": "left bottom",
			"quotes" : [{
				"quote" : "I always get lost, I always forget what corridor it is, so I always ring and text the CF team...",
				"cite" : "Rupert, Patient",
				"colour" : "orange",
				"position" : "left bottom",
			}]
		}
	},{
		"name" : "corridors",
		"position" : [-8, 4, -8],
		"data" : {
			"url" : "images/site1/corridor-c.jpg",
			"title" : "Corridors",
			"position": "left middle",
			"theme" : "dark",
			"quotes" : [{
				"quote" : "...small narrow corridors give me mild panic attacks, when there’s loads of patients in and out...there’s not a one way system, so patients could cross paths, as much as we try and prevent it.",
				"cite" : "Izzie, Physiotherapist",
				"colour" : "red",
				"position" : "center bottom",
			},{
				"quote" : "...if someone has CF, you don’t know what they look like, so if we were in the corridor together, I’m not going to know.",
				"cite" : "Ella, Patient",
				"colour" : "orange",
				"position" : "left bottom",
			}]
		}
	},{
		"name" : "regular-clinic-rooms",
		"position" : [-1, 4, -10.5],
		"data" : {
			"url" : "images/site1/friday-patients.jpg",
			"title" : "Regular Clinic Rooms",
			"position": "left bottom",
			"theme" : "dark",
			"quotes" : [{
				"quote" : "...when we have patients with NTM we ask [outpatients staff] to put the observation machine and any equipment we’ve used in that clinic room, for when it gets HPV [hydrogen peroxide vapour] cleaned. In reality that doesn’t happen, you can’t track it...",
				"cite" : "Emma, CF Nurse",
				"colour" : "pink",
				"position" : "right bottom",
			},{
				"quote" : "...at the moment we have fabric privacy curtains in the rooms but we want to move to disposable ones...I guess we’re just less in control of the space",
				"cite" : "Rachel, Physiotherapist",
				"colour" : "orange",
				"position" : "center bottom",
			}]
		}
	},{
		"name" : "carousel",
		"position" : [-3, 4, -11.5],
		"data" : {
			"url" : "images/site1/friday-staff.jpg",
			"title" : "Carousel",
			"position": "left middle",
			"quotes" : [{
				"quote" : "...one of the nursing team would go in, the physio would go in, the dietician would go in, doctor would go in, the psychology team would go in...the patient would stay in the room...with the door shut.",
				"cite" : "Una, CF Nurse",
				"colour" : "pink",
				"position" : "left bottom",
			},{
				"quote" : "I feel very safe in the room, yeah. Because the doors are shut, so yes, I do feel absolutely safe in the room.",
				"cite" : "Neil, Patient",
				"colour" : "orange",
				"position" : "center bottom",
			}]
		}
	},{
		"name" : "mdt",
		"position" : [-4.75, 4, -5.5],
		"data" : {
			"url" : "images/site1/mdt.jpg",
			"title" : "Multidisciplinary Team Room",
			"position": "left top",
			"quotes" : [{
				"quote" : "...we use this room as our MDT office, so all of the trolleys and equipment go in there, and the staff sit in there so that we can do all the prep work, we can do a discussion about patients, and we wait for our turn.",
				"cite" : "Rachel, Physiotherapist",
				"colour" : "red",
				"position" : "center bottom",
			}]
		}
	},{
		"name" : "windows",
		"position" : [10.5, 4, -3],
		"data" : {
			"url" : "images/site1/windows.jpg",
			"title" : "Windows",
			"position": "left middle",
			"theme" : "dark",
			"quotes" : [{
				"quote" : "All the clinic rooms have windows...They don’t open very far, but they do open!",
				"cite" : "Una, CF Nurse",
				"colour" : "pink",
				"position" : "left bottom",
			},{
				"quote" : "I don’t like hospitals; I’m big on fresh air, so I will always go nearest the window…the CF team are always so nice about opening it, because they know I like the air.",
				"cite" : "Rupert, Patient",
				"colour" : "orange",
				"position" : "center bottom",
			}]
		}
	},{
		"name" : "ad-hoc",
		"position" : [21, 4, -1.5],
		"data" : {
			"url" : "images/site1/adhoc.jpg",
			"title" : "Ad-Hoc Rooms",
			"position": "left middle",
			"quotes" : [{
				"quote" : "...ad hoc appointments can be in whichever rooms are free, because we don’t have dedicated clinic rooms. Sometimes we’re in a room that doesn’t have something that we need, like a clinical waste bin, some of the rooms are much smaller...",
				"cite" : "Rachel, Physiotherapist",
				"colour" : "red",
				"position" : "center bottom",
			},
			// {
			// 	"quote" : "...if you’re just doing it as an ad hoc appointment...it can be quite a challenge to get someone in.",
			// 	"cite" : "Anne, Physiotherapist",
			// 	"colour" : "red",
			// 	"position" : "left bottom",
			// }
		]
		}
	},{
		"name" : "exit",
		"position" : [-17.5, 4, 12],
		"data" : {
			"url" : "images/site1/entrance.jpg",
			"title" : "Exit",
			"position": "left middle",
			"quotes" : [{
				"quote" : "...so you come in and out through the same space...I take the same route every time.",
				"cite" : "Rupert, Patient",
				"colour" : "orange",
				"position" : "left bottom",
			},{
				"quote" : "Patients do tend to go out the way they came in.  They don’t walk the longer way around.",
				"cite" : "Una, CF Nurse",
				"colour" : "pink",
				"position" : "center bottom",
			}]
		}
	}]
};