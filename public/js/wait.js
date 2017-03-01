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
	//console.log(timeout);
	timeout = timeout-1;
	$("#time").html("<span id='time'>" + timeout + "</span>");
	$.post('/checkStatus', {
		"id": localStorage.getItem("currentUser")
		},evaluate);
}

function evaluate(data) {
	if(data == "none") {
		console.log("No driver found yet");
    } else {
        window.location.href = "movenow-rider-accepted";
    }
}