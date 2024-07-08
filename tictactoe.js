let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#newgame");
let msg_container = document.querySelector(".game-container");
let win = document.querySelector("#win");

let turn0 = true;
const winpatterns =[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,4,6],
[2,5,8],
[3,4,5],
[6,7,8]];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box is clicked")
        if(turn0){
            box.innerText = "O";
            turn0=false;
        }
        else{
            box.innerText ="X";
            turn0 = true;
        }
        box.disabled = true;
        check_win();
    })
})
const check_win=()=>{
    for(let pattern of winpatterns){
        let pos1 =boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 !="" && pos2!="" && pos3!=""){
            if(pos1==pos2 && pos2==pos3){
                show_winner(pos1); 
               
            }
        }
    }
}
const reset_game=()=>{
    turn0 = true;
    enable_btns();
    msg_container.classList.add("hide")
}
const disable_btns = ()=>{
    for(box of boxes){
        box.disabled=true;
    }
}
const show_winner=(winner)=>{
    win.innerText=`WINNER is ${winner}!!`;
    msg_container.classList.remove("hide");
    disable_btns();
}
const enable_btns = ()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

newgame.addEventListener("click",reset_game);
reset.addEventListener("click",reset_game);
