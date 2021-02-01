var numberOfSquares= 6;
var colors= generateRandomColors(numberOfSquares);
var squares= document.querySelectorAll(".square");
var first= document.querySelector("#one");
var colorDisplay=document.querySelector("#col");
var messageDis=document.querySelector("#message");
var newcolors=document.querySelector("#new");

var pickedColor=pickColor();
colorDisplay.textContent=pickedColor;
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

easybtn.addEventListener("click",function()
{
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numberOfSquares=3;
	colors= generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]){
			squares[i].style.background= colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
	first.style.background="black";
	newcolors.textContent= "New Colors!";
	messageDis.textContent= "Guess the color!!";
});

hardbtn.addEventListener("click",function()
{
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numberOfSquares= 6;
	colors= generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i = 0; i < squares.length; i++) {
			squares[i].style.background= colors[i];
			squares[i].style.display="block";
	}
	first.style.background ="black";
	newcolors.textContent= "New Colors!";
	messageDis.textContent= "Guess the color!!";

});

newcolors.addEventListener("click",function(){
	colors= generateRandomColors(numberOfSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	startagain();	
	first.style.background= "black";
	newcolors.textContent= "new colors";
});

startagain();

function startagain(){
	for (var i =0; i <squares.length; i++)
	{
	 	squares[i].style.background = colors[i];
	 	squares[i].addEventListener("click",function(){
			var clickedColor = this.style.background;
			// console.log(clickedColor);
			if(clickedColor === pickedColor)
			{
				first.style.background= pickedColor;
				messageDis.textContent="Correct!!";
				for(var i=0;i<squares.length;i++)
				{
					squares[i].style.background = pickedColor;
					
				}
				newcolors.textContent= "Play Again!";
			}
			else
			{
				this.style.background = "black";
				messageDis.textContent="Try Again!!";
				
			}
		});
	}
	messageDis.textContent= "Guess the color!!"; 
};

function pickColor(){
	var random=Math.floor(Math.random()* colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr =[]
	for(var i=0;i<num; i++){
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r1=Math.floor(Math.random()* 256);
	var r2=Math.floor(Math.random()* 256);
	var r3=Math.floor(Math.random()* 256);
	return "rgb("+ r1 +", "+ r2 +", "+ r3 +")";
}