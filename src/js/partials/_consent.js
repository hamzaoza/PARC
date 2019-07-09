import { events } from "./_events";
import { Cookies } from "./_cookie";
import { gtag } from "./_google";

const cookieBTN = document.getElementById("cookie");
const consentDIV = document.getElementById("consent");
const cookies = new Cookies();
let consent = cookies.get("consent") ? cookies.get("consent") : false;

cookieBTN.addEventListener("click", function(event) {

	event.preventDefault();

	if (consent) {
		cookies.delete("consent")
		consent = false;
		updateConsent();
	} else {
		cookies.set("consent", true, 365);
		consent = true;
		updateConsent();
	} 

});

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