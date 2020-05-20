var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons (){
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected")
            modeButtons[1].classList.remove("selected")
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6; 
            reset();
        });
    }
}

function setupSquares (){
    for (var i = 0; i < squares.length; i++) {   
        squares[i].addEventListener("click",function () {
            var clickedcolor = this.style.backgroundColor;  
            if (clickedcolor === pickedColor) {
                messageDisplay.textContent = "Correct"
                messageDisplay.style.color = "green"
                resetButton.textContent = "Play Again?";
                changeColors(clickedcolor);
                h1.style.backgroundColor = clickedcolor;                
            } else {
                this.style.backgroundColor = "#232323"
                messageDisplay.textContent = "Try Again"
                messageDisplay.style.color = "red"
            }
           });
    }
}



 function reset (){
     colors = generateRandomColors(numSquares);
     pickedColor = pickcolor();
     colorDisplay.textContent = pickedColor;
     resetButton.textContent = "New Colors"
     messageDisplay.textContent = ""
     for (var i = 0; i < squares.length; i++) {
         if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
         }else{
            squares[i].style.display = "none";
         }            
     }
     h1.style.backgroundColor = "steelblue"
 }

resetButton.addEventListener("click",function(){
    reset();
})

function changeColors(color) {
    for (var i =0; i <squares.length; i++){
        squares[i].style.backgroundColor = color;
    }     
}

function pickcolor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColors());
    }
    return arr;
}

function randomColors (){
    //red
    var r = Math.floor(Math.random() * 256);
    //green
    var g = Math.floor(Math.random() * 256);
    //blue
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")"
}
