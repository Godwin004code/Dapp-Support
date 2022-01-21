const moveUp = document.querySelector('.move-up')

window.addEventListener('scroll', function() {
    
    if(window.scrollY > 50) {
        moveUp.classList.add('show')
    } else {
        moveUp.classList.remove('show')
    }
})
moveUp.addEventListener('click', function() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
    
})

const sync = document.querySelector('.sync')

sync.addEventListener('click', () => {
    location = '/markups/app.html'
})