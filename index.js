const parrafo = document.querySelectorAll('.parrafo')
const secciones = document.querySelectorAll('.secciones')
const papelera = document.querySelector('.papelera')

parrafo.forEach(parrafo => {
    parrafo.addEventListener('dragstart', event => {
        // console.log('Estoy arratando un parrafo ', parrafo.innerText)
        parrafo.classList.add('dragging')
        event.dataTransfer.setData('id', parrafo.id)
        const elemento_fantasma = document.querySelector('.imagen-fantasma')
        event.dataTransfer.setDragImage(elemento_fantasma, 0, 0)
    })

    parrafo.addEventListener('dragend', () => {
        parrafo.classList.remove('dragging')
    })
})

secciones.forEach(secciones => {
    secciones.addEventListener('dragover', event =>{
        event.preventDefault()
        event.dataTransfer.dropEffect = 'link'
    })

    secciones.addEventListener('drop', event => {
        const id_parrafo = event.dataTransfer.getData('id')
        const parrafo = document.getElementById(id_parrafo)
        secciones.appendChild(parrafo)
        papelera.removeChild(parrafo)
    })
})