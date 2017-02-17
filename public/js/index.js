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
    $("#moveLater").click(moveLater);
}

function toggleRiderDriver(e) {
    //e.preventDefault();

    rider = !rider;
    if(rider === true) {
        console.log("RIDER MODE");
    } else if(rider === false) {
        console.log("DRIVER MODE");
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

function moveLater(e) {
    e.preventDefault();

    if(rider === true) {
        window.location.href = "calendar";
    } else if(rider === false) {
        window.location.href = "calendar";
    }
}