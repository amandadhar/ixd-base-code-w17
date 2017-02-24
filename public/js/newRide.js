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

    var name = $("#name").text();
    var loc = $("#location").val();
    var dest = $("#destination").val();
    if(name !="" && loc!="" && dest!=""){
        console.log("before post");
      $.post("/movenow-driver",
        {
            "name": name,
            "start": loc,
            "end": dest
            //"distance": (Math.round(Math.random() * 20)) / 10,
            //"pic": "http://lorempixel.com/400/400/people"
        },
            addedRide);
    } else {
        console.log("something's wrong");
        console.log(name);
        console.log(loc);
        console.log(dest);
    }

}

function addedRide(data) {
    window.location.href = "movenow-rider-submitted";
}