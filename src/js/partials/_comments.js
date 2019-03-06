PAD.Comments = function(commentID) {

	// var thread = document.getElementById("disqus_thread");

	// function loadDisqus(){

		var url = window.location.origin + "/#!" + commentID;

		DISQUS.reset({
			reload: true,
			config: function () {  
				this.page.identifier = commentID,
				this.page.url = url
			}
		});
	// };

	// if (thread) {
	// 	loadDisqus();
	// } else {

	// }

	

};