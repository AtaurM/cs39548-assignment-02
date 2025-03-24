// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected = "Orange"; 
let grid = document.getElementById("grid");

// Color a cell with selected color
function updateCellColor(element) {
    element.style.backgroundColor = colorSelected;
}

// Add a row
function addR() {

    let newRow = grid.insertRow();
    ++numRows;

    // Case 1: No existing cells (creates 1x1)
    if (numCols == 0) {
        
        numCols = 1;
        let newCell = newRow.insertCell();
        newCell.onclick = () => updateCellColor(newCell);

    } else {

        for (let i = 0; i < numCols; ++i) {

            let newCell = newRow.insertCell();
            newCell.onclick = () => updateCellColor(newCell);

        }

    }

}

// Add a column
function addC() {
    
    if (numCols === 0) {

        numRows = 1;
        let newRow = grid.insertRow();
        let newCell = newRow.insertCell();
        newCell.onclick = () => updateCellColor(newCell);

    } else {

        for (let i = 0; i < numRows; ++i) {

            let newCell = grid.rows[i].insertCell();
            newCell.onclick = () => updateCellColor(newCell);

        }

    }

    ++numCols;

}

// Remove a row
function removeR() {
    
    // Delete last row if there are any
    if (numRows > 0) {

        grid.deleteRow(-1);
        --numRows;
    
    }

    // Reset column count if all rows are deleted
    if (numRows === 0) { numCols = 0; }

}

// Remove a column
function removeC() {
    
    if (numCols > 0) {

        for (let i = 0; i < numRows; ++i) {

            grid.rows[i].deleteCell(-1);

        }

        --numCols;

    }

    if (numCols === 0) {
        
        for (let i = 0; i < numRows; ++i) { grid.deleteRow(-1); }
        
        numRows = 0;
    
    };

}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}