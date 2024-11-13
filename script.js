const sections = document.querySelectorAll('.section');

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


window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

