//select gridContainer
const gridContainer = document.querySelector(".grid-container");

//let number of sides be input from user
let noOfSquares = howManySquaresPerSide();
//set no of columns of gridbox to noOfSquares
gridContainer.style.setProperty('grid-template-columns', 'repeat(' + noOfSquares + ', auto)');

//use for loop to create divs
for(let i = 0; i < (noOfSquares*noOfSquares); i++){
    let gridItem = document.createElement("div");
    gridItem.classList.add("gridItem");
    gridContainer.appendChild(gridItem);
}

//select all grid items
const gridItems = document.querySelectorAll(".grid-container .gridItem");

//for each grid item, add event listener to change colour
gridItems.forEach((item) =>{
    item.addEventListener('mouseover',changeColour);
    item.style.border = "2px thistle solid";
})

//function to change style property of grid items
function changeColour(){
    this.style.backgroundColor = "thistle";
}

//function to clear sketch (changing all grid item bg colour to white)
function clearSketch(){
    gridItems.forEach((item) =>{
        item.style.backgroundColor = "white";
    });
}

//function to return prompt of how many squares
function howManySquaresPerSide(){
    return prompt("How many squares per side?");
}

//select clear sketch button
const clearSketchBtn = document.querySelector("button");

//add event listener to button to clear sketch
clearSketchBtn.addEventListener('click',clearSketch);

