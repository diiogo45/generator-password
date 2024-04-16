const lowerCaseLetters = "abcdefghijklmnopqrstuvxzy";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVXZY";
const numbers = "0123456789";
const symbols = "^*<\:??+'~-+=:";

const lengthEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const genrateBtn = document.getElementById("generate");
const passwordEl = document.getElementById("password");

genrateBtn.addEventListener("click", function(){


	const length = lengthEl.value
	let characters = "";
	let password = "";

	if (lowercaseEl.checked){

		characters += lowerCaseLetters
	}

	if (uppercaseEl.checked){

		characters+= uppercaseLetters;
	}

	if (numbersEl.checked){

		characters+= numbers;
	}

	if (symbolsEl.checked){

		characters+= symbols;
	}


	for (let i = 0; i< length; i++){

		password += characters.charAt(Math.floor(Math.random()* characters.length));
	}

	passwordEl.value = password;


});