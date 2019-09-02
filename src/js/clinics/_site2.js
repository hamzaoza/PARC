export const Site2 = {
	"models" : [
		{
			"name": "floor",
			"path": "assets/models/site2/site2-floor.json",
			"castShadow" : false
		},
		{
			"name": "layout",
			"path": "assets/models/site2/site2-layout.json"
		}
	],
	"floor" : "assets/textures/site2.mp4",
	"hotspots" : [{
		"name" : "parking",
		"position" : [-28, 3.5, -2.5],
		"data" : {
			"url" : "images/site2/parking.jpg",
			"title" : "Parking and Access",
			"position": "left bottom",
			"theme" : "dark",
			"quotes" : [{
				"quote" : "I tend to not go to the parking meter if I see someone else there, I will just hang back…because it’s enclosed, it’s in a little hut. I carry hand sanitiser in my bag.",
				"cite" : "Abbi, Patient",
				"colour" : "orange",
				"position" : "right middle",
			}]
		}
	},{
		"name" : "entrance",
		"position" : [-22, 3.5, -2.5],
		"data" : {
			"url" : "images/site2/entrance.jpg",
			"title" : "Entrance",
			"position": "left bottom",
			"theme" : "dark",
			"quotes" : [{
				"quote" : "Those two sets of double doors, it’s an enclosed area, so that always makes me a bit nervous...",
				"cite" : "Abbi, Patient",
				"colour" : "orange",
				"position" : "left bottom",
			}],
		}
	},{
		"name" : "route",
		"position" : [-12, 3.5, -2.5],
		"data" : {
			"url" : "images/site2/route.jpg",
			"title" : "Route to Clinic",
			"position": "left middle",
			"quotes" : [{
				"quote" : "...the patients don’t report to reception, they come straight through to us. I’m normally the first person to see the patient, they will get put into a designated room, depending on what they grow...",
				"cite" : "Elizabeth, Healthcare Assistant",
				"colour" : "pink",
				"position" : "left bottom",
			},{
				"quote" : "You don’t have to go to the main reception, you just walk straight through. Once I can see the seating area I start ‘scouting’ around to see who else is there. Generally they’re really good at timing appointments so you don’t come into contact with anybody.",
				"cite" : "Abbi, Patient",
				"colour" : "orange",
				"position" : "center bottom",
			}],
		}
	},{
		"name" : "corridors-1",
		"position" : [-5, 3.5, -2.5],
		"data" : {
			"url" : "images/site2/corridor-1.jpg",
			"title" : "Corridor to Clinic",
			"position": "left top",
			"quotes" : [{
				"quote" : "It’s one way in and out, there’s a risk that patients might walk in and out together, although it’s a low risk. We stagger the appointments, but you’ve got patients turning up at different times to their appointments. ",
				"cite" : "Anthony, Consultant",
				"colour" : "green",
				"position" : "left bottom",
			},{
				"quote" : "...you get quite a bit of space in the main corridor, if I see someone coming from this clinic we can both walk on opposite sides of the corridor. So I’ve never seen that as particularly a risky area",
				"cite" : "Abbi, Patient",
				"colour" : "orange",
				"position" : "center bottom",
			}],
		}
	},{
		"name" : "corridors-2",
		"position" : [-7, 5, 5],
		"data" : {
			"url" : "images/site2/corridor-2.jpg",
			"title" : "Corridor to X-Ray",
			"position": "left bottom",
			"quotes" : [{
				"quote" : "...I would like mirrors so you can see who’s coming around corners, that might be a good thing when you are going to and from X-ray in the narrower corridors...",
				"cite" : "Abbi, Patient",
				"colour" : "orange",
				"position" : "left bottom",
			}],
		}
	},{
		"name" : "mdt",
		"position" : [2, 3.5, 0.75],
		"data" : {
			"url" : "images/site2/mdt.jpg",
			"title" : "Multidisciplinary Team Room",
			"position": "left top",
			"theme" : "dark",
			"quotes" : [{
				"quote" : "...first the patients are getting their obs done, then their lung function done and seeing the dietician, the consultants are usually the last people to go in, so we usually sit in there, do some emails.",
				"cite" : "Anthony, Consultant",
				"colour" : "green",
				"position" : "left middle",
			},{
				"quote" : "We will go and sit in that office, but we will keep bobbing out…just to make sure there are no patients loitering around, for cross-infection reasons.",
				"cite" : "Elizabeth, Healthcare Assistant",
				"colour" : "pink",
				"position" : "center bottom",
			}],
		}
	},{
		"name" : "whiteboard",
		"position" : [2.75, 3.5, -1.25],
		"data" : {
			"url" : "images/site2/whiteboard.jpg",
			"title" : "Whiteboard",
			"position": "right bottom",
			"quotes" : [{
				"quote" : "...if patients have arrived the whiteboard tells us where everybody is. So I’ll often come back here to refer to it, because patients are all numbered in order of who arrived when, so I don’t get that confused.",
				"cite" : "Irene, Physiotherapist",
				"colour" : "red",
				"position" : "right bottom",
			}],
		}
	},{
		"name" : "waiting",
		"position" : [6, 4, 0],
		"data" : {
			"url" : "images/site2/waiting.jpg",
			"title" : "Waiting",
			"position": "left top",
			"quotes" : [{
				"quote" : "...we segregate within the clinic, so patients don’t wait in the waiting room, they go straight into a room...but if we’ve got a backlog then we’ll put patients in separate waiting areas so they don’t mix.",
				"cite" : "Anthony, Consultant",
				"colour" : "green",
				"position" : "center middle",
			},{
				"quote" : "...this morning I had to go back and sit in a general waiting area because there wasn’t a room free. It’s not a massive concern, but it does make me wonder about cross-infection because at some point another person with CF is going to be walking past me...",
				"cite" : "Amy, Patient",
				"colour" : "orange",
				"position" : "right bottom",
			}],
		}
	},{
		"name" : "consulting-organisation",
		"position" : [6.5, 3.5, -3],
		"data" : {
			"url" : "images/site2/organisation.jpg",
			"title" : "Carousel",
			"position": "center bottom",
			"quotes" : [{
				"quote" : "So the patient will come in and go into a room and they’ll stay in that room and all the multi-disciplinary team (MDT) will go in and out of the room.",
				"cite" : "Anthony, Consultant",
				"colour" : "green",
				"position" : "left top",
			}],
		}
	},{
		"name" : "consulting-design",
		"position" : [5.25, 3.5, -6],
		"data" : {
			"url" : "images/site2/consultant-design.jpg",
			"title" : "Consulting Rooms – Design",
			"position": "left bottom",
			"theme" : "dark",
			"quotes" : [{
				"quote" : "...some rooms are really small, you’re kind of hunched in there...if you’re unlucky as a patient to get a small room, and if your family have come with you, there’s barely room to swing a cat!",
				"cite" : "Anthony, Consultant",
				"colour" : "green",
				"position" : "right middle",
			},{
				"quote" : "So what you want is big rooms, good ventilation, and unfortunately we’ve got some small rooms.",
				"cite" : "Nathan, Consultant",
				"colour" : "green",
				"position" : "right bottom",
			}],
		}
	},{
		"name" : "windows",
		"position" : [0, 3.5, 6.5],
		"data" : {
			"url" : "images/site2/windows.jpg",
			"title" : "Windows",
			"position": "left top",
			"theme" : "dark",
			"quotes" : [{
				"quote" : "I don’t like stuffy room, bugs are going to grow a damn sight better when it’s warm. I’ve always liked fresh air, I think it is an infection thing, but also because I like to feel I’m breathing, that’s a lung thing.",
				"cite" : "Indigo, Patient",
				"colour" : "orange",
				"position" : "left middle",
			},{
				"quote" : "If there’s any air circulation bugs will rapidly disperse, so I think windows and doors are really important. The first thing we do when a patient leaves is open the window and the door.",
				"cite" : "Luke, consultant",
				"colour" : "green",
				"position" : "left bottom",
			}],
		}
	},{
		"name" : "ventilation",
		"position" : [10, 3.5, -9.5],
		"data" : {
			"url" : "images/site2/ventilation.jpg",
			"title" : "Ventilation",
			"position": "left middle",
			"quotes" : [{
				"quote" : "...if a patient has been in the room and I go in to wipe the room down, I would always open a window. In an ideal world we’d leave maybe half an hour between patients, but in reality we can’t do that. We need more rooms or more clinics.",
				"cite" : "Irene, Physiotherapist",
				"colour" : "red",
				"position" : "left bottom",
			},{
				"quote" : "...there is an air conditioning unit. It’s rubbish! In the summer it’s too hot and in the winter it’s too cold...there’s a kind of a vent, I don’t think it does much.",
				"cite" : "Anthony, Consultant",
				"colour" : "green",
				"position" : "center bottom",
			}],
		}
	},{
		"name" : "source",
		"position" : [5.75, 3.5, 4],
		"data" : {
			"url" : "images/site2/source.jpg",
			"title" : "Source Isolation Rooms",
			"theme" : "dark",
			"position": "top left",
			"quotes" : [{
				"quote" : "...patients are cohort segregated but if they have got other microorganisms (MRSA, pandoraea, mycobacterium abscessus) we have some rooms allocated for source isolation, they are not used again until the next day. The two source isolation rooms are geographically separate.",
				"cite" : "Irene, Physiotherapist",
				"colour" : "red",
				"position" : "center bottom",
			},{
				"quote" : "I’m more segregated than most because of the MRSA, but that’s fine, because it’s keeping other people safe. I have to be one of the last ones in.",
				"cite" : "Abbi, Patient",
				"colour" : "orange",
				"position" : "left middle",
			}],
		}
	},{
		"name" : "toilets",
		"position" : [-10.75, 5, -6],
		"data" : {
			"url" : "images/site2/toilets.jpg",
			"title" : "Toilets",
			"position": "left middle",
			"quotes" : [{
				"quote" : "We only have two toilets and monitoring who goes in and out, that’s really hard. If we do see someone go in it that ‘grows’ something (e.g. MRSA) then I would put a sign on the door saying ‘do not use’, and then direct a patient to go to another toilet.",
				"cite" : "Mary, Healthcare Assistant",
				"colour" : "pink",
				"position" : "left bottom",
			},{
				"quote" : "...the toilets are an issue because we’ve had plumbing problems, so a lot of the toilets have been out of order.",
				"cite" : "Irene, Physiotherapist",
				"colour" : "red",
				"position" : "center middle",
			}],
		}
	},{
		"name" : "xray",
		"position" : [-7, 3.5, 10],
		"data" : {
			"url" : "images/site2/xray.jpg",
			"title" : "X-Ray",
			"position": "top center",
			"quotes" : [{
				"quote" : "...if a patient’s going to need an X-ray or an ultrasound, we call through first to make sure that no patients are together. We’ve got a very well-established radiology department, one of them was married to a CF patient, so they know about segregation.",
				"cite" : "Luke, Consultant",
				"colour" : "green",
				"position" : "left top",
			},{
				"quote" : "X-ray has a fairly small waiting area, we get to skip the waiting lines. The changing rooms are small spaces, there is always that thing, has someone coughed and touched the door handle?  Again, my own hand sanitiser usually comes out!",
				"cite" : "Abbi, Patient",
				"colour" : "orange",
				"position" : "left bottom",
			}],
		}
	}]
};