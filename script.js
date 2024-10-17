window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    
    // Verifica se a rolagem vertical é maior que 0
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

