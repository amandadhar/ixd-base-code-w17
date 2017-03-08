/**
 * Created by Liam on 2/16/2017.
 */
'use strict';

var name = "";

$(document).ready(function() {
    $.post("movenow-query", {
        "_id": localStorage.getItem("currentUser")
    }, renderName);
    initPage();
});

function initPage() {
    $("#submitBtn").click(addRide);
}

function renderName(data) {
    name = data.name;
}

function addRide(e) {
    e.preventDefault();


    var loc = $("#location").val();
    var dest = $("#destination").val();

    var vehicle = $("#vehicle").text();
    var bigBox = ($("#bigBox").text() == '0' ? "" : $("#bigBox").text());
    var smallBox = ($("#smallBox").text() == '0' ? "" : $("#smallBox").text());
    var tape = ($("#tape").text() == '0' ? "" : $("#tape").text());
    var twine = ($("#twine").text() == '0' ? "" : $("#twine").text());
    var wrap = ($("#bubbleWrap").text() == '0' ? "" : $("#bubbleWrap").text());
    var tarp = ($("#tarp").text() == '0' ? "" : $("#tarp").text());

    if(name !="" && loc!="" && dest!=""){
        console.log("before post");
      $.post("/movenow-driver",
        {
            "name": name,
            "start": loc,
            "end": dest,
            "options": {
                "bigBox": bigBox,
                "smallBox": smallBox,
                "tape": tape,
                "twine": twine,
                "bubblewrap": wrap,
                "tarp": tarp,
                "vehicle": vehicle
            }
        }, addedRide);
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