const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', showBox);

showBox()

function showBox() {
    boxes.forEach((box)=>{
        const boxTop = box.getBoundingClientRect().top
        const triggerPoint = window.innerHeight/5 * 4
        if (boxTop < triggerPoint){
        box.classList.add('show')
    }else{
        box.classList.remove('show')
    }
    })
}