var numberSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
    setUpModeButton();
    setSupSquares();
    reset();
}
function setUpModeButton(){
    for(var i=0;i<modeButtons.length;i++){
        modeButtons[i].addEventListener("click",function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
           // this.textContent === "Easy" ? numberSquares = 3: numberSquares = 6;
            if(this.textContent ==="Easy"){
                numberSquares = 3;
            }else{
                numberSquares = 6;
            }
            reset();
        });
    }
}
function setSupSquares(){
    for(var i=0;i<squares.length;i++){
        //console.log(colors[i]);
        squares[i].style.backgroundColor  = colors[i];

        squares[i].addEventListener("click",function(){
            //get color of clicked square and compare to pickedColor
            var clickedColor = this.style.backgroundColor;
            console.log(clickedColor+" "+pickedColor);
            if(pickedColor === clickedColor){
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }
            else{
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again!";
            }
        
        });
    }
}
function reset(){
    colors = generateRandomColor(numberSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
    for(var i = 0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}
/*
easyBtn.addEventListener("click",function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numberSquares = 3;
    colors = generateRandomColor(numberSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        }
        else{
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click",function(){
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberSquares = 6;
    colors = generateRandomColor(numberSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(var i=0;i<squares.length;i++){
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
    }
});
*/
resetButton.addEventListener("click",function(){
    reset();
});

colorDisplay.textContent = pickedColor;


function changeColors(color){
    //console.log(color);
    for(var i=0;i<squares.length;i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    console.log("picked: "+colors.length);
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num){
    var arr = [];
    for(var i=0;i<num;i++){
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var red =  Math.floor(Math.random()*256); //0-255
    var green = Math.floor(Math.random()*256); //0-255
    var blue = Math.floor(Math.random()*256); //0-255
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}