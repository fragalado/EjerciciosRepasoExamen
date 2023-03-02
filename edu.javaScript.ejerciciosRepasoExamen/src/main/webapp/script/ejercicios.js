/**
 * EJERCICIOS
 */

// ------------------------------- EJERCICIO 1 ------------------------------
// Genera la fecha y hora actual; y calcula a partir de esta las fechas y horas de tres usos horarios diferentes. 
// Por último, calcula la fecha actual para el uso horario cero. Muestra por consola y en la vista todos los valores.
 function ejercicio1(){
	 let fechaHoraActual = new Date(); // Genera una fecha y hora actual
	 
	// Calculamos la fecha y hora de tres husos horarios diferentes (nuestro huso horario es UTC+1)
	// UTC+0
	// console.log(fechaHoraActual.getUTCHours()); // Cuando ponemos UTC nos coge del UTC+0
	
	// UTC-5
 }
 
 // ------------------------------- EJERCICIO 2 ------------------------------
//  Solicita el nombre y los apellidos de una persona desde la vista y guárdalos en diferentes variables. 
// Muestra un menú que te de dos opciones: 1, mostrar nombre; 2, mostrar apellidos. 
// Solicita la opción deseada y en base a esta muestra por la vista el nombre o los apellidos.
function ejercicio2(){
	
	// Solicitamos el nombre y lo guardamos en una variable
	let nombre = prompt("Introduzca su nombre: ");
	
	// Comprobamos el nombre
	while(compruebaCaracteres(nombre)){
		nombre = prompt("Introduzca su nombre: ");
	}
	// Solicitamos el apellido y lo guardamos en una variable
	let apellidos = prompt("Introduzca sus apellidos: ");
	
	// Comprobamos los apellidos
	while(compruebaCaracteres(apellidos)){
	apellidos = prompt("Introduzca sus apellidos: ");
	}
	
	// Mostramos un menú
	let opcion = prompt("1. Mostrar nombre\n2. Mostrar apellidos");
	
	(opcion == 1) ? document.write(nombre) : document.write(apellidos);
}

function compruebaCaracteres(texto){
	// Se pueden poner muchos más carácteres
	let vCaracteres = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '\"', '·', '#', '$', '~', '(', ')', '=', '?', '¿', ',', ';', '.', ':', '_', '-'];
	
	// Antes que nada si el texto es null vamos a devolver true
	if(texto == "" || texto == null)
		return true;
		
	for(let i=0; i < texto.length; i++){
		
		// Bucle para comprobar cada caracter del vector
		for(let j=0; j < vCaracteres.length; j++){
			if(texto.charAt(i) == vCaracteres[j])
			return true;
		}
	}
	
	return false;
}
 
 // ------------------------------- EJERCICIO 3 ------------------------------
 // Muestra 71 en ambos casos
 function ejercicio3(){

	var x = 31; 
	if (true) {
	
	   var x = 71;
	   console.log(x); 
	} 
	console.log(x); 
 }
 
 // ------------------------------- EJERCICIO 4 ------------------------------
 // Antes de ejecutarlo, piensa en la solución. ¿Es correcto el trozo de código anterior?¿Qué ocurre con las variables let?
 // El codigo daría error porque no se pueden declarar varias variables con el mismo nombre y en el mismo ámbito
 /*
 switch (x) { 
  case 0: 
    let foo; 
    break; 
 
case 1: 
   let foo; 
   break; 
}
 */
 
 // ------------------------------- EJERCICIO 5 ------------------------------
 
 
 // ------------------------------- EJERCICIO 6 ------------------------------
 
 
 // ------------------------------- EJERCICIO 7 ------------------------------
 
 
 // ------------------------------- EJERCICIO 8 ------------------------------