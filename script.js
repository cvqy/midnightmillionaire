"use strict";






// Add list of names here
const namesList = [
'Student','Alomgier Ahmed','Anthony Nguyen','Dante Diaz','Hunter Farrar','Jael Castillo','Kiara Roberson','Martin Louth','Mimi Ho','Myles Reed','Armando Herrada Esquivel','Danielle Nickerson','Elvyn Escudero','Eric Collazo','Judith Garcia','sarai solorzano','Tamara Reed','Vantasia Lewis','Ahmad Hamad','Andrea Paredes','Caleb Mariscal','Daisy Rodriguez','Danielle Nickerson','Diego Hernandez','Jose Marquez','Shekinah Okechukwu','Sonam Lama','Zedrick Burns'
];

// Default variables
let i = 0;
let x = 0;
let intervalHandle = null;
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const headerOne = document.getElementById('headerNames');

// Start or stop the name shuffle on button click
startButton.addEventListener('click', function() {
	this.style.display = "none";
	stopButton.style.display = "block";
	intervalHandle = setInterval(function () {
		headerNames.textContent = namesList[i++ % namesList.length];
	}, 50);
});
stopButton.addEventListener('click', function() {
	this.style.display = "none";
	startButton.style.display = "block";
	clearInterval(intervalHandle);
});
