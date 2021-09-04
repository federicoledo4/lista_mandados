let nombreNo="n"
let precioTotal = 0;
let cant=1
let contador2=0
let Lista=[]
let Lista2=[]
let Lista3=[]
let cosa={nombre:"", precioCosa:"", cantidad:""}
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
    if (Lista.includes(articulo)) {
        alert("repetiste "+ cosa.nombre)
        limpiar2()
        let contador = 0
        while (contador < Lista.length) {
            cosa.nombre=Lista[contador]
            cosa.precioCosa=Lista2[contador]
            cosa.cantidad=Lista3[contador]
            if (cosa.nombre===articulo) {
                cosa.cantidad+=parseInt(cantidad)
                Lista3[contador]=cosa.cantidad
                if ((contador2>0)) {
                    nombreNo=Lista[contador]
                    contador2=1
                }
                contador2+=1
                
                precioTotal += parseInt(cosa.precioCosa)//*(cosa.cantidad)-cosa.precioCosa+(cosa.cantidad);
            }
            document.getElementById("cuerpoTabla").innerHTML+=`<tr>
            <td><input type="text" name="cosas" value="`+ cosa.nombre +`" style="color: black; background-color: white;"></td>
            <td><input type="text" name="cosas" value="`+ cosa.precioCosa +`"id="`+Lista3[contador]+"1000"+`" style="color: black; background-color: white;"></td>
            <td><input type="text" name="cosas" value="`+ cosa.cantidad +`"id="`+(Lista3[contador])+`" style="color: black; background-color: white;"></td>
            </tr>`;
            contador+=1
        }
        document.getElementById("total").innerHTML = `<input type="text" name="cosas" value="`+ precioTotal +`" style="color: black; background-color: white;">`;
    
        
        return
    }else{
        Lista.push(cosa.nombre);
        Lista2.push(cosa.precioCosa)
        Lista3.push(cantidad)
    }
    document.getElementById("cuerpoTabla").innerHTML+=`<tr>
    <td><input type="text" name="cosas" value="`+ cosa.nombre +`" style="color: black; background-color: white;"></td>
    <td><input type="text" name="cosas" value="`+ cosa.precioCosa +`"id="`+Lista3.length+"1000"+`" style="color: black; background-color: white;"></td>
    <td><input type="text" name="cosas" value="`+ cosa.cantidad +`"id="`+Lista3.length+`" style="color: black; background-color: white;"></td>
    </tr>`;
    precioTotal += parseInt(precioCosa)*cosa.cantidad;
    document.getElementById("total").innerHTML = `<input type="text" name="cosas" value="`+ precioTotal +`" style="color: black; background-color: white;">`;
    if (cosa.cantidad=NaN) {
        cosa.cantidad="";
    };
};
function añadir(){
    
    cosa.nombre = document.getElementById("cosa").value;
    cosa.precioCosa = parseInt(document.getElementById("precio").value);
    cosa.cantidad = parseInt(document.getElementById("cant").value);
    obiamente(cosa.nombre, cosa.precioCosa, cosa.cantidad);
};


/*document.addEventListener("DOMContentLoaded", function(e){
document.getElementById("total").innerHTML= 0
});*/

document.addEventListener("keyup", function(){
    while (cant<(Lista3.length)) {
        if (document.getElementById(cant+"1000").value!==null) {
            
        }
        precioTotal+=document.getElementById(cant+"1000").value*document.getElementById(cant).value
        document.getElementById("total").innerHTML = precioTotal;
        cant+=1
    }
    precioTotal=0
    cant=1
    
})
//problemas con las id de los repetidos creo hay que usar for para dar una id generica a cada elemento
//o otro contador llamado id