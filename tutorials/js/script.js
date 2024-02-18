let button = window.document.getElementById('button');
let text = window.document.getElementById('text');

button.addEventListener('click', clique)
button.addEventListener('mouseenter', entrar)
button.addEventListener('mouseout', sair)

text.innerText = 'clique aqui!';

function clique() {
    button.style.background = 'mediumseagreen'
    text.innerText = 'parabéns!'
}
function entrar() {
    button.style.scale = '1.1'
}
function sair() {
    button.style.scale = '1'
}