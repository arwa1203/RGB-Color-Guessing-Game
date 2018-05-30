/* Variables */
var colors = [0, 0, 0, 0, 0, 0]; // array that will hold random colors
var squares = document.querySelectorAll(".square"); // holds all the squares from html doc
var rightColor; // the correct color to be picked, will be changed later
var colorDisplay =document.getElementById("rgbDisplay"); // var that'll allow us to dispaly correct color

/* Code to be executed */
createSquares();
assignColors();



/* Function Section */

// pickColor(): function that creates a random rgb string
function pickColor(){
	var str = "rgb(" + Math.floor(Math.random()*256) + ", " 
	+ Math.floor(Math.random()*256) + ", "
	+ Math.floor(Math.random()*256) + ")"; 
	return str;
} 

// createSquares(): function that assigns rgb's to the colors array
function createSquares(){
	// assuming there are 6 squares
	for(var i = 0; i < 6; i++){
		colors[i]= pickColor();
	}
}

// assignColors(): function that randomly picks an index from color array to be the correct
// 			color for the player to choose and changes the squares from the html doc to correspond
//			with the colors array and adds event listeners to squares 
function assignColors() {
	// assign the right color
	rightColor = colors[Math.floor(Math.random()*6)];
	colorDisplay.textContent = rightColor;

	// loop through colors array and assign rgb to squares
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = colors[i];

		//add event listeners to each square when clicked
		squares[i].addEventListener("click", function(){
			// compare to rightColor
			var clickedColor = this.style.backgroundColor; 
			if(clickedColor === rightColor){
				alert("Correct!");
			}
			else{
				alert("Wrong!");
			}
		});
	} // end for
}		
