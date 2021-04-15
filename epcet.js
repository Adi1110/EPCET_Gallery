function openForm() {
  document.getElementById("myForm").style.display = "block"
  }

function closeForm() {
  document.getElementById("myForm").style.display = "none"
}


function check(form){
	if(form.email.value=="adi@gmail.com" && form.psw.value=="adi123"){
		window.open("photo_gallery.html");
	}
	else{
		alert("Invalid email or pwd");
	}
}
	

