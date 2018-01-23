/*
Diseña un algoritmo introducido un numero y pasarlo a número romanos.
*/




var numberOfUser = prompt("Introduce un número");

var romanNumerals = [
	[1, "I"],
	[4, "IV"],
	[5, "V"],
	[9, "IX"],
	[10, "X"],
	[40, "XL"],
	[50, "L"],
	[90, "XC"],
	[100, "C"],
	[90, "CM"],
	[1000, "M"]
];



function convertToRoman(numberOfUser) {

	if (numberOfUser == 0) {
		console.log("Debes introducir un número mayor que cero");
	} else {

		for (var i = 0; i < romanNumerals.length; i++) {

			if(numberOfUser == romanNumerals[i][0]) {
				// Si el número coincide con uno que está en el array, lo muestra bien
				console.log("El numero es igual");
				console.log("El número romano correspondiente a " + romanNumerals[i][0] + " es el " + romanNumerals[i][1]);
			} else {
				console.log("el número es diferente");
				// Tenemos que calcular que si el usuario mete un 3, debemos multiplicar el romanNumerals[i][0] por el numberOfUser.
				console.log(romanNumerals[i][1] = (numberOfUser * romanNumerals[i][0]));
				// Si es 5:    V    +   5-5
				// console.log("romanNumerals 1" + " - " + romanNumerals[i][1]);
				// console.log("romanNumerals 0" + " - " + romanNumerals[i][0]);
			}
		}
	}
}

convertToRoman(numberOfUser);




// if(numberOfUser == 1) {
// 	console.log("I");
// }