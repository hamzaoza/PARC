import { Options } from "./../partials/_pad"

export const Global = {
	"geometry" : [
		{
			"name": "WorldFloor",
			"geometry": new THREE.PlaneBufferGeometry(256, 256, 1, 1),
			"position" : [0, 0, 0],
			"rotation" : [-90, 0, 0]
		}
	],
	"sceneLights": [
		{
			"type": "Ambient",
			"intensity" : 0.5
		},
		{
			"type": "Hemisphere",
			"sky": Options.skyColor,
			"ground" : Options.bgColor,
			"intensity" : 0.5
		},
		{
			"type": "Point",
			"color": 0xdf7599,
			"position": [1.9, 7.5, -5],
			"shadow" : true,
			"intensity" : 0.2
		},
		{
			"type": "Point",
			"color": 0xb2e8f7,
			"position": [1.9, 20, 5.1],
			"shadow" : true,
			"intensity" : 0.3
		},
		{
			"type": "Point",
			"color": 0xdf7599,
			"position": [1.9, 7.5, 20],
			"shadow" : true,
			"intensity" : 0.2
		},
		{
			"type": "Point",
			"color": 0xdf7599,
			"position": [1.9, 7.5, -15],
			"shadow" : true,
			"intensity" : 0.2
		}
	]
};