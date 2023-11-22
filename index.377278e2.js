const SQUARE_MIN_DIM = 100;
let bgDiv;
let toggleBgButton;
let bgDisabled = false;
// from https://www.freecodecamp.org/news/javascript-debounce-example/
function debounce(func, timeout = 50) {
    let timer;
    return ()=>{
        clearTimeout(timer);
        timer = setTimeout(func, timeout);
    };
}
function redrawSquares() {
    if (!bgDiv) return;
    bgDiv.innerHTML = "";
    const windowHeight = window.innerHeight;
    const windowWidth = window.innerWidth;
    const numOfRows = Math.max(Math.floor(windowHeight / SQUARE_MIN_DIM), 1);
    const numOfColumns = Math.max(Math.floor(windowWidth / SQUARE_MIN_DIM), 1);
    for(let iRow = 0; iRow < numOfRows; iRow++)for(let iColumn = 0; iColumn < numOfColumns; iColumn++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("bg-cell");
        newDiv.classList.add(`rotation-${Math.floor(Math.random() * 4)}`);
        newDiv.classList.add(`tf-origin-${Math.floor(Math.random() * 5)}`);
        newDiv.classList.add(`color-${Math.floor(Math.random() * 4)}`);
        bgDiv.appendChild(newDiv);
    }
}
const debouncedRedrawSquares = debounce(redrawSquares);
function toggleBackground() {
    bgDisabled = !bgDisabled;
    if (bgDisabled && bgDiv) bgDiv.classList.add("hidden");
    else if (bgDiv) bgDiv.classList.remove("hidden");
}
document.onreadystatechange = ()=>{
    bgDiv = document.getElementById("background");
    toggleBgButton = document.getElementById("toggle-background");
    if (toggleBgButton) toggleBgButton.addEventListener("click", toggleBackground);
    redrawSquares();
    window.addEventListener("resize", debouncedRedrawSquares);
};

//# sourceMappingURL=index.377278e2.js.map
