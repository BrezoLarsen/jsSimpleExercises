var countLetter = function () {
	var letter = prompt("Dime una letra:");
	console.log(letter);

	var phrase = prompt("Dime una frase");
	console.log(phrase);

	var textLength = phrase.length;
	console.log("La longitud del texto es " + textLength);

	var numberOfLetters = phrase.split(letter).length -1;
	console.log("La letra " + letter + " aparece " + numberOfLetters + " veces");
}();

