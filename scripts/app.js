'use strict'


const todoForm = document.getElementById('input-container');
const listContainer = document.querySelector('.list-container');
const doneListContainer = document.querySelector('.done-list-container');

document.getElementById('button-add').addEventListener('click', addTask)


function addTask() {

    if (todoForm.value == '') {
        return
    } else {
        const item = document.createElement('list-container__item');
        item.innerHTML = `<ul class="list-container">
        <li class="list-container__item">
            <span>${todoForm.value}</span>
            <span class="button-done"><img src="./images/done.svg" alt="www"></span>
            <span class="button-delete"><img src=" ./images/delete.svg"
                        alt="www"></span>
        </li>
    </ul>`

        item.querySelector('.button-done').addEventListener('click', () => {
            listContainer.removeChild(item);
            doneListContainer.appendChild(item)
        })
        item.querySelector('.button-delete').addEventListener('click', () => {
            listContainer.removeChild(item);
        })
        listContainer.appendChild(item)
    }
    todoForm.value = '';
}

addTask();


