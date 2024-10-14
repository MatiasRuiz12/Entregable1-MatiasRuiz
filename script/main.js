alert('Bienvenido al cine!')
let edad=parseInt(prompt('Por favor indicanos tu edad?'))

if(edad>=18){
    alert('Excelente, pasemos a la eleccion de pelicula!')
}else{
    alert('Lo lamentamos, no puedes pasar a seleccion de pelicula')
    console.log('Tenemos un menor intentando ingresar al cine');
    
}

function calcularDescuento() {    
    let precioComun = 2000;    
    let precioDescuento = 500;    
    let diaDeDescuento = prompt('Es día de descuento hoy?si/no').toLowerCase(); 

    if (diaDeDescuento === 'si') { 
        return 'El precio total es: $'+ (precioComun-precioDescuento);
    } else {
        return 'No hay descuento, el precio total es: $'+(precioComun);
    }
}

let resultado = calcularDescuento();
alert(resultado); 


let carrito = 0;
 alert("Elijamos que queremos comer!")
 let comida = prompt("Escribe que productos quieres llevar a la sala! .\n POCHOCLO MEDIANO \n POCHOCLO GRANDE \n GASEOSA MEDIANA \n GASEOSA GRANDE \n NACHOS CON QUESO \n AGUA MINERAL \n Si quiere saber cuanto llevas comprado escribe: TOTAL").toUpperCase();

 console.log(comida);

 while (comida != "TOTAL") {
     switch (comida) {
         case "POCHOCLO MEDIANO":
             {
                 carrito += 300;
                 break;
             }
         case "POCHOCLO GRANDE":
             {
                 carrito += 420;
                 break;
             }
         case "GASEOSA MEDIANA":
             {
                 carrito += 200;
                 break;
             }
         case "GASEOSA GRANDE":
             {
                 carrito += 400;
                 break;
             }
         case "AGUA MINERAL":
             {
                 carrito += 1150;
                 break;
             }
         case "NACHOS CON QUESO":
             {
                 carrito += 380;
                 break;
             }
         default:
             {
                 console.log("error. producto no disponible");
                 break;
             }
     }
     comida = prompt("Escribe que productos quieres llevar a la sala! .\n POCHOCLO MEDIANO \n POCHOCLO GRANDE \n GASEOSA MEDIANA \n GASEOSA GRANDE \n NACHOS CON QUESO \n AGUA MINERAL \n Si quiere saber cuanto llevas comprado escribe: TOTAL").toUpperCase();

     console.log(comida);
 }
 alert("Excelente! Tu total es de $" + carrito);

alert('Cuantos somos? Cuanto gastamos? Veamos!')
function gastosDeAmigos() {
    let numeroDeAmigos=parseFloat(prompt('Escriba cuantos amigos son en total'))
    let totalDeGastos=0

    for(let i=0;i<numeroDeAmigos; i++){
        let gasto = parseFloat(prompt(`Ingrese el gasto del amigo ${i + 1}:`));
        if (!isNaN(gasto)) {
            totalDeGastos += gasto;
        } else {
            alert("Por favor, ingrese un número válido");
            i--; // Repetir esta iteración si la entrada no es válida
        }
    }

    console.log('El total de gastos es: $'+ totalDeGastos);
    
}
gastosDeAmigos()

//Esto seria para los operadores del cine


let numeroDePeliculas = parseInt(prompt('Digita la cantidad de peliculas a estrenar en cartelera'));
let peliculas = [];

for (let i = 0; i < numeroDePeliculas; i++) {
    let pelicula = prompt('Ingresa el nombre de la película ${i + 1}');
    peliculas.push(pelicula);
}

console.log(peliculas);

    