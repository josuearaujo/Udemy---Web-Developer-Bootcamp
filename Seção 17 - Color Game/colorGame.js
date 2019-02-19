var numSquares = 6;
var colors = generateRandomColors(numSquares);
var index_color = pickColor();
var squares = document.querySelectorAll(".square");
var pickedColor = colors[index_color];
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn"); 
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
	messageDisplay.textContent = "";
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;

	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";

	colors = generateRandomColors(numSquares);
	index_color = pickColor();
	pickedColor = colors[index_color];

	colorDisplay.textContent = pickedColor;

	for(var i=0; i<squares.length; i++){
		if(i<3){
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}

	}
})
hardBtn.addEventListener("click", function(){
	messageDisplay.textContent = "";
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;

	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";

	colors = generateRandomColors(numSquares);
	index_color = pickColor();
	pickedColor = colors[index_color];

	colorDisplay.textContent = pickedColor;

	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		if(i>=3){
			squares[i].style.display = "block";
		}
	}
})

resetButton.addEventListener("click", function(){
	resetButton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	colors = generateRandomColors(numSquares);
	messageDisplay.textContent = "";

	index_color = pickColor();
	pickedColor = colors[index_color];

	colorDisplay.textContent = pickedColor;

	for(var i=0; i<squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}


})

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			h1.style.backgroundColor = pickedColor;
			for(var i = 0; i<squares.length; i++){
				squares[i].style.backgroundColor = pickedColor;
			}
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}




function pickColor(){
	return Math.floor(Math.random() * colors.length);
}

function generateRandomColors(n){
	var arr = [];

	for(var i=0; i<n; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}
