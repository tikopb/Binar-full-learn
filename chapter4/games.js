//difine masterVariabel
var comChoose = null;
var plyChoose = null;
const player1VariabelIdList = ["batu1", "kertas1", "gunting1"];
const comVariabelIdList = ["batu2", "kertas2", "gunting2"];
const batuPlayer = document.getElementById("batu1").onclick = batuAction
const kertasPlayer = document.getElementById("kertas1").onclick = kertasAction
const guntingPlayer = document.getElementById("gunting1").onclick = guntingAction

const imagePath = "img/"
const winImagePath = "/player1.png"
const loseImagePath = "/comWin.png"
let resultImg = document.getElementById("result")

//main function 
function batuAction(){ 
    if(plyChoose!=null){
        return alert("Reset The Game please press refresh!")
    }
    getRandomMathOfCom()
    plyChoose = 0
    SetColorBackgroundCom(comChoose)
    SetColorBackgroundPly(plyChoose)
    validationOfTheWinner(plyChoose,comChoose)
}

function kertasAction(){ 
    if(plyChoose!=null){
        return alert("Reset The Game please press refresh!")
    }
    getRandomMathOfCom()
    plyChoose = 1
    SetColorBackgroundCom(comChoose)
    SetColorBackgroundPly(plyChoose)
    validationOfTheWinner(plyChoose,comChoose)
}

function guntingAction(){ 
    if(plyChoose!=null){
        return alert("Reset The Game please press refresh!")
    }
    getRandomMathOfCom()
    plyChoose = 2
    SetColorBackgroundCom(comChoose)
    SetColorBackgroundPly(plyChoose)
    validationOfTheWinner(plyChoose,comChoose)
}

function getRandomMathOfCom(){ // generate what com player choose on random math
    comChoose = Math.floor(Math.random() * 3)  ;  
}

function SetColorBackgroundCom(comVariabelId){
    let computerChoose = comVariabelIdList[comVariabelId];
    console.log(computerChoose+" com")
    document.getElementById(computerChoose).style.background='#808080';
}

function SetColorBackgroundPly(comVariabelId){
    let playerChoose = player1VariabelIdList[comVariabelId];
    console.log(playerChoose+" ply")
    document.getElementById(playerChoose).style.background='#808080';
}

function validationOfTheWinner(player, computer){
    let ply = parseInt(player)
    let com = parseInt(computer)
    console.log(ply + "  || " + com )
    if(ply == com){
        resultImg.src = imagePath+"/draw.png"
    }else if (ply == 0){
        if(com==1){
            resultImg.src = imagePath+loseImagePath
        }else{
            resultImg.src = imagePath+winImagePath
        }
    }
    else if (ply == 1){
        if(com==2){
            resultImg.src = imagePath+loseImagePath
        }else{
            resultImg.src = imagePath+winImagePath
        }
    }
    else if (ply == 2){
        if(com==0){
            resultImg.src = imagePath+loseImagePath
        }else{
            resultImg.src = imagePath+winImagePath
        }
    }
    
}