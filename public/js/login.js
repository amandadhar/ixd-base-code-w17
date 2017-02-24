/**
 * Created by Liam on 2/16/2017.
 */
'use strict';
var username = "test";
var password = "password";
$(document).ready(function() {
    initPage();
});

function initPage() {
    ensureLogout();
    checkLogged();
    $("#login").click(loginUser);
}

function loginUser(e) {
    e.preventDefault();
    var email = $("#inputEmail");
    var pass = $("#inputPassword");

    //console.log(email.val());
    //console.log(pass.val());

    $.post("/",
        {
            "email": email.val(),
            "password": pass.val()
        }, loggedIn);
}

function loggedIn(data) {
    if(data == "bad") {
        $("#warning").addClass("warningShow");
        $("#warning").removeClass("warningHidden");
    } else {
        if($("#remember").is(':checked')) {
            localStorage.setItem("email", $("#inputEmail").val());
        } else {
            localStorage.removeItem("email");
        }
        localStorage.setItem("currentUser", data);
        window.location.href = "home";
    }
}

function checkLogged() {
    if(localStorage.getItem("email") != null) {
        $("#inputEmail").val(localStorage.getItem("email"));
        $("#remember").prop('checked', true);
    }
}

//make sure that you don't have more than 1 user logged in at any time
function ensureLogout() {
    if(localStorage.getItem("currentUser") != null) {
        localStorage.removeItem("currentUser");
    }
}