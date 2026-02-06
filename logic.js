function initialization() {
    buildGrid(16, 16);
}

function buildGrid(width, height) {
    const grid = document.createElement("div");
    grid.id = "grid";
    grid.style.display = "flex";
    grid.style.flexWrap = "wrap";

    for(let i = 0; i < width; i++)
    {
        for(let j = 0; j < height; j++)
        {
            const cell = buildCell();
            grid.appendChild(cell);

            cell.addEventListener("mouseover", changeColorOnMouseOver);
        }
    }

    grid.style.width = `${20*width}px`;
    grid.style.height = `${20*height}px`;

    document.body.appendChild(grid);
}

function buildCell() {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.boxSizing = "border-box";
    cell.style.border = "solid 1px black";
    cell.style.width = "20px";
    cell.style.height = "20px";
    cell.style.flexBasis = "1";
    return cell;
}

function changeColorOnMouseOver(event) {
    event.target.classList.add("hovered");
}

initialization();