'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);
}
/*
$.post("/user/sendMessage",
{
	"email1": "do_not_reply@precisionconference.com",
	"email2": "msb@cs.stanford.edu",
	"email-content": "She should have died hereafter; There would have been a time for such a word..."
},
callbackFunction);
//application takes action based on data
*/