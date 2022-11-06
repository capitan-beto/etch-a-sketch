let userInput = prompt("Type a number", "Max 100");
let input = Number(userInput);
let newInput = input;



function randomColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
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
            parentDiv.style.backgroundColor = "white"
            parentDiv.textContent = "";
            container.appendChild(parentDiv);
        for (let i = 0; i < input; i++){
            const childDiv = document.createElement("div");
            childDiv.classList.add("column");
            childDiv.textContent = "";
            parentDiv.appendChild(childDiv);
            childDiv.addEventListener("mouseover", function(){
                childDiv.style.backgroundColor = randomColor();
            });
            const bnwGrid = document.querySelector(".set-bnw");  
            bnwGrid.addEventListener("click", () =>{
                childDiv.style.backgroundColor = "white";
                childDiv.addEventListener("mouseover", () =>{
                        childDiv.style.backgroundColor = "rgba(0, 0, 0, .1)";
                    })
            })
            const colorGrid = document.querySelector(".set-color");
            colorGrid.addEventListener("click", () => {
                childDiv.style.backgroundColor = "white";
                childDiv.addEventListener("mouseover", () => {
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

const setGreen = document.querySelector(".set-green");
setGreen.addEventListener("click", () => {
    document.body.style.backgroundColor = "rgb(225, 255, 177)";
})

const setLilac= document.querySelector(".set-lilac");
setLilac.addEventListener("click", () => {
    document.body.style.backgroundColor = "rgb(198, 137, 198)";
})

const setSalmon = document.querySelector(".set-salmon");
setSalmon.addEventListener("click", () => {
    document.body.style.backgroundColor = "rgb(255, 148, 148)";
})


