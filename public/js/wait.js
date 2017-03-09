$(document).ready(function() {
	initializePage();
});

var timeout = 30;

function initializePage() {
	timeout = 30;
    $("#cancel").click(cancelRequest);
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
		"rideId": localStorage.getItem("currentReq"),
		"userId": localStorage.getItem("currentUser")
		},evaluate);
}

function evaluate(data) {
	if(data == "none") {
		console.log("No driver found yet");
    } else {
        window.location.href = "movenow-rider-accepted";
    }
}

function cancelRequest(e) {
    e.preventDefault();

    $.post('/movenow-delete', {
        "id": localStorage.getItem("currentReq")
    }, deleteRide);
}

function deleteRide(data) {
    localStorage.removeItem("currentReq");
    window.location.href = "vehicle";
}
function formatAMPM() {
    var date = new Date();
    var hours = date.getHours();
    var days = date.getDay(); 
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = date + ' ' + hours + ':' + minutes + ' ' + ampm;
    return strTime;
}