// /////////////////////////////////////////////////////////////////////////////
// 
// A virtual exhibition to raise awareness about the interconnectedness of 
// building design and infection, and to create a space for dialogue between 
// designers, architects, clinicians, patients, healthcare managers etc.
//
// /////////////////////////////////////////////////////////////////////////////
// 
// Authored by Hamza Oza, London, United Kingdom.
// Copyright (C) 2019 The Helen Hamlyn Centre for Design and University of York.
// last update: 11 Mar 2019 by Hamza Oza
// 
// /////////////////////////////////////////////////////////////////////////////

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// Use dist folder to display webpage.
app.use(express.static("dist"));

// Listen on port 3000 for webserver.
app.listen(port, function(){
	console.log("PARC server running");
});