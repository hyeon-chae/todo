const form = document.querySelector('.js-form'),
  input = form.querySelector('input'),
  greeting = document.querySelector('.js-greetings'),
  todoForm = document.querySelector(".js-toDoForm")

const USER_LS = 'currentUser';

handleSubmit = (event) =>{
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

saveName = (text) =>{
  localStorage.setItem(USER_LS, text)
}

askForName = () => {
  form.classList.add('showing');
  form.addEventListener('submit', handleSubmit)

}

paintGreeting = (text) => {
  form.classList.add('hide');
  greeting.classList.add('showing');
  greeting.innerText = `Hello ${text}, How are you?`;
  todoForm.classList.add('showing')
}

loadName = () => {
  const currentUser = localStorage.getItem(USER_LS);
  if(currentUser === null){
    askForName();
  }else{
    paintGreeting(currentUser);
    // console.log(currentUser);
  }
}

init = () => {
  loadName();
}
init();