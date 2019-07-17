import "./_poly"; // quiet
import { events } from "./_events";
import { canvas } from "./_canvas"
import { Clinics } from "./_clinics"
import { gtag } from "./_google";
import { router } from "./_routing";

const change = document.getElementById("change");
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

let isMobile = window.innerWidth < 480 ? true : false;
let active;

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

change.addEventListener("click", function(event){
	toggleSwitch();
	event.preventDefault();
});

change.addEventListener("touchend", function(event){
	toggleSwitch();
	event.preventDefault();
});

clinics.forEach(function(clinic) {

	clinic.addEventListener("click", function(event){
		event.preventDefault();
		router.navigate('/clinic/' + this.dataset.site);
	});

	clinic.addEventListener("touchend", function(event){
		event.preventDefault();
		router.navigate('/clinic/' + this.dataset.site);
	});
	
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

		toggleSwitch();
		
		timeline.classList.add("active");
		sites.classList.remove("active");
		title.innerHTML = "Model: " + clinic.replace("-", " ");

		gtag.page();

	} else {
		timeline.classList.remove("active");
		sites.classList.add("active");
	}
}

function toggleSwitch() {
	switcher.classList.toggle("active");
	change.classList.toggle("theme");
	change.classList.toggle("dark");
	change.classList.toggle("active");
	counter.classList.toggle("hidden");
	title.classList.toggle("hidden");
	change.innerText = change.innerText == 'Change Clinic' ? 'Close' : 'Change Clinic';
}

function pipEnter(small) {
	
	main.classList.add("pip");
	counter.classList.add("hidden");
	title.classList.add("hidden");
	
	if (small == true)
		stage.classList.add("small");

	stage.addEventListener("click", onPip);
	stage.addEventListener("touchstart", onPip);

}

function onPip(event) {
	event.preventDefault();
	pipExit();
	clearPages();
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

header.addEventListener("click", function(event){
	event.preventDefault();
	router.navigate("/");
});

header.addEventListener("touchstart", function(event){
	event.preventDefault();
	router.navigate("/");
});

function showHome() {

	pipExit();
	clearPages();
	if (!switcher.classList.contains("active"))
		change.click();

	gtag.page();

}

close.addEventListener("click", function(event) {
	event.preventDefault();
	hideMobileNav();
	clearPages();
	pipExit();
	toggleClose();
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

router.on(function() {

	if (window.analytics === "unset") {
		router.navigate("/consent");
	} else {
		showHome();
	}

});

router.notFound(function() {
	showPage("404");
});

router.on('/:page', function(params) {
	showPage(params.page);
});

router.on('/clinic/:clinic', function(params) {
	switchModel(upperCase(params.clinic));
});

router.resolve();

window.onload = function(){
	frame.setAttribute("src", frame.dataset.src);
}