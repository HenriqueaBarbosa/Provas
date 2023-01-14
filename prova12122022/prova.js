// ARQUIVO JAVASCRIPT

let numero;

function input_check() {

    if (document.querySelector('#numero').value.length < 3){
    numero = document.querySelector('#numero').value
    } else {
    document.querySelector('#numero').value = numero
    }
}