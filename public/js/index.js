/**
 * Created by Liam on 2/16/2017.
 */
'use strict';
//Global var, true if in rider mode, false if in driver mode
var rider = true;

$(document).ready(function() {
    initPage();
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
        window.location.href = "movenow-rider";
    } else if(rider === false) {
        window.location.href = "movenow-driver";
    }
}
