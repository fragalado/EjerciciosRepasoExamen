/**
 * EJERCICIOS
 */

// ------------------------------- EJERCICIO 1 ------------------------------
// Genera la fecha y hora actual; y calcula a partir de esta las fechas y horas de tres usos horarios diferentes. 
// Por último, calcula la fecha actual para el uso horario cero. Muestra por consola y en la vista todos los valores.
 function ejercicio1(){
	 let fechaHoraActual = new Date(); // Genera una fecha y hora actual
	 
	 console.log("UTC+1: " + fechaHoraActual.toLocaleString());
	 
	// Calculamos la fecha y hora de tres husos horarios diferentes (nuestro huso horario es UTC+1)
	// UTC+3
	let fecha1 = new Date(fechaHoraActual);
	fecha1.setHours(fecha1.getHours() +2)
	console.log("UTC+3: " +fecha1.toLocaleString());
	
	// UTC-5
	let fecha2 = new Date(fechaHoraActual);
	fecha2.setHours(fecha2.getHours() - 6)
	console.log("UTC-5: " +fecha2.toLocaleString());
	
	// UTC-8
	let fecha3 = new Date(fechaHoraActual);
	fecha3.setHours(fecha3.getHours() - 9)
	console.log("UTC-8: " +fecha3.toLocaleString());
	
	// UTC+0
	let fecha4 = new Date(fechaHoraActual);
	console.log("UTC+0: " +fecha4.toUTCString());
	
	//fecha4.setHours(fecha4.getHours() - 1);
	fecha4.setHours(fecha4.getUTCHours());
	console.log("UTC+0: " +fecha4.toLocaleString());
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
function ejercicio4(){
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
}
 
 // ------------------------------- EJERCICIO 5 ------------------------------
 // Muestra por consola el siguiente string:    La posada se llamara "El toro".   
// Consigue que se muestren las dobles comillas correctamente.
// Añade un un salto de línea después de la palabra posada.
function ejercicio5(){
	console.log("La posada\nse llamara \"El toro\".");
}
 
 // ------------------------------- EJERCICIO 6 ------------------------------
 // Crea un programa que solicite dos números y devuelva el mayor de los dos en un elemento alert. 
 // Convierte los datos introducidos a números antes de comenzar a operar con ellos.
 
 function ejercicio6(){
	 // Pedimos dos numeros y los pasamos a number
 	let numero1 = Number(prompt("Primer numero:"));
 	let numero2 = Number(prompt("Segundo numero:"));
 	
 	// Comparamos los dos numeros y mostramos el mayor
 	(numero1 > numero2) ? alert(numero1):alert(numero2); 
 }
 
 // ------------------------------- EJERCICIO 7 ------------------------------
 // Crea ejemplos de conversión de texto a número y viceversa. Consigue que la conversión de texto a número falle. ¿Qué error es el más típico?
 
 function ejercicio7(){
	 let numero1 = 12;
	 let conversion = numero1.toString();
	 let numeroAString = String(1);
	 let stringANumero = Number("1");
	 
	 console.log(typeof conversion + " " + conversion);
	 console.log(typeof numeroAString + " " + numeroAString);
	 console.log(typeof stringANumero + " " + stringANumero);
	 
	 let stringANumeroFalla = Number("1a");
	 console.log(typeof stringANumeroFalla + " " + stringANumeroFalla);
 }
 
 // ------------------------------- EJERCICIO 8 ------------------------------
 // Construye el objeto de tipo persona con los siguientes campos: nombre, apellidos, edad y fecha de nacimiento. 
 // Dale a la fecha de nacimiento un valor en formato adecuado para poder pasar de string a date.
// Cuando tengas el objeto, opten el tipo de dato que es y verifica que es un tipo persona.
// Pista: utiliza el ejemplo de los vehículos con marca y modelo visto en la teoría de clase.

function ejercicio8(){
	
	// Creamos la "clase" persona
	function persona(nombre, apellidos, edad, fechaNac){
		this.nombre = nombre;
		this.apellidos = apellidos;
		this.edad = edad;
		this.fechaNac = new Date(fechaNac);
	}
	
	
	let fran = new persona("Fran", "Gallego Dorado", 19, "2003-12-28")
	
	console.log(fran);
	console.log(typeof(fran.nombre) + " " + fran.nombre);
	console.log(typeof(fran.apellidos) + " " + fran.apellidos);
	console.log(typeof(fran.edad) + " " + fran.edad);
	console.log(typeof(fran.fechaNac) + " " + fran.fechaNac.toLocaleString());
	console.log(typeof fran);
	console.log(fran instanceof persona);
	console.log(fran instanceof Object);
}