"use strict"

const jobTitles = [
"Software Developer",
"Web Developer",
"Software Engineer",
"JavaScript Developer",
"English Teacher"
];
const jobTitlesNode = document.querySelector(".job-title");

var i = 0;
var code = {
	showJobTitles: function () {
		if ( i <= jobTitles.length) {
			jobTitlesNode.textContent = jobTitles[i]
		}
		i++
		i >= jobTitles.length ? (i = 0) : i;
	}
}

window.setInterval(code.showJobTitles, 3200);