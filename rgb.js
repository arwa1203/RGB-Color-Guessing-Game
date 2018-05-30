var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)"]


var squares = document.querySelectorAll(".square"); // holds all the squares
var rightColor = colors[3]; // the correct color to bepicked
var colorDisplay =document.getElementById("rgbDisplay"); // var that'll allow us to dispaly correct color


colorDisplay.textContent = rightColor;
for(var i = 0; i < colors.length; i++){

	// add a color to each square
	squares[i].style.backgroundColor = colors[i];

	//add event listeners to each square when clicked
	squares[i].addEventListener("click", function(){
		// compare to rightColor
		var clickedColor = this.style.backgroundColor; 
		if(clickedColor === rightColor){
			alert("correct");
		}
		else{
			alert("wrong!");
		}
	});

}
			