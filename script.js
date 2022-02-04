
let canvas = document.querySelector('#canvas');

let gridChanger = document.getElementById(`myRange`);

let gridSize = 256;

let gridNumbers = document.getElementById('rangeNumbers');


//loop to create the divs that make the canvas.
function createCanvas(){
    for (pixels = 0; pixels < gridSize; pixels++){
        let pixels = document.createElement('div');
        pixels.classList.add('gridBlocks')
        canvas.appendChild(pixels);
    }
    }

    createCanvas(gridSize);

//function to removethe canvas before creating a new one.
function removeCanvas(){
    while (canvas.firstChild)
        canvas.firstChild.remove();

    }



// This change the value of the slider
gridChanger.addEventListener('input', function(e) {
   this.setAttribute('value',this.value);
   gridNumbers.textContent = gridChanger.value + " x " + gridChanger.value;
   gridSize = gridChanger.value * gridChanger.value;
   removeCanvas();
   createCanvas();
});



let pixelGrid = document.querySelectorAll('.gridBlocks')
let colorPickerChoice = document.getElementById('colorpicker');
let clearButton = document.getElementById('clearButton');


// code to paint a cell.
pixelGrid.forEach((pixel) => {
    pixel.addEventListener('click', function(e)  {
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


