let input = getInput();
let newInput = input;
const bnwGrid = document.querySelector(".set-bnw");  
const colorGrid = document.querySelector(".set-color");

function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
}     

function setGrid(input){
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
            parentDiv.style.backgroundColor = "white"
            parentDiv.textContent = "";
            container.appendChild(parentDiv);
        for (let i = 0; i < input; i++){
            const childDiv = document.createElement("div");
            childDiv.classList.add("column");
            childDiv.textContent = "";
            parentDiv.appendChild(childDiv);
            childDiv.addEventListener("dragover", function(){
                childDiv.style.backgroundColor = randomColor();
            });
            const bnwGrid = document.querySelector(".set-bnw");  
            bnwGrid.addEventListener("click", () =>{
                bnwGrid.style.fontWeight = "bold";
                colorGrid.style.fontWeight = "normal";
                childDiv.style.backgroundColor = "white";
                childDiv.addEventListener("dragover", () =>{
                        childDiv.style.backgroundColor = "rgba(0, 0, 0, 1)";
                    })
            })
            const colorGrid = document.querySelector(".set-color");
            colorGrid.addEventListener("click", () => {
                bnwGrid.style.fontWeight = "normal";
                colorGrid.style.fontWeight = "bold";
                childDiv.style.backgroundColor = "white";
                childDiv.addEventListener("dragover", () => {
                    childDiv.style.backgroundColor = randomColor();
                })
            })
        } 
        }
    } else {
        document.location.reload();
    }
}



setGrid(input);

const buttons = document.querySelectorAll("button");
buttons.forEach((item) => {
    item.addEventListener("click", () =>{
        if(item.id === "salmon"){
            document.body.style.backgroundColor = "rgb(255, 148, 148)";
        } else if(item.id == "lilac"){
            document.body.style.backgroundColor = "rgb(198, 137, 198)";
        } else if(item.id == "green"){
            document.body.style.backgroundColor = "rgb(225, 255, 177)";
        } else if(item.id == "lightblue"){
            document.body.style.backgroundColor = "rgb(238, 241, 255)";
        }
    })
})


function getInput() {
    const input  = document.querySelector("#selector").value;
    return input;
}

const set = document.querySelector(".set");
set.addEventListener("click", () => {
    const element = document.querySelector(".container");
    input = getInput();
    element.remove();
    setGrid(input);
})