const grid = document.querySelector("#container");
const sqBtn = document.querySelector("#squaresBtn")
let width = 16; //hard coded number of squares to start

//grid.style.width = (width*16) + "px"; //set width of the container
//grid.style.height = (width*16) + "px";

sqBtn.addEventListener('click',() => {
    let setWidth = grid.style.width;
    let setHeight = grid.style.height;



    if (grid.hasChildNodes) {
        while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
        }
    }

let squares = prompt("How many squares do you require?");
if (squares>100) {
    squares = prompt("Please choose a number under 100")
}

if (setHeight === "") {
    grid.style.width = (squares*squares) + "px";
    grid.style.height = (squares*squares) + "px";       
} else {
    grid.style.width = setWidth
    grid.style.height = setHeight
}


for (let x = 0; x < squares; x++) {
    for (let i = 0; i < squares; i++ ) {
        const box = document.createElement("div");
        const basis = (100/squares);
        box.style.flexBasis = basis + "%";
        //box.textContent = "o";
        box.setAttribute("id", "box");
        
        grid.appendChild(box)
    }
}
})

