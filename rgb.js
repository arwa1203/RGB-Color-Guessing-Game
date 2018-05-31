/* Variables */
var colors = [0, 0, 0, 0, 0, 0]; // array that will hold random colors
var squares = document.querySelectorAll(".square"); // holds all the squares from html doc
var rightColor; // the correct color to be picked, will be changed later
var colorDisplay =document.getElementById("rgbDisplay"); // var that'll allow us to dispaly correct color
var message = document.getElementById("message");
var h1Header = document.getElementById("head");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var mode = "hard"; // game starts off as hard

/* Code to be executed */
createSquares();
assignColors();
addSqListener();
addButtonListeners();


/* Function Section */

// createSquares(): function that assigns rgb's to the colors array
function createSquares(){
	// assuming there are 6 squares
	for(var i = 0; i < 6; i++){
		colors[i]= pickColor();
	}
}

// pickColor(): function that creates a random rgb string
function pickColor(){
	var str = "rgb(" + Math.floor(Math.random()*256) + ", " 
	+ Math.floor(Math.random()*256) + ", "
	+ Math.floor(Math.random()*256) + ")"; 
	return str;
} 

// assignColors(): function that randomly picks an index from color array to be the correct
// 			color for the player to choose and changes the squares from the html doc to correspond
//			with the colors array and adds event listeners to squares 
function assignColors() {
	// assign the right color
	rightColor = colors[Math.floor(Math.random()*6)];
	// display it
	colorDisplay.textContent = rightColor;

	// loop through colors array and assign rgb to squares
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = colors[i];
	} 
}		


// resetColors(): function will reset the game
function resetColors(){
	createSquares();
	assignColors();

	// update message
	message.textContent = "";

	// change h1Header
	h1Header.style.backgroundColor="rgb(60, 118, 174)";

	// change text of new colors/ reset button
	resetBtn.textContent = "New Colors";
}




// addSqListener(): function will add event listeners to squares
function addSqListener(){
	for(var i = 0; i < squares.length; i++){
		//add event listeners to each square when clicked
		squares[i].addEventListener("click", function(){
			// compare to rightColor
			var clickedColor = this.style.backgroundColor; 
			
			if(clickedColor === rightColor){
				
				// change the colors of all the squares
				for(var i = 0; i < squares.length ; i++){
					squares[i].style.backgroundColor = rightColor;
				}

				// update message
				message.textContent = "Correct!";

				// change h1Header
				h1Header.style.backgroundColor=rightColor;

				// change text of new colors/ reset button
				resetBtn.textContent = "Play Again?";
			}

			else{
				this.style.backgroundColor=null;
				message.textContent = "Try Again";
			}
		});
	} // end for
}

// addButtonListeners(): add listeners to all the buttons
function addButtonListeners(){

	// add event listener to new colors button
	resetBtn.addEventListener("click", function(){
		resetColors();
	});

	// add event listener to easy button
	easyBtn.addEventListener("click", function(){
		// change mode to easy
		mode = "easy";
	});

	// add event listener to hard button
	hardBtn.addEventListener("click", function(){
		// change mode to hard
		mode = "hard";
	});


}