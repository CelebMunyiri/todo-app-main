"use strict"
let sendBtn=document.querySelector(`.kadot`);
let checkSvg=document.querySelector('.checkSvg');
let inputValue=document.querySelector('.input');

sendBtn.addEventListener(`click`,()=>{
    sendBtn.style.background="linear-gradient(to bottom,hsl(192, 100%, 67%), hsl(280, 87%, 65%))";
checkSvg.style.opacity=1;
    console.log('clicked')

})
document.addEventListener('submit',(e)=>{
console.log(inputValue.value);
})

const form = document.getElementById('form')
form.addEventListener('submit',e=>{
    e.preventDefault()
console.log(inputValue.value);


})