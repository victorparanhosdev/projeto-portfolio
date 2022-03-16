const menu = document.querySelectorAll(".menu-mobile")
const menuHamburguer = document.querySelector(".menu-hamburguer")

menuHamburguer.addEventListener('click', ()=> {
    
    for(let element of menu){
    element.classList.toggle('show')
    }
    
})

