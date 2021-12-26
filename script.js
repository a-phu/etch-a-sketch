//select gridContainer - global
const gridContainer = document.querySelector(".grid-container");

//let number of sides be input from user
createGrid(howManySquaresPerSide());

//select all grid items
let gridItems = document.querySelectorAll(".grid-container .gridItem");

//declare global variable colour for pen colour
let colour = '';

//add event listeners to grid items to change colour when mouseover
addMouseoverEventListenerForGridItem(gridItems);

//select clear sketch button and add event listener
const clearSketchBtn = document.querySelector("#clearSketch");
clearSketchBtn.addEventListener('click',clearSketch);

//select grid density button and add event listener
const gridDensityBtn = document.querySelector("#changeGridDensity");
gridDensityBtn.addEventListener('click',changeGridDensity);

//select colour picker input
const colourPickerInput = document.querySelector("#colourPicker");

//add event listener which will set global variable colour to whatever user has chosen
colourPickerInput.addEventListener("change", e => {
    colour = e.target.value;
});

//function to return prompt of how many squares
function howManySquaresPerSide(){
    return prompt("How many squares per side?");
}

//create grid with no of squares per row passed as parameter
function createGrid(noOfSquares){
    resetGrid();
    gridContainer.style.setProperty('grid-template-columns', 'repeat(' + noOfSquares + ', auto)');
    for(let i = 0; i < (noOfSquares*noOfSquares); i++){
        let gridItem = document.createElement("div");
        gridItem.classList.add("gridItem");
        gridContainer.appendChild(gridItem);
    }
}

//function to clear sketch and prompt user for new number of grid items
function changeGridDensity(){
    createGrid(howManySquaresPerSide());
    gridItems = document.querySelectorAll(".grid-container .gridItem");
    addMouseoverEventListenerForGridItem(gridItems);
}

function clearSketch(){
    gridItems.forEach((item) =>{
        item.style.backgroundColor = "white";
    });
}

//remove all divs from grid container
function resetGrid(){
    while(gridContainer.firstChild){
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

//function to add event listeners to grid items
function addMouseoverEventListenerForGridItem(gridItems){
    gridItems.forEach((item) =>{
        item.addEventListener('mouseover',changeColour);
        item.style.border = "2px thistle solid";
    });
}

//function to change style property of grid items
function changeColour(){
    this.style.backgroundColor = colour;
}