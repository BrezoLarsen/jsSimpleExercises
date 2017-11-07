/*
Operador Ternario
El operador ternario (?:) nos ofrece una manera propia de hacer estructuras condicionales.
Este operador simplifica mucho la sintaxis propia de los condicionales, pero se desaconseja
su uso para operaciones o evaluaciones múltiples.
Si estas empezando con JavaScript, debes tener en cuenta, que es un operador que
resulta difícil de recordar al principio. Siendo bastante común su uso especialmente
en proyectos desarrollados con Node.js.
*/


// Entendiendo la estructura:
// condicion ? expresion1 : condicion2 ? expresion1 : expresion2;


// Ejemplos
var esMiembro = true;
console.info("El pago son " + (esMiembro ? "20.00€" : "50.00€"));


// Evaluación múltiple (muy desaconsejado):
var esMiembro = true;
var esAdulto = true;
console.info(esMiembro ? "El pago son 20.00€" : esAdulto ? "Puedes enviar la solicitud cuando quieras" : "Tienes que esperar aún. Lo siento.");


// Múltiples expresiones (desaconsejado):
var mensaje,
esMiembro = true;
esMiembro ? (
mensaje = "El pago son 20.00€",
console.info(mensaje)
) : (
mensaje = "El pago son 50.00€",
console.info(mensaje)
);





/*
Objetos
*/

// Creando un objeto
//// 	Vacío:
var miObjeto = {};

////	Con propiedades:
var miObjeto = {
	cadena: 'esto es una cadena',
	numero: 2,
	booleano: false
};

////	Con Métodos:
var miObjeto = {
	saludar: function(){
		console.log("hola!");
	}
};

//// 	Con propiedades y métodos
var miObjeto = {
	metodo: function() {
		console.log(miObjeto.propiedad1)
	},
	propiedad1: "Datos"
};

// Recuperando el valor de propiedad1
console.log("miObjeto.propiedad1:", miObjeto.propiedad1);

// Ejecutando el método
miObjeto.metodo()