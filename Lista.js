let nombreNo="n"
let precioTotal = 0;
let cant=1
let contador2=0
let Lista=[]
let Lista2=[]
let Lista3=[]
let cosa={nombre:"", precioCosa:"", cantidad:""}

function obtenerVoces(){
    vocesDisponibles = window.speechSynthesis.getVoices();
    }
    obtenerVoces();
    setTimeout(obtenerVoces, 100)

    function hablar(palabras){
        let mensaje = new SpeechSynthesisUtterance();
            mensaje.voice = vocesDisponibles[7];
            mensaje.rate = 1;
            mensaje.text = palabras;
            mensaje.pitch = 1;
            // ¡Habla!
            speechSynthesis.speak(mensaje);
        }

function limpiar(){
    document.getElementById("cuerpoTabla").innerHTML="";
    document.getElementById("total").innerHTML=0;
    Lista=[]
    Lista2=[]
    Lista3=[]
    
};
function limpiar2(){
    document.getElementById("cuerpoTabla").innerHTML="";
    document.getElementById("total").innerHTML=0;
};
function obiamente(articulo, precioCosa, cantidad){
    
    cosa.nombre = articulo
    cosa.precioCosa = parseInt(precioCosa)
    cosa.cantidad = parseInt(cantidad)
    for (valor of document.getElementsByName("cosa")){
        if(valor.value===cosa.nombre){alert("repetiste "+ cosa.nombre);hablar("repetiste"+cosa.nombre);return;}}
    
            
            document.getElementById("cuerpoTabla").innerHTML+=`<tr>
            <td><input type="search" value="`+ cosa.nombre +`" name="cosa" style="width: 2.0cm; color: black; background-color: white;"></td>
            <td><input type="number" value="`+ cosa.precioCosa +`" name="precio" style="width: 1.2cm; color: black; background-color: white;"></td>
            <td><input type="number" value="`+ cosa.cantidad +`" name="cantidad" style="width: 1.2cm;color: black; background-color: white;"></td>
            <td><input type="text" value="`+ (cosa.precioCosa*cosa.cantidad) +`" name="subtotal" style=width: 1.5cm;"color: black; background-color: white;"></td>
            </tr>`; 
            hablar(cosa.nombre+"añadido")
}
function añadir(){
    
    cosa.nombre = document.getElementById("cosa").value;
    cosa.precioCosa = parseInt(document.getElementById("precio").value);
    cosa.cantidad = parseInt(document.getElementById("cant").value);
    
    obiamente(cosa.nombre, cosa.precioCosa, cosa.cantidad);
    document.getElementById("total").innerHTML=total;
    
};
function calcular(){let preciosf=document.getElementsByName("precio");let cantidadesf=document.getElementsByName("cantidad");let subtotalesf=document.getElementsByName("subtotal");let total=document.getElementById("total");let contador=0;let suma=0
while(contador<subtotalesf.length){subtotalesf[contador].value=parseInt(preciosf[contador].value) * parseInt(cantidadesf[contador].value);suma+=parseInt(subtotalesf[contador].value);total.innerHTML=suma; contador+=1;}};setInterval(calcular, 100)

function comprar(){
    hablar("serían un total de"+document.getElementById("total").innerHTML+"pesos")
}