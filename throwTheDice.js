// Diseñar un programa que simule cien tiradas de dos dados y que cuente las veces que entre los dos suman 10.


// This works for one throw
	//  var tiradas = function() {

	// 	var dado1 = Math.floor(Math.random() * 6) + 1;
	// 	var dado2 = Math.floor(Math.random() * 6) + 1;

	// 	console.log(dado1);
	// 	console.log(dado2);

	// 	var jugadaGanadora = dado1 + dado2 === 10;

	// 	var numJugadasGanadoras = function() {
	// 		if (jugadaGanadora != 0) {
	// 			console.log("hey");
	// 		}
	// 	}();

	// }();






var juego = function() {

	for (var tirada = 1; tirada < 100; tirada++) {

		var dado1 = Math.floor(Math.random() * 6) + 1;
		var dado2 = Math.floor(Math.random() * 6) + 1;

		console.log("dado uno: " + dado2);
		console.log("dado dos: " + dado1);

		victory = dado1 + dado2 === 10;

		if (victory != 0) {
			console.log("you win");
			var win = true;
		} else {
			console.log("you loose");
			var win = false;
		}

	}

}();

































