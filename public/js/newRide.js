/**
 * Created by Liam on 2/16/2017.
 */
'use strict';

$(document).ready(function() {
    initPage();
});

function initPage() {
    $("#submitBtn").click(addRide);
}

function addRide(e) {
    e.preventDefault();

    $.post("/movenow-driver",
        {
            "name": $("#name").val(),
            "start": $("#location").val(),
            "end": $("#destination").val(),
            "distance": (Math.round(Math.random() * 20)) / 10,
            "pic": "http://lorempixel.com/400/400/people"
        }, addedRide);
}

function addedRide(data) {
    window.location.href = "movenow-rider-submitted";
    //$('.alert').show();
    //alert.alert();
}