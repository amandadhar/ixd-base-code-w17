$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	$("#updateAdd").click(updateAddress);
	$("#updateName").click(updateName);

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
	console.log("yo");
}
function addressChanged(data) {}

/*function back(){
	window.history.back()
}
*/