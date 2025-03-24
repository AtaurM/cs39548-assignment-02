// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected = ""; 
let grid = document.getElementById("grid");

// Color a cell with selected color
function updateCellColor(element) {
    element.style.backgroundColor = colorSelected;
    console.log(element.style.backgroundColor);
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

    // Case 2: Fill new row with 1 cell for each column
    } else {

        for (let i = 0; i < numCols; ++i) {

            let newCell = newRow.insertCell();
            newCell.onclick = () => updateCellColor(newCell);

        }

    }

}

// Add a column
function addC() {
    
    // Case 1: No existing cells (create 1x1)
    if (numCols === 0) {

        numRows = 1;
        let newRow = grid.insertRow();
        let newCell = newRow.insertCell();
        newCell.onclick = () => updateCellColor(newCell);

    // Case 2: Add 1 cell to the end of each existing row
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
    
    // If there are columns, delete the last cell in each row
    if (numCols > 0) {

        for (let i = 0; i < numRows; ++i) {

            grid.rows[i].deleteCell(-1);

        }

        --numCols;

    }

    // Remove empty table row elements
    if (numCols === 0) {
        
        for (let i = 0; i < numRows; ++i) { grid.deleteRow(-1); }
        
        numRows = 0;
    
    };

}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU() {
    
    // Return if no color is selected
    if (colorSelected === "" || colorSelected === "SELECT") return;

    // Else, iterate grid and color empty cells
    for (let row = 0; row < numRows; ++row) {

        for (let col = 0; col < numCols; ++col) {
            
            let curr = grid.rows[row].cells[col];
            
            if (curr.style.backgroundColor === "") {

                updateCellColor(curr);

            }

        }

    }

}

// Fill all cells
function fillAll() {

    // Return if no color is selected
    if (colorSelected === "" || colorSelected === "SELECT") return;

    // Else iterate through grid and color every cell
    for (let row = 0; row < numRows; ++row) {

        for (let col = 0; col < numCols; ++col) {
            
            updateCellColor(grid.rows[row].cells[col]);

        }

    }

}

// Clear all cells
function clearAll(){
    
    // Iterate through grid and reset color of all cells
    for (let row = 0; row < numRows; ++row) {

        for (let col = 0; col < numCols; ++col) {
            
            grid.rows[row].cells[col].style.backgroundColor = "";

        }

    }

}
