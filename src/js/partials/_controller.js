import "./_poly"; // quiet
import { events } from "./_events";
import { canvas } from "./_canvas"
import { Clinics } from "./_clinics"

const change = document.getElementById("change");
const switcher = document.getElementsByClassName("switcher")[0];
const clinics = document.querySelectorAll(".controls button");
const stage = document.getElementsByClassName("stage")[0];
const timeline = document.getElementById("timeline");
const sites = document.getElementById("sites");
const nav = document.getElementsByTagName("nav")[0];
const navLinks = document.querySelectorAll("nav a");
const pages = document.querySelectorAll(".page");
const main = document.getElementsByTagName("main")[0];
const mobileBTN = document.getElementById("mobile-nav");
const cta = document.getElementById("cta");
const header = document.getElementsByTagName("header")[0];
const counter = document.getElementsByClassName("hotspots")[0];
const slide = document.getElementsByClassName("slide")[0];
const tag = document.getElementsByClassName("site-desc")[0];
const close = document.getElementById("close");
const cookieBTN = document.getElementById("cookie");
const consentDIV = document.getElementById("consent");
const scene = canvas.scene;
const isMobile = screen.width < 480 ? true : false;

let consent = getCookie("consent") ? true : false;
let active;

// function whichTransitionEvent(){
	
// 	var t, el = document.createElement("fakeelement");
// 	var transitions = {
// 		"transition"      : "transitionend",
// 		"OTransition"     : "oTransitionEnd",
// 		"MozTransition"   : "transitionend",
// 		"WebkitTransition": "webkitTransitionEnd"
// 	}

// 	for (t in transitions){
// 		if (el.style[t] !== undefined)
// 			return transitions[t];
// 	}

// }
// var transitionEvent = whichTransitionEvent();

change.addEventListener("click", function(event){
	toggleSwitch();
	event.preventDefault();
});

change.addEventListener("touchend", function(event){
	toggleSwitch();
	event.preventDefault();
});

clinics.forEach(function(clinic) {

	clinic.addEventListener("click", switchModel);
	clinic.addEventListener("touchend", switchModel);

	clinic.addEventListener("mouseover", function(event){
		event.preventDefault();
		tag.innerHTML = this.dataset.description;
	});

});

function switchModel(event) {

	event.preventDefault();

	if (this.id != "present") {

		var site = Clinics[this.dataset.site];
		var current = scene.getObjectByName(active);

		if (current)
			scene.remove(current);
		
		if (site)
			scene.add(site);

		active = this.dataset.site;

		toggleSwitch();
		
		timeline.classList.add("active");
		sites.classList.remove("active");

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
	change.innerText = change.innerText == 'Change Model' ? 'Close' : 'Change Model';
}

navLinks.forEach(function(link){
	link.addEventListener("click", function(event){
		event.preventDefault();
		showPage(this);
	});
});

function pipEnter(small) {
	
	main.classList.add("pip");
	counter.classList.add("hidden");
	
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
	// slide.classList.remove("dark");
	stage.removeEventListener("click", onPip);
	stage.removeEventListener("touchstart", onPip);
}

function showPage(self) {
	clearPages();
	document.getElementById(self.dataset.target).classList.add("active");
	counter.classList.add("hidden");
	pipEnter(true);
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
	showPage(this);
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
	// showPage(this);

	pipExit();
	clearPages();
	if (!switcher.classList.contains("active"))
		change.click();

});


close.addEventListener("click", function(event) {
	event.preventDefault();
	hideMobileNav();
	clearPages();
	pipExit();
	toggleClose();
});

// stage.addEventListener("transitionEvent", function() {
// 	// events.emit("pip");
// })

function getCookie(name) {
	var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
	return v ? v[2] : null;
}

function setCookie(name, value, days) {
	var d = new Date;
	d.setTime(d.getTime() + 24*60*60*1000*days);
	document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

function deleteCookie(name) { setCookie(name, '', -1); }

function updateConsent() {

	if (consent) {
		consentDIV.innerHTML = "Opted In";
		cookieBTN.innerHTML = "Opt Out";
	} else {
		consentDIV.innerHTML = "Opted Out";
		cookieBTN.innerHTML = "Opt In";
	}
	
}

updateConsent();

cookieBTN.addEventListener("click", function(event) {

	event.preventDefault();

	if (consent) {
		deleteCookie("consent");
		consent = false;
		updateConsent();
	} else {
		setCookie("consent", true, 365);
		consent = true;
		updateConsent();
	}

});

if (Clinics.Global)
	scene.add(Clinics.Global);