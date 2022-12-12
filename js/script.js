//Seleção dos elementos
const form = document.querySelector('#form')
const num1 = document.querySelector('#n1')
const num2 = document.querySelector('#n2')
const num3 = document.querySelector('#n3')
const erro = document.querySelector('.erro')
const modal = document.querySelector('.modal')
const container = document.querySelector('.form')
const maiorn = document.querySelector('#maior')
const intern = document.querySelector('#intermediario')
const menorn = document.querySelector('#menor')
const fechar = document.querySelector('#fechar')

//variaveis globais
var maior = 0
var intermediario = 0
var menor = 0

//funçoes
const verifyInput = (n1, n2, n3) => {
    if (n1 == n2 || n1 == n3 || n2 == n3 || n1.length == 0 || n2.length == 0 || n3.length == 0) {
        return true
    } else {
        return false
    }
}

const verifynum = (n1, n2, n3) => {
    if (n1 > n2 && n1 < n3) {
        maior = n3
        intermediario = n1
        menor = n2
    } else if (n1 < n2 && n1 > n3) {
        maior = n2
        intermediario = n1
        menor = n3
    } else if (n1 > n2 && n2 > n3) {
         maior = n1
         intermediario = n2
         menor = n3
    } else if (n1 < n2 && n2 < n3) {
        maior = n3
        intermediario = n2
        menor = n1
    } else if (n3 > n2 && n3 < n1) {
        maior = n1
        intermediario = n3
        menor = n2
    } else {
        maior = n2
        intermediario = n3
        menor = n1
    }

    maiorn.innerHTML = maior
    intern.innerHTML = intermediario
    menorn.innerHTML = menor
}


//eventos
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (verifyInput(num1.value, num2.value, num3.value)) {
        erro.classList.remove('hide')
        num1.value = ''
        num2.value = ''
        num3.value = ''
        num1.focus()
    } else {
        modal.classList.remove('hide')
        container.classList.add('hide')
        verifynum(Number(num1.value), Number(num2.value), Number(num3.value))
        num1.value = ''
        num2.value = ''
        num3.value = ''
    }
})

fechar.addEventListener('click', () => {
    modal.classList.add('hide')
    container.classList.remove('hide')
    erro.classList.add('hide')
    num1.focus()
})