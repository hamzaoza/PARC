import "./_poly"; // quiet
import { events } from "./_events";
import { canvas } from "./_canvas"
import { Clinics } from "./_clinics"
import { gtag } from "./_google";
import { router } from "./_routing";
import { Texture } from "./_floor";

const switchChange = document.getElementById("switch-change");
const switchClose = document.getElementById("switch-close");

const switcher = document.getElementsByClassName("switcher")[0];
const clinics = document.querySelectorAll(".controls button");
const stage = document.getElementsByClassName("stage")[0];
const timeline = document.getElementById("timeline");
const sites = document.getElementById("sites");
const nav = document.getElementsByTagName("nav")[0];
const pages = document.querySelectorAll(".page");
const main = document.getElementsByTagName("main")[0];
const mobileBTN = document.getElementById("mobile-nav");
const cta = document.getElementById("cta");
const header = document.getElementsByTagName("header")[0];
const counter = document.getElementsByClassName("hotspots")[0];
const title = document.getElementsByClassName("clinic-title")[0];
const slide = document.getElementsByClassName("slide")[0];
const tag = document.getElementsByClassName("site-desc")[0];
const close = document.getElementById("close");
const scene = canvas.scene;
const anchors = document.getElementsByTagName("a");
const transitionEvent = whichTransitionEvent();
const frame = document.querySelector("#participate iframe");

let isMobile = window.isMobile = window.innerWidth < 480 ? true : false;
let active;

router.on(function() {

	if (window.analytics === "unset") {
		router.navigate("/consent");
	} else {
		showSwitcher()
	}

});

router.notFound(function() {
	showPage("404");
});

router.on("/:page", function(params) {
	
	const page = params.page.toLowerCase();
	const pages = (function() {

		const sections = [...document.getElementsByClassName("page")];
		let pages = [];

		sections.forEach(function(section){
			pages.push(section.id.toLowerCase());
		});

		return pages;

	})();
	
	if (pages.includes(page)) {
		showPage(page);
	} else {
		showPage("404");
	}

});

router.on("/clinic/:clinic", function(params) {
	switchModel(upperCase(params.clinic));
});

router.resolve();

function whichTransitionEvent(){
	
	var t, el = document.createElement("fakeelement");
	const transitions = {
		"transition"      : "transitionend",
		"OTransition"     : "oTransitionEnd",
		"MozTransition"   : "transitionend",
		"WebkitTransition": "webkitTransitionEnd"
	}

	for (t in transitions){
		if (el.style[t] !== undefined)
			return transitions[t];
	}

}

for (let anchor of anchors) {
	const exp = new RegExp('/' + window.location.host + '/');
	if (!exp.test(anchor.href))
		anchor.setAttribute("target", "_blank");
}

clinics.forEach(function(clinic) {

	function routeClinic(event) {
		event.preventDefault();
		router.navigate("/clinic/" + this.dataset.site);
	}

	clinic.addEventListener("click", routeClinic);
	clinic.addEventListener("touchend", routeClinic);
	
	clinic.addEventListener("mouseover", function(event){
		event.preventDefault();
		tag.innerHTML = this.dataset.description;
	});

});

function switchModel(clinic) {

	if (clinic != "Present") {

		var site = Clinics[clinic];
		var current = scene.getObjectByName(active);

		if (current)
			scene.remove(current);
		
		if (site)
			scene.add(site);

		active = clinic;

		hideSwitcher();

		if (active)
			switchClose.removeAttribute("disabled");
		
		timeline.classList.add("active");
		sites.classList.remove("active");
		title.innerHTML = "Model: " + clinic.replace("-", " ");

		setTimeout(function() {
			if (site.userData.floor)
				Texture(site.userData.floor);
		}, 50);

		gtag.page();

	} else {
		timeline.classList.remove("active");
		sites.classList.add("active");
	}
}

switchChange.addEventListener("click", onSwitchChange);
switchChange.addEventListener("touchstart", onSwitchChange);

function onSwitchChange(event) {
	event.preventDefault();
	router.navigate("/");
}

switchClose.addEventListener("click", onSwitchClose);
switchClose.addEventListener("touchstart", onSwitchClose);

