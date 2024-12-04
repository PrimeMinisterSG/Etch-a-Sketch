const grid = document.querySelector("#container");
const sqBtn = document.querySelector("#button")
const width = 20; //hard coded number of squares

grid.style.width = (width*16) + "px"; //set width of the container

//sqBtn.addEventListener('click',() => {

for (let x = 0; x < width; x++) {
    for (let i = 0; i < width; i++ ) {
        const box = document.createElement("div");
        const basis = (100/width);
        box.style.flexBasis = basis + "%";
        box.textContent = "o";
        box.setAttribute("id", "box");
        
        grid.appendChild(box)
    }
}


