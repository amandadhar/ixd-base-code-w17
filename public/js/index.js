/**
 * Created by Liam on 2/16/2017.
 */
'use strict';
//Global var, true if in rider mode, false if in driver mode
var rider = true;

$(document).ready(function() {
    initPage();
    //formatAMPM();
});

function initPage() {
    $("#slider").click(toggleRiderDriver);
    $("#moveNow").click(moveNow);
}

function toggleRiderDriver(e) {
    //e.preventDefault();
    //prevent default not needed as slider animation won't play otherwise

    rider = !rider;
    if(rider === true) {
        console.log("RIDER MODE");
        $("#moveNow").html("<b>Make A Ride Request</b>");
    } else if(rider === false) {
        console.log("DRIVER MODE");
        $("#moveNow").html("<b>View Potential Pickups</b>");
    }
}

function moveNow(e) {
    e.preventDefault();

    if(rider === true) {
        window.location.href = "vehicle";
    } else if(rider === false) {
        window.location.href = "movenow-driver";
    }
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
