$(document).ready(function() {
	initializePage();
});

function initializePage() {
    $.post("movenow-query", {
        "_id": localStorage.getItem("currentUser")
    }, renderNameAndAddress);
	$("#updateAdd").click(updateAddress);
	$("#updateName").click(updateName);

}

function renderNameAndAddress(data) {
	var username = data.name;
	var userhome = data.home;
	$("#name").html("<p>" + username + "</p>");
	$("#address").html("<p>" + userhome + "</p>");
}

function updateName(e){
	e.preventDefault();
	var person = prompt("Please enter your new name", "");

	if(person.length<1){
		document.getElementById("errname").innerHTML = "Please write a valid name";

	}
	else if(person!=""){
		document.getElementById("name").innerHTML = person;
		document.getElementById("errname").innerHTML = "";

		$.post('/settings',
			{
				"name": person,
				"id": localStorage.getItem("currentUser")
            }, nameChanged)

	}
}

function updateAddress(e){
	e.preventDefault();
	var address = prompt("Please enter your new address", "");

	if(address.length<1){
		document.getElementById("erraddress").innerHTML = "Please write a valid address";

	}
	else if(address!=""){
		document.getElementById("address").innerHTML = address;
		document.getElementById("erraddress").innerHTML = "";
		$.post('/settings',
			{
				"home": address,
				"id": localStorage.getItem("currentUser")
            }, addressChanged);
	}
}
//placeholder callbacks for POST requests
function nameChanged(data) {
	//console.log("yo");
}
function addressChanged(data) {}