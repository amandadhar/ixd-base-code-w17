/**
 * Created by Liam on 3/7/2017.
 */
'use strict';

var name = "";

$(document).ready(function() {
    $.post("movenow-query", {
        "_id": localStorage.getItem("currentUser")
    }, renderName);
    initPage();
});

function renderName(data) {
    name = data.name;
}

function initPage() {
    $("#submitBtn").click(addRide);
}

function addRide(e) {
    e.preventDefault();

    var loc = $("#location").val();
    var dest = $("#destination").val();
    var bigBox = $("input:radio[name=bigBox]").val();
    var smallBox = $("input:radio[name=smallBox]").val();
    var tape = $("input:radio[name=tape]").val();
    var twine = $("input:radio[name=twine]").val();
    var wrap = $("input:radio[name=bubbleWrap]").val();
    var tarp = $("input:radio[name=tarp]").val();
    var vehicle = $("input:radio[name=Vehicle]").val();
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
    localStorage.setItem("currentReq", data);
    window.location.href = "movenow-rider-submitted";
}