function onSwitchClose(event) {
	event.preventDefault();
	hideSwitcher();
	router.navigate("/clinic/" + active.toLowerCase());
}

function showSwitcher() {

	pipExit();
	clearPages();

	switcher.classList.add("active");
	counter.classList.add("hidden");
	title.classList.add("hidden");
	switchChange.classList.add("hidden");
	switchClose.classList.remove("hidden");

	gtag.page();
}

function hideSwitcher() {
	switcher.classList.remove("active");
	counter.classList.remove("hidden");
	title.classList.remove("hidden");
	switchChange.classList.remove("hidden");
	switchClose.classList.add("hidden");
}

function pipEnter(small) {
	
	main.classList.add("pip");
	counter.classList.add("hidden");
	title.classList.add("hidden");
	
	if (small == true)
		stage.classList.add("small");

	stage.addEventListener(transitionEvent, transitionPip);

}

function transitionPip(event) {
	event.preventDefault();
	stage.addEventListener("click", onPip);
	stage.addEventListener("touchstart", onPip);
	stage.removeEventListener(transitionEvent, transitionPip);
}

function onPip(event) {
	event.preventDefault();
	pipExit();
	clearPages();

	if (switcher.classList.contains("active")) {
		router.navigate("/");
	} else {
		router.navigate("/clinic/" + active.toLowerCase());
	}

}

function pipExit() {

	main.classList.remove("pip");
	stage.classList.remove("small");
	counter.classList.remove("hidden");
	title.classList.remove("hidden");
	slide.classList.remove("dark");
	stage.removeEventListener("click", onPip);
	stage.removeEventListener("touchstart", onPip);

}

function showPage(page) {
	clearPages();
	document.getElementById(page).classList.add("active");
	counter.classList.add("hidden");
	title.classList.add("hidden");
	pipEnter(true);
	gtag.page();
}

function clearPages() {
	pages.forEach(function(page){
		page.classList.remove("active");
	});
	slide.classList.remove("active");
}

function changeSlide(){

	stage.classList.remove("small");
	slide.classList.add("active");

	if (isMobile)
		hideMobileNav();
}

function showSlide() {
	changeSlide();
	pipEnter(false);
}

events.on("changeSlide", showSlide);

function showClose() {
	close.classList.remove("hidden");
	mobileBTN.classList.add("hidden");
}

function toggleClose() {
	close.classList.toggle("hidden");
	mobileBTN.classList.toggle("hidden");
}

function hideMobileNav() {
	nav.classList.remove("open");
	cta.classList.remove("shifted");
	showClose();
}

function showMobileNav() {
	nav.classList.add("open");
	cta.classList.add("shifted");
}

cta.addEventListener("click", function(event){
	event.preventDefault();
	router.navigate("/" + this.dataset.target);
	hideMobileNav();
	showClose();
});

mobileBTN.addEventListener("click", function(event){
	event.preventDefault();
	showMobileNav();
	toggleClose();
});

header.addEventListener("click", onHeader);
header.addEventListener("touchstart", onHeader);

function onHeader(event) {
	event.preventDefault();
	router.navigate("/");
}

close.addEventListener("click", function(event) {
	event.preventDefault();
	hideMobileNav();
	clearPages();
	pipExit();
	toggleClose();

	if (switcher.classList.contains("active")) {
		router.navigate("/");
	} else {
		router.navigate("/clinic/" + active.toLowerCase());
	}

});

stage.addEventListener(transitionEvent, function() {
	events.emit("pip");
});

function upperCase(str) {
	return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

if (Clinics.Global)
	scene.add(Clinics.Global);

function updateMobile() {

	const body = document.getElementsByTagName("body")[0];
	const wrapper = document.getElementsByClassName("wrapper")[0];

	if (isMobile) {
		body.style.minHeight = window.innerHeight + "px";
		wrapper.style.minHeight = window.innerHeight + "px";
	} else {
		body.style.minHeight = "";
		wrapper.style.minHeight = "";
	}

}

window.addEventListener("resize", function(event) {
	event.preventDefault();
	isMobile = screen.width < 480 ? true : false;
	updateMobile();
});

updateMobile();

window.onload = function(){
	frame.setAttribute("src", frame.dataset.src);
}