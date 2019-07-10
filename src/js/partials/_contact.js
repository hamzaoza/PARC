const form = document.getElementById("contact-form");

function postAjax(url, data, success) {
	var params = typeof data == 'string' ? data : Object.keys(data).map(
			function(k){ return encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) }
		).join('&');

	var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
	xhr.open('POST', url);
	xhr.onreadystatechange = function() {
		if (xhr.readyState>3 && xhr.status==200) { success(xhr.responseText); }
	};
	xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(params);
	return xhr;
}

form.addEventListener("submit", function(event){

	event.preventDefault();

	const href = this.getAttribute("action");
	const data = new FormData(this);

	console.log(data);

	postAjax(href, data, function(response){

		console.log(response);

		if (response.status == "success"){
			console.log("We received your submission, thank you!");
		} else {
			console.log("An error occured: " + response.message);
		}

	});

});

// postAjax('http://foo.bar/', { p1: 1, p2: 'Hello World' }, function(data){ console.log(data); });