
let canvas = document.querySelector('#canvas');

let gridSize = 575;

let gridNumbers = document.getElementById('rangeNumbers');

let noGridlines = document.getElementById('noBorder');

let gridblocks = document.getElementsByClassName('gridBlocks');


//loop to create the divs that make the canvas.
function createCanvas(){
    for (pixels = 0; pixels < gridSize; pixels++){
        let pixels = document.createElement('div');
        pixels.classList.add('gridBlocks')
        canvas.appendChild(pixels);
    }
    }

    createCanvas(gridSize);

//function to remove the canvas before creating a new one.
function removeCanvas(){
    while (canvas.firstChild)
        canvas.firstChild.remove();

    }


// This change the size of the grid

let sixteen = document.getElementById('sixteen');
let twentyfour = document.getElementById('twentyfour');
let thirty = document.getElementById('thirty');


/*
sixteen.addEventListener('click', function(e) {
   gridSize = 256;
   removeCanvas();
   createCanvas();
});

twentyfour.addEventListener('click', function(e) {
    gridSize = 575;
    removeCanvas();
    createCanvas();
 });

 thirty.addEventListener('click', function(e) {
    gridSize = 900;
    removeCanvas();
    createCanvas();
 });
*/


let pixelGrid = document.querySelectorAll('.gridBlocks')
let colorPickerChoice = document.getElementById('colorpicker');
let clearButton = document.getElementById('clearButton');


// code to paint a cell.
pixelGrid.forEach((pixel) => {
    pixel.addEventListener('mousedown', function(e)  {
        pixel.style.backgroundColor = colorPickerChoice.value;
    });
    
});

//Button to clear the grid.

let whiteColor = '#ffffff'

clearButton.addEventListener('click', function(e) {
    for (let i = 0; i < pixelGrid.length; i++){
        pixelGrid[i].style.backgroundColor = whiteColor;
    }
      
});


//eraser button
let eraserButton = document.getElementById('eraser');

eraserButton.addEventListener('click', function(e) {
    colorPickerChoice.value = '#ffffff';
});



//this removes the gridlines


noGridlines.addEventListener('click', function(e) {
    if (gridblocks[1].style.border == "1px solid rgb(184, 184, 184)"){
        for (let i = 0; i < gridblocks.length; i++){
        gridblocks[i].style.border = "none";
        gridblocks[i].style.padding = "1px";
        }

    } else {
        for (let i = 0; i < gridblocks.length; i++){
            gridblocks[i].style.border = "1px solid rgb(184, 184, 184)";
            gridblocks[i].style.padding = "0px";
    }
    }
});


