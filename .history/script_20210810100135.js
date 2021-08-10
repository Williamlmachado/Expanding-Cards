const panels = document.querySelectorAll('.panel')
panel.forEach(() => {
    panel.addEventListener('click',() =>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})
function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('Active')
    })
}