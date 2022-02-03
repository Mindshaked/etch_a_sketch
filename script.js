
let canvas = document.querySelector('#canvas');

let gridChanger = document.getElementById(`myRange`);


let gridSize = gridChanger.value * gridChanger.value;

for (pixels = 0; pixels < gridSize; pixels++){
    let pixels = document.createElement('div');
    pixels.classList.add('gridBlocks')

    canvas.appendChild(pixels);
}


let pixelGrid = document.querySelectorAll('.gridBlocks')
let colorPickerChoice = document.getElementById('colorpicker');
let clearButton = document.getElementById('clearButton');


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




console.log(gridChanger.value);
/* //so you can paint while keeping the mouse button down.

pixelGrid.forEach((pixel) => {
    pixel.addEventListener('mousedown', function(e)  {
        pixel.style.backgroundColor = "black"
    });

});

*/
