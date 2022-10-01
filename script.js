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


function sushiColor(){
    let color = [];
    
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
                childDiv.addEventListener("mouseover", function(){
                    childDiv.style.backgroundColor = randomColor();
                });
                const bnwGrid = document.querySelector(".set-bnw");  
                bnwGrid.addEventListener("click", () =>{
                    childDiv.style.backgroundColor = "white";
                    childDiv.addEventListener("mouseover", () =>{
                            childDiv.style.backgroundColor = "rgba(0,0,0,1)";
                        })
                })
                const colorGrid = document.querySelector(".set-color");
                colorGrid.addEventListener("click", () => {
                    childDiv.style.backgroundColor = "white";
                    childDiv.addEventListener("mouseover", () => {
                        childDiv.style.backgroundColor = randomColor();
                        {once:true}
                    })
                })
            } 
        }
    } else {
        document.location.reload();
    }
}

setGrid(input);


