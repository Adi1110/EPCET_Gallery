function openForm() {
  document.getElementById("myForm").style.display = "block"
  }

function closeForm() {
  document.getElementById("myForm").style.display = "none"
}

function myFunction(){
	var email = document.forms["myForms"]["email"].value;
	var psw = document.forms["myForms"]["psw"].value;
	
	if(email=="epcet" && psw=="adi123"){
		window.location.href="photo_gallery";
	}
	else{
		alert("Invalid email and password");
	}
}
