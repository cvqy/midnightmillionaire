window.onload= function () {

//entire js file
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
	var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti(Object.assign({}, defaults, opts, {
    particleCount: Math.floor(count * particleRatio)
  }));
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});
fire(0.2, {
  spread: 60,
});
fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8
});
fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
});
fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
});
}
