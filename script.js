const sections = document.querySelectorAll('.section');

document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
    const navList = document.getElementById("nav-list");

    if (mobileMenuToggle && navList) {
        mobileMenuToggle.addEventListener("click", function () {
            navList.classList.toggle("active"); // Adicione uma classe 'active' para mostrar/esconder
        });
    }

});

const checkVisibility = () => {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < windowHeight && rect.bottom > 0) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
};

window.addEventListener('scroll', checkVisibility);
checkVisibility();


document.addEventListener("DOMContentLoaded", function () {
    // Pegando os elementos das setas
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    const carousel = document.querySelector(".carrossel");
    const items = document.querySelectorAll(".carrossel-item");

    let index = 0; // Índice inicial

    // Função para mostrar o item atual do carrossel
    function showItem() {
        items.forEach((item, i) => {
            item.style.display = i === index ? "block" : "none";
        });
    }

    // Botão para ir para o próximo item
    nextButton.addEventListener("click", function () {
        index = (index + 1) % items.length; // Incrementa o índice (com loop)
        showItem();
    });

    // Botão para voltar ao item anterior
    prevButton.addEventListener("click", function () {
        index = (index - 1 + items.length) % items.length; // Decrementa o índice (com loop)
        showItem();
    });

    // Exibe o primeiro item ao carregar a página
    showItem();
});


// Atualizar ano no rodapé
document.addEventListener("DOMContentLoaded", function() {
    const currentYearSpan = document.getElementById("current-year");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }


});

