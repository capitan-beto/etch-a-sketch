let userInput = prompt("type");
let input = Number(userInput);
 
function  setGrid(input){
    const container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);
    for (let i = 0; i < input; i++){
        const parentDiv = document.createElement("div");
        parentDiv.classList.add("row");
        parentDiv.textContent = "";
        container.appendChild(parentDiv);

        for (let i = 0; i < input; i++){
            const childDiv = document.createElement("div");
            childDiv.classList.add("column");
            childDiv.textContent = "";
            parentDiv.appendChild(childDiv);
        } 
    }
}



setGrid(input);

