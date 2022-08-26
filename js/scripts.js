botonContacto=document.getElementById("botonContacto");
botonInfo=document.getElementById("botonInfo");
tarjetaContacto=document.getElementById("tarjetaContacto");
tarjetaBody=document.getElementById("tarjetaBody");

botonContacto.addEventListener("click", function() {
    if (!tarjetaBody.classList.contains("oculto")) {
        tarjetaBody.classList.add("oculto");
        tarjetaContacto.classList.remove("oculto");
     }
});

botonInfo.addEventListener("click", function() {
    if (!tarjetaContacto.classList.contains("oculto")) {
        tarjetaContacto.classList.add("oculto");
        tarjetaBody.classList.remove("oculto");
     }
});
