$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	$("a.thumbnail").click(projectClick);

}
function projectClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();

}

function updateName(e){
	var person = prompt("Please enter your new name", "");

	if(person.length<1){
		document.getElementById("errname").innerHTML = "Please write a valid name";
		e.preventDefault();

	}
	else if(person!=""){
		document.getElementById("name").innerHTML = person;
		document.getElementById("errname").innerHTML = "";
		e.preventDefault();


	}
}

function updateAddress(e){
	var address = prompt("Please enter your new address", "");

	if(address.length<1){
		document.getElementById("erraddress").innerHTML = "Please write a valid address";
		e.preventDefault();

	}
	else if(address!=""){
		document.getElementById("address").innerHTML = address;
		document.getElementById("erraddress").innerHTML = "";
		e.preventDefault();
	}
}

/*function back(){
	window.history.back()
}
*/