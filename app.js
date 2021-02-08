const form = document.querySelector('form');
const ul = document.querySelector('ul');
const lis = document.querySelectorAll('li');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const todo = form.elements.todo.value;
    const li = document.createElement('li');
    const text = document.createTextNode(`${todo}`);
    li.appendChild(text);
    ul.appendChild(li);
    form.elements.todo.value = '';
});