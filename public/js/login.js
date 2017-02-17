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
    checkLogged();
    $("#login").click(loginUser);
}

function loginUser(e) {
    e.preventDefault();
    var checkbox = $("#remember");
    var name = $("#inputEmail");
    var pass = $("#inputPassword");

    console.log(name.val());
    console.log(pass.val());

    if(name.val() == username && pass.val() == password) {
        if(checkbox.is(':checked')) {
            localStorage.setItem("name", name.val());
            localStorage.setItem("pass", pass.val());
        }
        window.location.href = "/";
    }
}

function checkLogged() {
    if(localStorage.getItem("name") != null && localStorage.getItem("pass") != null) {
        $("#inputEmail").val(localStorage.getItem("name"));
        $("#inputPassword").val(localStorage.getItem("pass"));
    }
}