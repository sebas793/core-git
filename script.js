var botonsesion = document.getElementById("botonSesion");

console.log(botonsesion);

botonsesion.addEventListener("click", function(){
    botonsesion.innerText = "Cerrar Sesion";
    console.log("funciona")
})


var botonadd = document.querySelectorAll("#botonAdd");
console.log(botonadd);

botonadd.forEach(function(boton) {
    boton.addEventListener("click",function(){
        this.remove();
    })
})


var megusta=document.getElementById("gato");
var contador=0;


megusta.addEventListener("click",function(){
    contador++;
    this.innerText=contador+" me gusta";
    alert("me gusta gatos atigrados");
})

var megusta=document.getElementById("perro");
var contador=0;


megusta.addEventListener("click",function(){
    contador++;
    this.innerText=contador+" me gusta";
    alert("me gusta perros golden retriver")
})



