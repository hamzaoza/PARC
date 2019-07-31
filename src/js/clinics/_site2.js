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
				"quote" : "I tend to not go to the parking meter if I see someone else there, unless it’s someone that to me is very obvious doesn’t have CF...if there’s anyone sort of my own age, I will tend to just like hang back...because it’s enclosed, it’s not just a meter that’s outside, it’s in a little hut. I carry hand sanitiser in my bag.",
				"cite" : "Abbi, Patient",
				"colour" : "orange",
				"position" : "right middle",
			},
			// {
			// 	"quote" : "When you get here it’s not particularly stressful in terms of finding somewhere to park, and it’s just really accessible...You don’t have all this worry and anxiety before you actually get into the building and get to do what you’re here for.",
			// 	"cite" : "Amy, Patient",
			// 	"colour" : "orange",
			// 	"position" : "center middle",
			// }
			],
		}
	},{
		"name" : "entrance",
		"position" : [-22, 3.5, -2.5],
		"data" : {
			"url" : "images/site2/",
			"title" : "Entrance",
			"position": "left bottom",
			"quotes" : [{
				"quote" : "those two sets of double doors, it’s an enclosed area, so that always makes me a little bit more nervous. And it’s just like if you both like breathe out at the same time...it’s a really small chance if you’re just passing, and there’s no actual contact, but there’s a reason they keep us segregated",
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
			"position": "left bottom",
			"quotes" : [{
				"quote" : "the patients don’t have to report to reception, they come straight through to us. I’m normally the first person to actually see the patient. So normally when the patients come through they will get put into a designated room, depending on what they grow",
				"cite" : "Elizabeth, Healthcare Assistant",
				"colour" : "pink",
				"position" : "center top",
			},{
				"quote" : "So you don’t have to go to the main reception you just walk straight through. Once I get to the point where I can see the seating area I start ‘scouting’ around to see who else is there. Generally they’re really good at timing appointments. So you don’t come into contact with anybody",
				"cite" : "Abbi, Patient",
				"colour" : "orange",
				"position" : "center bottom",
			}],
		}
	},{
		"name" : "corridors-1",
		"position" : [-5, 3.5, -2.5],
		"data" : {
			"url" : "images/site2/",
			"title" : "Corridors",
			"position": "left top",
			"quotes" : [{
				"quote" : "So it’s all in and out that way...where the patient’s walking down, there’s a risk that they might walk in and out together. I think that’s a low level risk, but it’s that bit until they’re in the kind of safety cocoon of the clinic...we stagger the appointments…But the problem is you’ve got patients turning up at different times to their appointments.",
				"cite" : "Anthony, Consultant",
				"colour" : "green",
				"position" : "left bottom",
			},{
				"quote" : "I think because you get quite a bit of space in the main corridor…if I see someone coming from this clinic we can both walk at like opposite sides of the corridor. So I’ve never seen that as particularly a risky area.",
				"cite" : "Abbi, Patient",
				"colour" : "orange",
				"position" : "center bottom",
			}],
		}
	},{
		"name" : "corridors-2",
		"position" : [-7, 5, 5],
		"data" : {
			"url" : "images/site2/",
			"title" : "Corridors",
			"position": "left bottom",
			"quotes" : [{
				"quote" : "I would like mirrors so you can see who’s coming around corners.  I feel like that might be a good thing when you are going to and from X-ray in the narrower corridors, if you can see who’s coming",
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
				"quote" : "So we all tend to kind of congregate there, because usually by the time you start clinic the patients are getting their observations done, their lung function done and seeing the dietician. So we’re usually, the clinicians are usually the last people to go in, so we usually sit in there, do some emails.",
				"cite" : "Anthony, Consultant",
				"colour" : "green",
				"position" : "center bottom",
			},{
				"quote" : "We will go and sit in that office, but we will keep bobbing out...just to make sure there are no patients loitering around, for cross-infection reasons.",
				"cite" : "Elizabeth, Healthcare Assistant",
				"colour" : "pink",
				"position" : "left middle",
			}],
		}
	},{
		"name" : "whiteboard",
		"position" : [2.75, 3.5, -1.25],
		"data" : {
			"url" : "images/site2/whiteboard.jpg",
			"title" : "Whiteboard",
			"position": "left middle",
			"quotes" : [{
				"quote" : "We have a white board with which patients are where. Because sometimes you lose track, if someone’s waiting in the car you forget about them.",
				"cite" : "Anthony, Consultant",
				"colour" : "green",
				"position" : "left bottom",
			},{
				"quote" : "You’re in one room, out the other, in one room, out the other, and it’s just making sure that the patient names are put on the white board, so obviously everybody else knows where they’re going.",
				"cite" : "Elizabeth, Healthcare Assistant",
				"colour" : "pink",
				"position" : "center bottom",
			},{
				"quote" : "If patients have arrived and they’re not in a room and I need to check where they are, the board on here tells us where everybody is. So I’ll often come back here to refer to it. Because they’re all numbered in order of who arrived when, so I don’t get that confused.",
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
				"quote" : "We segregate within the clinic, so patients don’t wait in the waiting room, they go straight into a side room and we go in afterwards...but if we’ve got a bit of a backlog then we’ll put patients in separate waiting areas so they don’t mix.",
				"cite" : "Anthony, Consultant",
				"colour" : "green",
				"position" : "center middle",
			},{
				"quote" : "this morning I had to go back and then sit in a general waiting area. That was because there wasn’t a room free when I arrived...it’s not a massive concern, but it does make me wonder if that is a cross-infection problem. Because you know, at some point another person with CF is going to be walking past me to get out of the building in order to free up a room.",
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
			"title" : "Consulting Rooms – Organisation",
			"position": "right bottom",
			"quotes" : [{
				"quote" : "So the patient will come in and go into a room and they’ll stay in that room and all the multi-disciplinary team (MDT) will go in and out of the room.",
				"cite" : "Anthony, Consultant",
				"colour" : "green",
				"position" : "left top",
			},{
				"quote" : "So my role in outpatients is patients arrive, I allocate a room for them, they go into that room.  I will go in and do the observations, input it all on the computer, then the physios will go in and do their bit, and the dietician and then the doctor...after a patient has gone, we will clean the room down. Ready for the next patient who comes in.",
				"cite" : "Mary, Healthcare Assistant",
				"colour" : "pink",
				"position" : "center middle",
			},{
				"quote" : "So the physio trolley, that’s our workstation if you like.  And it will literally just be then backwards and forwards from each room for the rest of the clinic.",
				"cite" : "Irene, Physiotherapist",
				"colour" : "red",
				"position" : "left bottom",
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
				"quote" : "these rooms are really small and these rooms are really big. So if you’re one of these rooms you’re kind of hunched in there...if you’re unlucky as a patient you get into a small room, and then you’ve got three or four people, your family have come with you. There’s barely room to swing a cat in some of those rooms.",
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
				"quote" : "Sometimes the windows are open, sometimes they’re not.  I think even if it’s cold they open them in between like patients. Because I know obviously like the cleanliness levels are maintained so highly it doesn’t bother me, I prefer to be warm! I get cold really easily.",
				"cite" : "Abbi, Patient",
				"colour" : "orange",
				"position" : "left middle",
			},{
				"quote" : "I mean the windows would be open if it was hot, but there’s not that urge to get some air in here. It just feels, you know, the air feels nicer here.",
				"cite" : "Amy, Patient",
				"colour" : "orange",
				"position" : "left bottom",
			}],
		}
	},{
		"name" : "ventilation",
		"position" : [10, 3.5, -9.5],
		"data" : {
			"url" : "images/site2/",
			"title" : "Ventilation",
			"position": "right bottom",
			"quotes" : [{
				"quote" : "there is an air conditioning unit. It’s rubbish! In the summer it’s too hot and in the winter it’s too cold...there’s a kind of a vent, I don’t think it does much.",
				"cite" : "Anthony, Consultant",
				"colour" : "green",
				"position" : "right middle",
			},{
				"quote" : "I think in outpatient clinic...if somebody has been in the room and I go in to wipe the room down before someone else is put in it, I would always open a window as well. In an ideal world we’d be leaving maybe half an hour between patients, but in reality we can’t do that, so we do the best we can. We need more rooms or more clinics",
				"cite" : "Irene, Physiotherapist",
				"colour" : "red",
				"position" : "left bottom",
			}],
		}
	},{
		"name" : "source",
		"position" : [5.75, 3.5, 4],
		"data" : {
			"url" : "images/site2/",
			"title" : "Source Rooms",
			"position": "right middle",
			"quotes" : [{
				"quote" : "I’m more segregated than most because of the MRSA, but that’s fine, like I’m OK with it, because it’s keeping other people safe, not just me. I have to be one of the last ones in",
				"cite" : "Abbi, Patient",
				"colour" : "orange",
				"position" : "left bottom",
			},{
				"quote" : "patients are cohort segregated but then within the clinic if patients have got other microorganisms (MRSA, pandoraea, mycobacterium abscessus) we have some rooms allocated for source isolation, they’re put in those and they’re not used again until the next day. These two are our source isolation rooms, because they are geographically separate.",
				"cite" : "Irene, Physiotherapist",
				"colour" : "red",
				"position" : "center top",
			}],
		}
	},{
		"name" : "toilets",
		"position" : [-10.75, 5, -6],
		"data" : {
			"url" : "images/site2/",
			"title" : "Toilets",
			"position": "left bottom",
			"quotes" : [{
				"quote" : "...we’ve only got two toilets, which is a disaster, because you have segregation, you have four people go to the toilet then that breaks it. You could have toilets in each room but you have nobody cleaning the toilets it would be twice as bad",
				"cite" : "Nathan, Consultant",
				"colour" : "green",
				"position" : "left top",
			},{
				"quote" : "the toilets are an issue because we’ve had plumbing problems, so a lot of the toilets have been out of order. In our clinic area we’ve got two toilets.  And of course you never know when somebody’s going to need to use the facilities. So equally we can’t control who uses it and when.  And within each clinic, which is cohort segregated, there will be patients who are further segregated…there’s every chance that somebody that we’d wanted to keep separate has gone and used the toilet, and then somebody might go in after them.",
				"cite" : "Irene, Physiotherapist",
				"colour" : "red",
				"position" : "center middle",
			},{
				"quote" : "We only have two toilets and monitoring who goes in and out, that’s really hard.  If we do see someone go in it that ‘grows’ something (e.g. NTM, MRSA) then I would put a sign on the door saying ‘do not use’, and then direct a patient to go to another toilet.",
				"cite" : "Mary, Healthcare Assistant",
				"colour" : "pink",
				"position" : "right bottom",
			}],
		}
	},{
		"name" : "xray",
		"position" : [-7, 3.5, 10],
		"data" : {
			"url" : "images/site2/xray.jpg",
			"title" : "X-Ray",
			"position": "left bottom",
			"quotes" : [{
				"quote" : "if a patient’s going to need an X-ray or an ultrasound, we call through first to make sure that no patients are together. We’ve got a very well-established radiology department there, in fact one of them was married to a CF patient, so they know about segregation and they’ll keep things nicely in order.",
				"cite" : "Luke, Consultant",
				"colour" : "green",
				"position" : "left top",
			},{
				"quote" : "everybody knows the CF patients here because we’ve been here for years.  The people in different departments seem to know who we are…the radiologists seem to remember you, even if they haven’t seen you for a year, it’s just feels like an integrated service.  And it does come back to that idea of understanding as well.",
				"cite" : "Amy, Patient",
				"colour" : "orange",
				"position" : "center middle",
			},{
				"quote" : "X-ray is a fairly small waiting area...we get to skip the waiting lines a bit, to ensure that we’re not hanging around...there’s the changing rooms and things like that that are small spaces…there is always that thing, has someone coughed and touched the door handle.  Again, my own hand sanitiser usually comes out!",
				"cite" : "Abbi, Patient",
				"colour" : "orange",
				"position" : "right bottom",
			}],
		}
	}]
};