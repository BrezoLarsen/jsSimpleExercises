/*
Diseña un algoritmo que confirme si una fecha es valida y además devuelva la fecha en dos formatos diferentes.

Características:
El usuario introduce tres números (día, mes, año)
Validar la fecha. En caso de error incluir un mensaje informativo.
Después de validar, devolvemos la fecha en formato DD/MM/AAAA
Convertimos el número del mes, en el nombre del mes real y devolvemos la fecha en el siguiente formato ( DD de MES de AAAA)
*/

var day = prompt("¿Qué día es hoy?");
var month = prompt("¿En qué mes estamos?");
var year = prompt("¿En qué año estamos?");

var months = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"]


function monthNumToName(month) {
    return months[month - 1] || '';
}
// function monthNameToNum(monthname) {
//     var month = months.indexOf(monthname);
//     return month ? month + 1 : 0;
// }

var date = day + "/" + month + "/" + year;
var date_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/ ;

if(!(date_regex.test(date))) {
	console.log("El formato de fecha es incorrecto");
} else {
	console.log("La fecha introducida es " + date);
	console.log("La fecha introducida es " + day + " de " + monthNumToName + " de " + year);
}


