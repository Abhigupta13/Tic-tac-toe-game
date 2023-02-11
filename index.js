console.log(`Welcome to Tic Tac Toe`);
let music= new Audio("./musics/music.mp3")
let ting= new Audio("./musics/ting.mp3")
let gameover= new Audio("./musics/gameover.mp3")

let turn ="X"

//Fuction to change the turn on
const changeTurn=()=>{
    return turn === "X"?"0": "X"
}

//Fuction to check win

const checkWin =()=>{

}


// Main Game logic

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText ==''){
            boxtext.innerText = turn;
            turn= changeTurn();
            ting.play();
            checkWin();
            document.getElementsByClassName("Info")[0].innerText ="Turn for  "+ turn;
        }
    })
})


