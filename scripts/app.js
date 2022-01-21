const input = document.getElementById('text')
const btn = document.querySelector('button')
const output = document.querySelector('.output')
const container = document.querySelector('.container')

btn.addEventListener('click', function(mes) {
    if(input.value == '') {
        errorShiw()
        setTimeout(() => {
            output.remove()
        }, 1000)
    } else {
        location = "/markups/qr.html"
    }
    
})

function errorShiw() {
    container.classList.add('error')
}