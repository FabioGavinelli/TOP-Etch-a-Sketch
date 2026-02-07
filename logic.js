
function buildGrid(width, height) {
    const grid = document.querySelector("#grid");
    console.log(grid.offsetWidth);
    
    for(let i = 0; i < width; i++)
        {
            for(let j = 0; j < height; j++)
                {
                    const cell = buildCell(grid.offsetWidth, grid.offsetHeight, width, height);
                    grid.appendChild(cell);
                    
                    cell.addEventListener("mouseover", changeColorOnMouseOver);
                }
            }
            
            document.body.appendChild(grid);
        }
        
function buildCell(gridWidth, gridHeight, rowElements, colElements) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.boxSizing = "border-box";
    cell.style.border = "solid 1px black";
    cell.style.width = `${gridWidth / rowElements}px`;
    cell.style.height = `${gridHeight / colElements}px`;
    cell.style.flexBasis = "1";
    return cell;
}

function changeColorOnMouseOver(event) {
    event.target.classList.add("hovered");
}

function setUpResetButton() {
    const resetBtn = document.querySelector("#rstBtn");

    resetBtn.addEventListener("click", () => {

        let dim = 0;

        do {
            dim = prompt("Insert the new grid dimension (max 100)");
        } while (dim > 100)
        

        resetGrid(dim, dim);
    });
}

function resetGrid(width, height) {
    const grid = document.querySelector("#grid");
    
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild);
    }

    buildGrid(width, height);
}

buildGrid(16, 16);
setUpResetButton();