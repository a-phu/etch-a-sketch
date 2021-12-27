const gridContainer = document.querySelector(".grid-container");

let colour = "#D8BFD8";
let gridDensity = "25";

createGrid(gridDensity);

let gridItems = document.querySelectorAll(".grid-container .gridItem");

changeToColourMode();

const colourPickerInput = document.querySelector("#colourPicker");
const colourOrRainbowModeBtn = document.querySelector('#colourOrRainbowMode');
const eraserBtn = document.querySelector("#eraser");
const clearSketchBtn = document.querySelector("#clearSketch");
const sliderValueText = document.querySelector('#sliderValue');
const gridDensitySlider = document.querySelector('#gridDensitySlider');

sliderValueText.textContent = gridDensity + " x " + gridDensity;

colourPickerInput.addEventListener("change", e => {
    colour = e.target.value;
});
colourOrRainbowModeBtn.addEventListener('click', toggleColourOrRainbowModeText);
clearSketchBtn.addEventListener('click',clearSketch);
gridDensitySlider.addEventListener('change', () =>{
    gridDensity = gridDensitySlider.value;
    changeGridDensity();
    sliderValueText.textContent = gridDensity + " x " + gridDensity;
    resetButtonColor();
})
eraserBtn.addEventListener('click', useEraser);

function resetButtonColor(){
    eraserBtn.style.backgroundColor = "transparent";
    colourOrRainbowModeBtn.style.backgroundColor = "#e8effa";
}


function toggleColourOrRainbowModeText(){
    resetButtonColor();
    if(colourOrRainbowModeBtn.textContent == "colour mode"){
        colourOrRainbowModeBtn.textContent = "rainbow mode";
        changeToRainbowMode();
    } else{
        colourOrRainbowModeBtn.textContent = "colour mode";
        changeToColourMode();
    }
}

function useEraser(){
    console.log(eraserBtn.style.backgroundColor);
    if(colour != "transparent"){
        eraserBtn.style.backgroundColor = "#e8effa";
        colourOrRainbowModeBtn.style.backgroundColor = "transparent";
        gridItems.forEach((item) =>{
            item.addEventListener('mouseover', () => item.style.backgroundColor = "white");
        });
    }   
}

function checkColourOrRainbowMode(){
    if(colourOrRainbowModeBtn.textContent == "colour mode"){
        changeToColourMode(gridItems);
    } else if(colourOrRainbowModeBtn.textContent == "rainbow mode"){
        changeToRainbowMode(gridItems);
    }
}

function colourRandomiser(){
    return '#'+Math.floor(Math.random()*16777215).toString(16);
}

function createGrid(noOfSquares){
    resetGrid();
    gridContainer.style.setProperty('grid-template-columns', 'repeat(' + noOfSquares + ', auto)');
    for(let i = 0; i < (noOfSquares*noOfSquares); i++){
        let gridItem = document.createElement("div");
        gridItem.classList.add("gridItem");
        gridContainer.appendChild(gridItem);
    }
}

function changeGridDensity(){
    createGrid(gridDensity);
    gridItems = document.querySelectorAll(".grid-container .gridItem");
    checkColourOrRainbowMode();
}

function clearSketch(){
    gridItems.forEach((item) =>{
        item.style.backgroundColor = "transparent";
    });
    resetButtonColor();
    checkColourOrRainbowMode();
}

function resetGrid(){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function changeToColourMode(){
    gridItems.forEach((item) =>{
        item.addEventListener('mouseover', () => item.style.backgroundColor = colour);
        item.style.border = "1px #e8effa solid";
    });
}

function changeToRainbowMode(){
    gridItems.forEach((item) =>{
        item.addEventListener('mouseover', () => item.style.backgroundColor = colourRandomiser());
        item.style.border = "1px #e8effa solid";
    });
}