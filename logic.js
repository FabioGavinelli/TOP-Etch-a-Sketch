function initialization() {   
    buildGrid(16, 16);
}

function buildGrid(width, height) {
    const grid = document.querySelector("#grid");
    console.log(grid.offsetWidth);

    for(let i = 0; i < width; i++)
    {
        for(let j = 0; j < height; j++)
        {
            const cell = buildCell(grid.offsetWidth, grid.offsetHeight);
            grid.appendChild(cell);
            
            cell.addEventListener("mouseover", changeColorOnMouseOver);
        }
    }

    document.body.appendChild(grid);
}

function buildCell(gridWidth, gridHeight) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.boxSizing = "border-box";
    cell.style.border = "solid 1px black";
    cell.style.width = `${gridWidth / 16}px`;
    cell.style.height = `${gridHeight / 16}px`;
    cell.style.flexBasis = "1";
    return cell;
}

function changeColorOnMouseOver(event) {
    event.target.classList.add("hovered");
}

initialization();