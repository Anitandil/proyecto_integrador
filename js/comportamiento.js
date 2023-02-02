const contactar = document.getElementById('contactameclick');
let contacto = document.getElementById('contactame');


contactar.addEventListener('click', function() {
	contacto.style="background-color: rgba(158,200,200,0.9)";
document.getElementById('contactomail').style.display ="block";
});

document.getElementById("enviarEmail").addEventListener('click', function() {
	alert("Gracias por contactarme, en breve te responderé");
});