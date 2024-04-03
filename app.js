'use strict'
const GI = {
    createElement(tag, atributes) {
        let element = document
        return document.createElement(tag)
    }
}
const createListElement = (item) => {
    const list = document.getElementById("list");
    list.innerHTML += "<li><div><p>" + item + "</p><input type=\"checkbox\" /></div></li>  "
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