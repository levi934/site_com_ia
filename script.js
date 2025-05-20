// Exibe uma mensagem no console apenas para demonstração
console.log("Seja bem-vindo ao site do Levi!");

// Adiciona uma classe de animação suave ao rolar a página
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('animate__fadeInUp');
        }
    });
});