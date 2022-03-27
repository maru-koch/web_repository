const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', showBox);

showBox()

function showBox() {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top
        const triggerPoint = window.innerHeight/5 * 4
        if (sectionTop < triggerPoint){
        section.classList.add('show')
    }else{
        section.classList.remove('show')
    }
    })
}