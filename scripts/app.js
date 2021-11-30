const input = document.getElementById('text')
const btn = document.querySelector('button')
const output = document.querySelector('.output')

btn.addEventListener('click', function(mes) {
    if(input.value == '') {
        mes = 'This field is required'
    } 
    output.innerHTML = `${mes}`
    input.style.borderColor = 'red'
    input.focus()
})