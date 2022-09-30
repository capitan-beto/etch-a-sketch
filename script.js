let userInput = prompt("Type a number", "Max 100");
let input = Number(userInput);


function checkInput(input){
    if (input > 100){
        alert("Dumb-o! the max is 100");
        document.location.reload();
        return;
    } else if (input === "  " || null || undefined){
        alert("Type a num dumb dumb");
        document.location.reload();
        return;
    }
}
 
function  setGrid(input){
    if (input > 100){
        alert("Dumb-o! the max is 100");
        return;
    } else if (input > 0 && input <= 100){     
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
    } else {
        document.location.reload();
    }
}

setGrid(input);

