export const Site3 = {
	"models" : [
		{
			"name": "floor",
			"path": "assets/models/site3/site3-floor.json",
			"castShadow" : false
		},{
			"name": "layout",
			"path": "assets/models/site3/site3-layout.json"
		}
	],
	"floor" : "assets/textures/site3.mp4",
	"summary" : "A large Cystic Fibrosis clinic with over 300 patients, clinics are held in a busy outpatient department, built during the 1990s. Patients are cohorted according to whether they are infected with a transmissible strain of Pseudomonas aeruginosa, or variations of the Burkholderia cepacia complex (Bcc).",
	"hotspots" : [
		{
			"name" : "checkin",
			"position" : [6.5, 3, 14.34],
			"data" : {
				"url" : "images/site3/checkin.jpg",
				"title" : "Self Checkin",
				"position": "right bottom",
				"quotes" : [{
					"quote" : "I sign in here. At first they didn’t have a hand wash here so I wouldn’t use it… I tried to use the self check in and it’s not working.",
					"cite" : "Isobel, Patient",
					"colour" : "orange",
					"position" : "left middle",
				},{
					"quote" : "Here we have check-in kiosks.  So the patient goes there. Writes their name, and then they go along. The idea is for them not to congregate.",
					"cite" : "Isaac, Consultant",
					"colour" : "green",
					"position" : "left bottom",
				}],
			}
		},{
			"name" : "waiting-cafe",
			"position" : [13.92, 3, 13.74],
			"data" : {
				"url" : "images/site3/cafe-1.jpg",
				"title" : "Waiting (Cafe)",
				"position": "right bottom",
				"theme" : "dark",
				"quotes" : [{
					"quote" : "But before the patients come into these waiting areas, where do they go? They go to the cafe there. And they all sit together. If our coffee shop was closed the day we do clinics it would be great, because no one would congregate there.",
					"cite" : "Isaac, Consultant",
					"colour" : "green",
					"position" : "center middle",
				},{
					"quote" : "I normally sit here … you have got the distance, you know somebody’s not really going to join us …. if you’re over there you’re very close to other people",
					"cite" : "Isobel, Patient",
					"colour" : "orange",
					"position" : "top left",
				},{
					"quote" : "...when they first opened the café you weren’t supposed to sit here unless you were buying something…but then they put a sign up that says we’re allowed to use the seating here because the CF patients complained...",
					"cite" : "Isobel, Patient",
					"colour" : "orange",
					"position" : "bottom left",
				}],
			}
		},{
			"name" : "waiting-bench",
			"position" : [11.48, 3, 2.66],
			"data" : {
				"url" : "images/site3/benches-2.jpg",
				"title" : "Wating (Benches)",
				"position": "left top",
				"quotes" : [{
					"quote" : "We had bench seating so the [non CF patients] didn’t feel as if they had to stand up and wait...Just making it more inclusive of all the patient groups we have coming through.",
					"cite" : "Vernon, Estates",
					"colour" : "grey",
					"position" : "left middle",
				},{
					"quote" : "They have got benches there, no arms, nothing in between. The CF patients are told to stay away from each other, [but] there’s no physical barrier...",
					"cite" : "Isobel, Patient",
					"colour" : "orange",
					"position" : "center bottom",
				}]
			}
		},{
			"name" : "waiting-corner",
			"position" : [9.78, 3, 1.24],
			"data" : {
				"url" : "images/site3/benches-corner.jpg",
				"title": "Waiting (Corner)",
				"position": "right bottom",
				"quotes" : [{
					"quote" : "I would generally avoid other people...I tend to sit just in the far corner.",
					"cite" : "Alex, Patient",
					"colour" : "orange",
					"position" : "right bottom",
				}]
			}
		},{
			"name" : "toilets",
			"position" : [22.38, 6, 3.18],
			"data" : {
				"url" : "images/site3/toilet.jpg",
				"title" : "Toilets",
				"position": "left bottom",
				"quotes" : [{
					"quote" : "...toilets have implications for transfer and cross-infection, because if you’ve got patients going into a confined space with the door shut and no air transfer, then that would for me seem to be a risk...if there is going to be a toilet the patients can use, then I’d prefer it if there was a window that could be opened, and increased airflow...",
					"cite" : "Rob, Consultant",
					"colour" : "green",
					"position" : "center bottom",
				},{
					"quote" : "If patients have deliberately gone into the bathroom to cough and get a sputum sample, that’s where the risk comes from...quite often they don’t like to cough or spit in front of people.",
					"cite" : "Mandy, Physiotherapist",
					"colour" : "red",
					"position" : "right middle",
				}]
			}
		},{
			"name" : "pulmonary",
			"position" : [-0.32, 3, 23.06],
			"data" : {
				"url" : "images/site3/pulmonary.jpg",
				"title" : "Pulmonary Function",
				"position": "left middle",
				"description": "In spirometry patients blow into the machine and will put a new mouthpiece on so that it is completely hygienic for each use. <br /></br />Staff and patients are touching equipment and are likely to touch furniture such as door handles, chairs etc. So the staff squirt hand sanitiser in patients’ hands to rub in.",
				"quotes" : [{
					"quote" : "Pulmonary function probably needs to be much bigger, because we do have issues with the wards coming down during clinic times. As much as we try and organise it to a degree.",
					"cite" : "Elaine, Nurse",
					"colour" : "pink",
					"position" : "center bottom",
				}],
				"credit" : {
					"text" : "Image courtesy of National Heart Lung and Blood Insitute [Public domain]",
					"link" : "https://commons.wikimedia.org/wiki/File:Spirometry_NIH.jpg"
				},
			}
		},{
			"name" : "toilets-disabled",
			"position" : [-8.5, 4, -22.5],
			"data" : {
				"url" : "images/site3/disabled.jpg",
				"theme" : "dark",
				"title" : "Toilets",
				"position": "left bottom",
				"quotes" : [{
					"quote" : "I use that disabled toilet there to do a sputum sample. I can imagine some people don’t bother. But I do struggle sometimes to fetch stuff up, and a lot of people can just do it very easily.",
					"cite" : "Larry, Patient",
					"colour" : "orange",
					"position" : "left middle",
				}]
			}
		},{
			"name" : "movement",
			"position" : [-13.58, 3, 4.42],
			"data" : {
				"title" : "Movement of Patients and Staff ",
				"url" : "images/site3/nurse.jpg",
				"position": "right bottom",
				"description": "Different members of the multi-disciplinary team are based in different clinic rooms, the patient moves in and out of their rooms.",
				"quotes" : [{
					"quote" : "I go into the waiting area, look for the patient, then walk all the way back and make sure they see who they need to see...there’s a lot of backwards and forwards.",
					"cite" : "Elaine, Nurse",
					"colour" : "pink",
					"position" : "center bottom",
				},{
					"quote" : "In an ideal world, for cystic fibrosis, you would have a patient in a room and they wouldn’t move from that room; everyone would go in to them and then they would leave. We don’t have the facilities to have a patient in a room and we all move around.",
					"colour" : "pink",
					"position" : "center middle",
				}]
			}
		},{
			"name" : "windows",
			"position" : [-14.5, 2, 0.5],
			"data" : {
				"title" : "Windows",
				"url" : "images/site3/consultant.jpg",
				"position": "right middle",
				"quotes" : [{
					"quote" : "I haven’t got any windows in my room….sometimes I do worry that affects the airflow, if someone coughs in the room, is that sticking around longer?",
					"cite" : "Rob, Consultant",
					"colour" : "green",
					"position" : "left middle",
				},{
					"quote" : "I’ll open the windows if I’ve been getting people coughing and clearing stuff or have done a nebuliser trial, to try and get the air flow through. But we’ve got that many patients, you don’t have a lot of time before you get someone else in.",
					"cite" : "Mandy, Physiotherapist",
					"colour" : "red",
					"position" : "center bottom",
				}]
			}
		},{
			"name" : "physio",
			"position" : [-5.5, 2, -11.5],
			"data" : {
				"title" : "Physiotherapist",
				"url" : "images/site3/physio.jpg",
				"position": "center middle",
				"quotes" : [{
					"quote" : "The Friday physio room doesn’t have a window...when there’s not a patient in my room I have the door open. But I don’t know whether that’s a good thing because you’re potentially spreading bugs back out!",
					"cite" : "Mandy, Physiotherapist",
					"colour" : "red",
					"position" : "right bottom",
				}]
			}
		},{
			"name" : "waste",
			"position" : [-5.5, 3, -25.5],
			"data" : {
				"title" : "Waste Disposal",
				"url" : "images/site3/waste.jpg",
				"position": "left bottom",
				"quotes" : [{
					"quote" : "I’m collecting sputum samples, and quite often I've got to go looking for a clinical waste bin, they’re not in each room. <br/><br/> So on a Monday I’d have to walk up here to get rid of any infectious stuff before seeing the next person.",
					"cite" : "Mandy, Physiotherapist",
					"colour" : "red",
					"position" : "center middle",
				}]
			}
		},{
			"name" : "corridors",
			"position" : [-2.78, 3, 7.44],
			"data" : {
				"title" : "Corridors",
				"url" : "images/site3/corridors-2.jpg",
				"position": "right middle",
				"quotes" : [{
					"quote" : "I’d say this is a risky area, because it’s quite narrow, and you’ve got people coming from the waiting area…So I feel like this is like a crossover point, a pinch point that feels quite tight and can be congested sometimes.",
					"cite" : "Rob, Consultant",
					"colour" : "green",
					"position" : "left top",
				},{
					"quote" : "I sometimes feel like we’re all on top of each other. And you know, squeezing past, if you’ve got to go up and down, and there’s a nurse here with a trolley, it’s a pain...there just needs to be more room.",
					"cite" : "Elaine, Nurse",
					"colour" : "pink",
					"position" : "left bottom",
				}]
			}
		},{
			"name" : "entrance",
			"position" : [8.42, 5, 32.92],
			"data" : {
				"title" : "Entrance & Exit",
				"url" : "images/site3/entrance.jpg",
				"position": "right middle",
				"quotes" : [{
					"quote" : "...my husband will drop me off, I’ll come in this door and I sit there and wait for him. He has to come with me, because it’s a long way to walk when I’m not feeling well.",
					"cite" : "Isobel, Patient",
					"colour" : "orange",
					"position" : "left middle",
				}]
			}
		},{
			"name" : "monday",
			"position" : [-13.5, 3, 8.5],
			"data" : {
				"title" : "Monday Clinic Area",
				"url" : "images/site3/monday.jpg",
				"position": "left bottom",
				"description": "On different days of the week there are different spaces for different bacterial ‘cohorts’. <br><br> Monday morning – patients without transmissible strain of <em>Pseudomonas aeruginosa</em> (P.aeruginosa)",
			}
		},{
			"name" : "tuesday",
			"position" : [-5.5, 3, -21.5],
			"data" : {
				"title" : "Tuesday Clinic Area",
				"url" : "images/site3/tuesday.jpg",
				"position": "left top",
				"description": "<strong>Morning:</strong> P.aeruginosa (epidemic strain) <br><br> <em>Three hour gap </em> <br><br> <strong>Afternoon:</strong> <em>Burkholderia cepacia complex</em> (BCC) <br> (different variations of BCC on alternating Tuesdays)",
				"mobile" : "The following patients are seen on the Tuesday clinic: <br><br> <strong>Morning:</strong> P.aeruginosa (epidemic strain) <br><br> <em>Three hour gap </em> <br><br> <strong>Afternoon:</strong> <em>Burkholderia cepacia complex</em> (BCC) <br> (different variations of BCC on alternating Tuesdays)",
				"quotes" : [{
					"quote" : "...chairs in the clinic waiting area are separated two metres apart, so patients are not encouraged to mix or talk to any other patients.",
					"cite" : "Andrew, Consultant",
					"colour" : "green",
					"position" : "center bottom",
				},{
					"quote" : "...you’re in closer proximity to CF patients, it’s quite a small area. But it did have that sort of ownership of the CF team.",
					"cite" : "Terry, Patient",
					"colour" : "orange",
					"position" : "right middle",
				}]
			}
		},{
			"name" : "equipment",
			"position" : [-8.5, 3, -25.5],
			"data" : {
				"title" : "Equipment Store",
				"url" : "images/site3/equipment.jpg",
				"position": "top center",
				"quotes" : [{
					"quote" : "First thing I would do is go to the treatment room down there to get the equipment...we make sure those trolleys are stocked up, and then we would come back. But you often do run backwards and forwards because someone might need something that you find isn’t on your trolley.",
					"cite" : "Ellen, Nurse",
					"colour" : "pink",
					"position" : "center bottom",
				}]
			}
		},{
			"name" : "friday",
			"position" : [-2.75, 3, -7],
			"data" : {
				"title" : "Friday Clinic Area",
				"url" : "images/site3/friday.jpg",
				"theme" : "dark",
				"position": "center bottom",
				"quotes" : [{
					"quote" : "On a Friday we have four rooms, we just have this part of the corridor. So we have a doctor in one room, physio, a dietician, and then there’s a diabetic nurse and a general nurse fighting it out for the room space! We hot room.",
					"cite" : "Ellen, Nurse",
					"colour" : "pink",
					"position" : "center bottom",
				}]
			}
		},{
			"name" : "sinks",
			"position" : [-14.5, 3, 12],
			"data" : {
				"title" : "Sinks",
				"url" : "images/site3/sinks.jpg",
				"position": "right middle",
				"quotes" : [{
					"quote" : "There are sinks in every room, if you’re going to do anything clinically, and if you’re going to listen to somebody’s chest, you should wash your hands, if you’re going to touch them at all.",
					"cite" : "Elaine, Nurse",
					"colour" : "pink",
					"position" : "left bottom",
				},{
					"quote" : "Sometimes I feel a bit bad if someone comes in, they touch your hand, and immediately I wash my hands afterwards. I don’t want them to feel they’re dirty, so I try and wash my hands after I’ve seen the patient, before I see the next one...",
					"cite" : "Rob, Consultant",
					"colour" : "green",
					"position" : "left top",
				}]
			}
		},{
			"name" : "alcogel",
			"position" : [-12.5, 3, 10.5],
			"data" : {
				"title" : "Alcogel",
				"url" : "images/site3/alcogel.jpg",
				"position": "left middle",
				"quotes" : [{
					"quote" : "We use hand sanitiser in between every patient, every room has one and they’re positioned along the corridor...as I go into my room I sanitise and I say to the patient ‘would you like to?’ It’s something I do in front of them to give an element of reassurance.",
					"cite" : "Andrew, Consultant",
					"colour" : "green",
					"position" : "center bottom",
				}]
			}
		}
	]
};