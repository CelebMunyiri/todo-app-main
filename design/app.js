"use strict"
let checkSvg=document.querySelector('.checkSvg');
let inputValue=document.querySelector('.input');
let tasksClass=document.querySelector('.lower');
let complete=document.querySelector('.complete');
let clearCompleted=document.querySelector('.clearCompleted');
let all=document.querySelector('.all');
const active=document.querySelector('.active')
const upperSide=document.querySelector('.upper')
let tasks=[]

const themeSwitch=document.querySelector('.box1');

themeSwitch.addEventListener('click',()=>{
upperSide.style.backgroundImage=`url("/images/bg-desktop-light.jpg")`
if (themeSwitch.getAttribute('src') === '/images/icon-moon.svg') {
  themeSwitch.setAttribute('src', '/images/icon-sun.svg');
} else {
  themeSwitch.setAttribute('src', '/images/icon-moon.svg');
}
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
 