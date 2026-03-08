(function(){
emailjs.init("IgXKwfjgorl7G1Ffn");
})();


document.getElementById("formulario")
.addEventListener("submit", function(event){

event.preventDefault();

emailjs.send("service_fb02nwu","template_xhu8oqi",{
nombre: document.getElementById("nombre").value,
email: document.getElementById("email").value,
mensaje: document.getElementById("mensaje").value
})
.then(function(){
alert("Mensaje enviado correctamente");
}, function(error){
alert("Error al enviar");
});

});
