const form = document.querySelector('#form');
const input = document.querySelector('#input');
const todoUL = document.querySelector('#todos');


const todos = JSON.parse(localStorage.getItem('todos'));

 if (todos) {
     todos.forEach(todo =>{
        addtodo(todo)
     })
    }

form.addEventListener('submit', (e)=>{
     e.preventDefault();

     addtodo();
});

function addtodo(todo) {
    let todoText = input.value;
     if (todo) {
         todoText = todo.text;
        }

    if(todoText){
        const todoEl = document.createElement('li');
        if (todo && todo.com) {
            todoEl.classList.add('com');
        }
        todoEl.innerText = todoText;
        todoEl.addEventListener('click',()=>{
            todoEl.classList.toggle('com')
            updateLS();
        });
        todoEl.addEventListener('contextmenu', (e)=>{
             e.preventDefault();
             todoEl.remove();
             updateLS();
        })
        todoUL.appendChild(todoEl);
        input.value='';

        updateLS();
    }
}

function updateLS() {
    const todosEl = document.querySelectorAll('li');
    const todos = [];
    todosEl.forEach(todoEl =>{
      todos.push({
          text: todoEl.innerText,
          com: todoEl.classList.contains('com'),
      });

      localStorage.setItem('todos', JSON.stringify(todos))
    })
}