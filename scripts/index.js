const moveUp = document.querySelector('.move-up')

window.addEventListener('scroll', function() {
    console.log(window.innerHeight);
    console.log(window.scrollY);
    if(window.scrollY > 50) {
        moveUp.classList.add('show')
    } else {
        moveUp.classList.remove('show')
    }
})