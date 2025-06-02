let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-Btn");
let msgContener = document.querySelector(".msg-contener");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");

let tren = true;
const winPattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]

const resetGame = () =>{
    tren = true;
    enableBoxes();
    msgContener.classList.add("hide");
}

boxes.forEach((box) => {
        box.addEventListener("click",()=>{
            if(tren){
                box.innerText="O";  
                tren = false;  
                box.style.color = "white";
            }else{
                box.innerText="X";
                tren = true;
                box.style.color = "purple";
            }
            box.disabled = true;
            checkWinner();
        });
});

const disebleBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
};

const showWinner = (winner)=>{
msg.innerText = `congratulation , winner is ${winner}`;
msgContener.classList.remove("hide");
disebleBoxes();
}

const checkWinner = () =>{
    for(let pattern of winPattern){
                let pos1Value = boxes[pattern[0]].innerText;
                let pos2Value = boxes[pattern[1]].innerText;
                let pos3Value = boxes[pattern[2]].innerText;
                if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
                    if(pos1Value === pos2Value && pos2Value === pos3Value){
                        showWinner(pos1Value);
                    }
                }
    }
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);