"use strict"
let sendBtn=document.querySelector(`.kadot`);
let checkSvg=document.querySelector('.checkSvg');
let inputValue=document.querySelector('.input');
let tasksClass=document.querySelector('.lower');
let completed=document.querySelector('.completed');
let clearCompleted=document.querySelector('.clearCompleted');
let all=document.querySelector('.all');
let tasks=[]


sendBtn.addEventListener(`click`,()=>{
    sendBtn.style.background="linear-gradient(to bottom,hsl(192, 100%, 67%), hsl(280, 87%, 65%))";
checkSvg.style.opacity=1;
    console.log('clicked')

})
document.addEventListener('submit',(e)=>{
    e.preventDefault();
console.log(inputValue.value);
todo.push(inputValue.value)
// let todoItems=todo.push(inputValue.value);
let task=document.createElement('div');
tasksClass.appendChild(task)

let parag=document.createElement('p')
for(let i=0;i<=todo.length;i++)
parag.innerText=todo[i]
task.appendChild(parag);



})
console.log(todo);

