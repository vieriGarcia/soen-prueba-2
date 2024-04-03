'use strict'
const GI = {
    createElement(tag, atributes) {
        let element = document
        return document.createElement(tag)
    }
}
const createListElement = (item) => {
    const list = document.getElementById("list");
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const label = document.createElement('label');
    label.textContent = item;

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            label.classList.add('completed');
        } else {
            label.classList.remove('completed');
        }
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(label);
    list.appendChild(listItem);
}


const prueba2 = (array) => {
    array.forEach(item => {
        createListElement(item);
    });
}



const to_do = [
    'Alimentar al perro',
    'Estudiar para prueba escrita',
    'Pagar taxes',
    'Pasear a perro',
    'Comprar entradas para el cine',
]

prueba2(to_do);