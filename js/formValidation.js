function validateForm() {
	var ad=document.forms["iletisimForm"]["ad"].value;
	var email=document.forms["iletisimForm"]["mail"].value;
	var mesaj=document.forms["iletisimForm"]["mesaj"].value;
	var begenme=document.getElementById('begenme').value;
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //e-mail için regexp

	let result=true;

	if (ad == "") {
	  alert("İsim boş bırakılamaz!");
	  result=false;
	}
	if (email == "") {
		alert("E-mail boş bırakılamaz!");
		result=false;
	}
	if (!mailformat.test(email)) {
		alert("E-mail formata uygun değil!");
		result=false;
	}
	if (mesaj == "") {
		alert("Mesaj boş bırakılamaz!");
		result=false;
	}
	if(result){
		localStorage.setItem("ad", ad);
		localStorage.setItem("email", email);
		localStorage.setItem("begenme", begenme);
		localStorage.setItem("mesaj", mesaj);
	}

	return result;
  }

  function messageRecieved() {
	  document.getElementById("ad").innerHTML =localStorage.getItem("ad");
	  document.getElementById("email").innerHTML =localStorage.getItem("email");
	  document.getElementById("begenme").innerHTML =localStorage.getItem("begenme");
	  document.getElementById("mesaj").innerHTML =localStorage.getItem("mesaj");
  }