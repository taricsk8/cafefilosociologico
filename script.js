window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    
    // Verifica se a rolagem vertical é maior que 0
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});
let indiceAtual = 0;
const fotos = document.querySelectorAll('.foto');

function mudaFoto(direcao) {
    fotos[indiceAtual].classList.remove('ativo');
    indiceAtual = (indiceAtual + direcao + fotos.length) % fotos.length;
    fotos[indiceAtual].classList.add('ativo');
}
let indiceAtual = 0;
const fotos = document.querySelectorAll('.foto');

function mudaFoto(direcao) {
    // Remove a classe "ativo" da foto atual
    fotos[indiceAtual].classList.remove('ativo');
    
    // Atualiza o índice da foto atual de acordo com a direção (prev ou next)
    indiceAtual = (indiceAtual + direcao + fotos.length) % fotos.length;
    
    // Adiciona a classe "ativo" à nova foto
    fotos[indiceAtual].classList.add('ativo');
}

