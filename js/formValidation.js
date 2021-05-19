var mailformat1 = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;


function validateForm() {
	var email=document.forms["iletisimForm"]["mail"].value;
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (document.forms["iletisimForm"]["ad"].value == "") {
	  alert("İsim boş bırakılamaz!");
	  return false;
	}
	if (email == "") {
		alert("E-mail boş bırakılamaz!");
		return false;
	}
	if (!mailformat.test(email)) {
		alert("E-mail formata uygun değil!");
		return false;
	}
	if (mesaj == "") {
		alert("E-mail boş bırakılamaz!");
		return false;
	}
  }