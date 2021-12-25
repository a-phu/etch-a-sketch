//select gridContainer - global
const gridContainer = document.querySelector(".grid-container");

//let number of sides be input from user
createGrid(howManySquaresPerSide());

//select all grid items
let gridItems = document.querySelectorAll(".grid-container .gridItem");

//add event listeners to grid items to change colour when mouseover
addMouseoverEventListenerForGridItem(gridItems);

//select clear sketch button
const clearSketchBtn = document.querySelector("button");

//add event listener to button to clear sketch
clearSketchBtn.addEventListener('click',clearSketch);

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
function clearSketch(){
    createGrid(howManySquaresPerSide());
    gridItems = document.querySelectorAll(".grid-container .gridItem");
    addMouseoverEventListenerForGridItem(gridItems);
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
    this.style.backgroundColor = "thistle";
}