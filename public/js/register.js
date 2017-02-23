/**
 * Created by Liam on 2/22/2017.
 */
'use strict';
var username = "test";
var password = "password";
$(document).ready(function() {
    initPage();
});

function initPage() {
    $("#register").click(createUser);
}

function createUser(e) {
    e.preventDefault();
    var name = $("#inputEmail");
    var pass = $("#inputPassword");

    //console.log(name.val());
    //console.log(pass.val());

    $.post("/register",
        {
            "name": "",
            "email": name.val(),
            "password": pass.val()
        }, madeUser);

}

function madeUser(data) {
    //console.log(data);
    if(data) {
        var newDoc = document.open("text/html", "replace");
        newDoc.write(data);
        newDoc.close();
    } else {
        window.location.href = "home";
    }
}
