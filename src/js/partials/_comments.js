PAD.Comments = function(commentID) {

	var url = window.location.origin + "/#!demo" + commentID;

	DISQUS.reset({
		reload: true,
		config: function () {  
			this.page.identifier = "demo" + commentID,
			this.page.url = url
		}
	});

};