console.log(`Welcome to Tic Tac Toe`);
let music= new Audio("./musics/music.mp3")
let ting= new Audio("./musics/ting.mp3")
let gameover= new Audio("./musics/gameover.mp3")
let isGameOver =false;

let turn ="X"

//Fuction to change the turn on
const changeTurn=()=>{
    return turn === "X"?"0": "X"
}

//Fuction to check win

const checkWin =()=>{
    let boxtexts = document.getElementsByClassName('boxtext');

let wins = [
    [0,1,2,5,5,0],
    [3,4,5,5 ,15,0],
    [6,7,8,5,25,0],
    [0,3,6,-5,15,90],
    [1,4,7,5 ,15,90],
    [2,5,8,15,15,90],
    [0,4,8,5,15,45],
    [2,4,6,5,15,135],
]
wins.forEach(e =>{
    if((boxtexts[e[0]].innerText=== boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText=== boxtexts[e[2]].innerText) && (boxtexts [e[0]].innerText!== "")){
        document.querySelector('.Info').innerText = boxtexts[e[0]].innerText +" has won the game"
        isGameOver =true;
        document.querySelector('.imgBox').getElementsByTagName('img')[0].style.height ="200px"; 
        document.querySelector(".line").style.width ="20vw";
 
        document.querySelector(".line").style.transform =`translate( ${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
        gameover.play();
    }
})

}


// Main Game logic
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText ==''){
            boxtext.innerText = turn;
            turn= changeTurn();
            ting.play();
            checkWin();
            if(!isGameOver){
               document.getElementsByClassName("Info")[0].innerText ="Turn for  "+ turn;
            }
        }
    })
})

//Add onclick listner to reset button
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText =""
    });

     turn= "X"
     isGameOver=false;
     document.querySelector(".line").style.width ="0vw";
     document.getElementsByClassName("Info")[0].innerText ="Turn for "+ turn;
     document.querySelector('.imgBox').getElementsByTagName('img')[0].style.height ="0"; 
    })

