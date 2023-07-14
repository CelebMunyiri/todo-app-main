"use strict"

let tasksClass=document.querySelector('.lower');
let complete=document.querySelector('.complete');
let clearCompleted=document.querySelector('.clearCompleted');
let all=document.querySelector('.all');
const active=document.querySelector('.active')
const upperSide=document.querySelector('.upper')
let lowerBox=document.querySelector('.lowerBox');
let box2=document.querySelector('.box2')
let categories=document.querySelector('.categories')
let tasks=[]

const themeSwitch=document.querySelector('#sun');
const darkmode=document.querySelector('#moon');

themeSwitch.addEventListener('click',()=>{
upperSide.style.backgroundImage='url("/images/bg-desktop-light.jpg'
// if (themeSwitch.img.src === '/images/icon-moon.svg') {
//   themeSwitch.img.src =('/images/icon-sun.svg');
// } else {
//   themeSwitch.img.src=('/images/icon-moon.svg');
// }

lowerBox.style.background='hsl(0, 0%, 98%)';
darkmode.style.display = 'block'
themeSwitch.style.display = 'none'
tasksClass.style.background='hsl(236, 33%, 92%)';
box2.style.background='hsl(0, 0%, 98%)'
categories.style.background='hsl(0, 0%, 98%)'
})



document.addEventListener('submit',(e)=>{
  e.preventDefault();
addTask();
})



function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const task = {
      text: taskText,
      completed: document.getElementById('taskCheckbox').checked
    };
    tasks.push(task);
    taskInput.value = '';
    document.getElementById('taskCheckbox').checked = false;
    showAllTasks();
  }
}

function showAllTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    if (task.completed) {
      li.classList.add('completed');
    }
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.disabled = false; // Enable the checkbox
    checkbox.addEventListener('change', () => toggleTaskCompletion(index)); // Add event listener
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(task.text));
    taskList.appendChild(li);
  });
}


function showCompletedTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.filter(task => task.completed).forEach(task => {
    const li = document.createElement('li');
    li.classList.add('completed');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = true;
    checkbox.disabled = true;
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(task.text));
    taskList.appendChild(li);
  });
}

function showActiveTasks() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.filter(task => !task.completed).forEach((task, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = false;
    checkbox.disabled = false; // Enable the checkbox
    checkbox.addEventListener('change', () => toggleTaskCompletion(index)); // Add event listener
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(task.text));
    taskList.appendChild(li);
  });
}

function clearCompletedTasks() {
  tasks = tasks.filter(task => !task.completed);
  showAllTasks();
}

function toggleTaskCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  showAllTasks();
}

all.addEventListener('click',()=>showAllTasks());
active.addEventListener('click',()=>showActiveTasks());
complete.addEventListener('click',()=>showCompletedTasks());
clearCompleted.addEventListener('click',()=>clearCompletedTasks());
 