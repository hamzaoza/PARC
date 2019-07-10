const form = document.getElementById("contact-form");
const message = document.getElementsByClassName("cf-response")[0];

function postAjax(url, data, success) {

	let httpRequest = new XMLHttpRequest();

	httpRequest.open('POST', url);
	httpRequest.setRequestHeader('Accept', 'application/json');
	httpRequest.send(data);
	httpRequest.onreadystatechange = function(){

	if (this.readyState == 4)
		success(JSON.parse(this.response));

	}

}

form.addEventListener("submit", function(event){

	event.preventDefault();

	const href = this.getAttribute("action");
	const data = new FormData(this);

	postAjax(href, data, function(response){
		message.innerHTML = `<p class="margin-bottom rounded-small fadeIn ${response.status}">${response.message}</p>`;
	});

});