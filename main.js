let wordInput=document.querySelector("#word-input")
let currentWord=document.querySelector("#current-word")
let scoreDisplay=document.querySelector("#score")
let timeDisplay=document.querySelector("#time")

let time=5;
let score=0;  
// Array of Words
const words = [
    'ram',
    'kacebook',
    'instagram',
    'google',
    'tata',
    'wipro',
    'whatsapp',
    'joke',
    'developer',
    'computer',
    'hero',
    'javascript',
    'keyboard',
    'solve',
    'echo',
    'siblings',
    'investigate',
    'horrendous',
    'symptom',
    'laughter',
    'magic',
    'master',
    'space',
    'defintion'
    ];

window.addEventListener("DOMContentLoaded",init)
function init(){
    showWord(words)
    wordInput.addEventListener("input",startMatch)
    setInterval(countdown,1000)
    setInterval(checkStatus,50)
}
 function showWord(words){
     const randomIndex=Math.floor(Math.random()*words.length);
    currentWord.innerHTML=words[randomIndex]
}
function startMatch(){
   if(matchWord()){
    showWord(words)
    wordInput.value=''
    message.innerHTML="Correct!!"
        score++;
        time=6;
   }
   else{
   message.innerHTML="InCorrect!!"
}
scoreDisplay.innerHTML=score
}
function matchWord(){
    if(currentWord.innerHTML===wordInput.value){
        return true;
    }    
}
function countdown(){
    if(time>0)
        time--
        timeDisplay.innerHTML=time
        score=-1
}
function checkStatus(){
    if(time==0){
        message.innerHTML="GAME OVER!"
      score=1
    }
}
