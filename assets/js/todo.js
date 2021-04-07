const todoInput = todoForm.querySelector('input'),
  // todoForm = document.querySelector('.js-toDoForm'),
  todoList = document.querySelector('.js-toDoList');

const TODOS_LS = '';

let todos = [];

deleteTodo = (event) => {
  const btn = event.target;
  const li = btn.parentNode;
  todoList.removeChild(li);
  const cleanTodos = todos.filter((todo) =>{
    return todo.id !== parseInt(li.id);
  });
  todos = cleanTodos;
  saveTodos();
}

saveTodos = () => {
  localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

paintTodo = (text) =>{
  const list = document.createElement('li');
  // const todoText = document.createElement('span');
  // const delBtn = document.createElement('button');
  const newId = todos.length + 1;
  // todoText.innerText = text;
  // delBtn.innerHTML = `<i class="fas fa-times"></i>`
  // list.appendChild(delBtn);
  // list.appendChild(todoText)
  list.id = newId;
  list.innerHTML =`
  <span>${text}</span>
  <button type="button" class="fas fa-times"></button>
  `
  todoList.appendChild(list);
  
  const delBtn = list.querySelector('button');
  // console.log(delBtn);
  delBtn.addEventListener('click', deleteTodo);

  const todoObj = {
    text: text,
    id: newId
  }
  todos.push(todoObj);
  saveTodos();
}

handleSubmit = (event) => {
  event.preventDefault();
  const currentValue = todoInput.value;
  paintTodo(currentValue);
  todoInput.value = '';
}

loadTodos = () => {
  const loadedTodos = localStorage.getItem(TODOS_LS);
  if(loadedTodos !== null){
    const parsedTodos = JSON.parse(loadedTodos);
    parsedTodos.forEach((todo)=>{
      paintTodo(todo.text)
    })
  }
}

init = () => {
  loadTodos();
  todoForm.addEventListener('submit', handleSubmit);
}
init();

