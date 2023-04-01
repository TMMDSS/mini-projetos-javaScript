'use strict'

const imagens = [
    {'id': '1', 'url':'imagens/chrono.jpg'},
    {'id': '2', 'url':'imagens/inuyasha.jpg'},
    {'id': '3', 'url':'imagens/tenchi.jpg'},
    {'id': '4', 'url':'imagens/tenjhotenge.jpg'},
    {'id': '5', 'url':'imagens/yuyuhakusho.jpg'},
    {'id': '6', 'url':'imagens/ippo.png'},

]

const containerItems = document.querySelector('div#container-items')


const loadImagens = (imagens, container) => {
    imagens.forEach (image => {
        container.innerHTML += `
        <div class='item'>
            <img src='${image.url}'
        </div>`
    });
}

loadImagens(imagens,containerItems)

let items = document.querySelectorAll('.item')

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item')
}

const next = () => {
    const lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')
}

document.querySelector('#previous').addEventListener('click', next)
document.querySelector('#next').addEventListener('click', previous)