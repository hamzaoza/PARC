PAD.Comments = function(commentID) {

	var url = window.location.origin + "/#!" + commentID;

	DISQUS.reset({
		reload: true,
		config: function () {  
			this.page.identifier = "prod" + commentID,
			this.page.url = url
		}
	});

};