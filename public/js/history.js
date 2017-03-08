/**
 * Created by Liam on 3/7/2017.
 */
'use strict';

$(document).ready(function() {
    $.post("movenow-query", {
        "_id": localStorage.getItem("currentUser")
    }, renderHistory);
});


function renderHistory(data) {
    var list = $("#histList");
    var hist = data.history;
    for(var i = 0; i < hist.length; i++) {
        list.append("<div class ='container entry' style = 'text-align: left; left: 50px; top: 30px;'>" +
            " <p>Date of Ride: " + hist[i].date + "</p> <p>From: " + hist[i].start + "</p> <p>To: " + hist[i].end + "</p> " +
            "</div>");
    }
}