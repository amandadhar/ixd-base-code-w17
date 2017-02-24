$(document).ready(function() {
	initializePage();
});

var timeout = 30;

function initializePage() {
	timeout = 30;
	var decrement = setInterval(decrementInterval, 1000);
	var timer = setTimeout(back, 31000);
}

function back(){
	window.location.href = "movenow-rider";
}

function decrementInterval() {
	console.log(timeout);
	timeout = timeout-1;
	$("#time").html("<span id='time'>" + timeout + "</span>");
}