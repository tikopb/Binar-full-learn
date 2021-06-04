var comChoose = 0;
const comVariabelIdList = ["batu2", "kertas2", "gunting2"];
const batuPlayer = document.getElementById("batu1").onclick = batuFunction

function getRandomMathOfCom(){ // generate what com player choose on random math
    comChoose = Math.floor(Math.random() * 3);  
}

function SetColorBackgroundCom(comVariabelId){
    let computerChoose = comVariabelIdList[comVariabelId];
    console.log(computerChoose)
    document.getElementById(computerChoose).style.background='#808080';
}

function batuFunction(){ 
    getRandomMathOfCom()
    console.log(comChoose)
    SetColorBackgroundCom(comChoose)
    document.getElementById("batu1Container").style.backgroundColor='#808080';
}

function kertasFunction(){ 
    getRandomMathOfCom()
    document.getElementById("kertas1").style.backgroundColor='#808080';
}

function guntingFunction(){ 
    document.getElementById("gunting1").style.backgroundColor='#808080';
}