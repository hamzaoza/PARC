import { Cookies } from "./_cookie";
import { events } from "./_events";

const optIn = document.getElementById("optIn");
const optOut = document.getElementById("optOut");
const cookies = new Cookies();
const header = document.getElementsByTagName("header")[0];

window.analytics = cookies.get("analytics") ? cookies.get("analytics") : "unset";

optIn.addEventListener("click", function(event){
	event.preventDefault();
	cookies.set("analytics", "true", 365);
	window.analytics = "true";
	header.click();
	events.emit("analytics");
});

optOut.addEventListener("click", function(event){
	event.preventDefault();
	cookies.delete("analytics");
	window.analytics = "false";
	header.click();
	events.emit("analytics");
});