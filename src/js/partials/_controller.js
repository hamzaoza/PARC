import "./_poly"; // quiet
// import { canvas } from "./_canvas"
// import { Clinics } from "./_clinics"


// (function(){

// 	var buttons = document.querySelectorAll(".clinic");
// 	var scene = canvas.scene;
// 	var active;

// 	if (Clinics.Global)
// 		scene.add(Clinics.Global);

// 	buttons.forEach(function(button){

// 		button.addEventListener("click", function(event){

// 			event.preventDefault();

// 			var name = button.dataset.clinic;
// 			var clinic = Clinics[name];
// 			var current = scene.getObjectByName(active);

// 			if (current === clinic)
// 				return;

// 			if (current)
// 				scene.remove(current);
			
// 			if (clinic)
// 				scene.add(clinic);

// 			active = name;

// 		});

// 	});

// 	buttons[1].click();

// 	var gFormBTN = document.getElementById("gf-feedback");

// 	gFormBTN.addEventListener("click", function(event){

// 		var gForm = document.getElementById("surveyStage");
// 		var close = gForm.querySelector(".close");

// 		gForm.classList.add("open");

// 		close.addEventListener("click", function(event){

// 			gForm.classList.remove("open");
// 			canvas.renderer.domElement.click();
// 			event.preventDefault();
			
// 		});

// 		event.preventDefault();

// 	});

// 	// Fullscreen toggle.
// 	function toggleFullScreen() {

// 		if (!document.fullscreenElement) {
// 			document.documentElement.requestFullscreen();
// 		} else {
// 			if (document.exitFullscreen)
// 				document.exitFullscreen(); 
// 		}

// 	}

// 	var full = document.getElementById("fullscreen");
// 	full.addEventListener("click", toggleFullScreen);

// 	// Add Disqus
// 	var disqus_config = function () {
// 		this.page.url = window.location.origin + "/#!";
// 		this.page.identifier = "prodhome";
// 	};
	
// 	var s = document.createElement("script");
	
// 	s.src = "https://pad-1.disqus.com/embed.js";
// 	s.setAttribute("data-timestamp", +new Date());

// 	document.body.appendChild(s);

// })();

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
const dummy = document.getElementById("dummy");
const slide = document.getElementsByClassName("slide")[0];
const tag = document.getElementsByClassName("site-desc")[0];
const close = document.getElementById("close");
const cookieBTN = document.getElementById("cookie");
const consentDIV = document.getElementById("consent");

let consent = getCookie("consent") ? true : false;
const isMobile = screen.width < 480 ? true : false;

change.addEventListener("click", function(event){
	toggleSwitch();
	event.preventDefault();
});

clinics.forEach(function(clinic) {

	clinic.addEventListener("click", function(event){

		event.preventDefault();

		if (this.id != "present") {

			// Change model

			toggleSwitch();
			
			timeline.classList.add("active");
			sites.classList.remove("active");

		} else {
			timeline.classList.remove("active");
			sites.classList.add("active");
		}

	});

	clinic.addEventListener("mouseover", function(event){
		event.preventDefault();
		tag.innerHTML = this.dataset.description;
	});

});


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

	stage.addEventListener("click", function(event) {
		event.preventDefault();
		pipExit();
		clearPages();
	})

}

function pipExit() {
	main.classList.remove("pip");
	stage.classList.remove("small");
	counter.classList.remove("hidden");
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

	// make changes to the content

	stage.classList.remove("small");
	slide.classList.add("active");

	if (isMobile)
		hideMobileNav();
}

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

dummy.addEventListener("click", function(event){
	event.preventDefault();
	clearPages();
	changeSlide();
	pipEnter(false);
});

close.addEventListener("click", function(event) {

	event.preventDefault();
	hideMobileNav();
	clearPages();
	pipExit();
	toggleClose();

});

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