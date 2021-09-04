let precioTotal = 0;
let cant=0
let Lista=[]
let cosa={nombre:"", precioCosa:"", cantidad:""}
function obiamente(articulo, precioCosa, cantidad){
    cosa.nombre = articulo
    cosa.precioCosa = precioCosa
    cosa.cantidad = cantidad
    document.getElementById("cuerpoTabla").innerHTML+=`<tr>
    <td><input type="text" name="cosas" value="`+ cosa.nombre +`" style="color: black; background-color: white;"></td>
    <td><input type="text" name="cosas" value="`+ cosa.precioCosa +`" style="color: black; background-color: white;"></td>
    <td><input type="text" name="cosas" value="`+ cosa.cantidad +`" style="color: black; background-color: white;"></td>
</tr>`;
precioTotal += parseInt(precioCosa);
document.getElementById("total").innerHTML = precioTotal;
Lista.push(cosa);
};
function añadir(){
    
    cosa.nombre = document.getElementById("cosa").value;
    cosa.precioCosa = document.getElementById("precio").value;
    cosa.cantidad = document.getElementById("cant").value;
    precioTotal += parseInt(cosa.precioCosa);
    if (cantidad="") {
        cant=1;
    };
    for (let Dato of Lista) {
        if (Dato.nombre === cosa.nombre) {
            Dato.cantidad+=cosa.cantidad;
            limpiar();
            obiamente(Dato.nombre, Dato.precioCosa, Dato.cantidad);
        }else{
            Lista.push(cosa);
            obiamente(cosa.nombre, cosa.precioCosa, cosa.cantidad);
        }
    }
    document.getElementById("total").innerHTML = precioTotal;
};

function limpiar(){
    document.getElementById("cuerpoTabla").innerHTML="";
    document.getElementById("total").innerHTML=0;
};
document.addEventListener("DOMContentLoaded", function(e){
document.getElementById("total").innerHTML=0;
});