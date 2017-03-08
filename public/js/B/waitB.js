/**
 * Created by Liam on 3/8/2017.
 */
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
 	window.location.href = "/designB";
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
