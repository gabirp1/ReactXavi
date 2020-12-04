const button = document.querySelector('#verde')
const body = document.querySelector('body')

button.addEventListener('click', (e)=>{
    body.style.backgroundColor = 'green'
})

const retocarButton = document.querySelector('#retocar')

const ultimoParrafo = document.querySelector('section p:last-of-type')

retocarButton.addEventListener('click', (e)=>{
    ultimoParrafo.classList.add('retocar')
})



const fruitElem = document.querySelectorAll('ul li')
const filtro = document.querySelector('#filtro')
const salida = document.querySelector('#salida')
filtro.addEventListener('keyup', (e) =>{
	let salidaValues = ''
	fruitElem.forEach(fruit => {
		if(fruit.textContent.includes(e.target.value)) 	salidaValues+=fruit.textContent+' | '
	})
	console.log(salidaValues)
	salida.textContent = salidaValues
})


const footer = document.createElement('footer')
footer.textContent = 'Copyright 2020'
body.appendChild(footer)


const padre = document.querySelector('#padre')
const main = document.querySelector('main')
padre.addEventListener('click', () => {
	const button = document.createElement('button')
	button.textContent = 'Hijo'
	button.addEventListener('click',(e) => padre.remove() )
	main.appendChild(button)
})