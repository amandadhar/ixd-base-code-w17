$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {

	$("#update").click(function(e) {
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
	$("a.thumbnail").click(projectClick);

	//timer = setTimeout(back, 3000);
}
function projectClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();

}

function updateName(){
	var person = prompt("Please enter your new name", "");

	if(person.length<1){
		document.getElementById("errname").innerHTML = "Please write a valid name";

	}
	else if(person!=null){
		document.getElementById("name").innerHTML = person;
		document.getElementById("errname").innerHTML = "";

	}
}

function updateAddress(){
	var address = prompt("Please enter your new address", "");

	if(address.length<1){
		document.getElementById("erraddress").innerHTML = "Please write a valid address";
	}
	else if(address!=null){
		document.getElementById("address").innerHTML = address;
		document.getElementById("erraddress").innerHTML = "";

	}
}

/*function back(){
	window.history.back()
}
*/