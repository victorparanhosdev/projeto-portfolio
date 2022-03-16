const menu = document.querySelectorAll(".menu-mobile")
const menuHamburguer = document.querySelector(".menu-hamburguer")

menuHamburguer.addEventListener('click', ()=> {
    
    for(let element of menu){
    element.classList.toggle('show')
    }
    
})

const menuShow = document.querySelector(".menu-toggle ul li")
menuShow.addEventListener('click', ()=> {
    for(let a of menu) {
        a.classList.remove('show')
    }
})

console.log(menuShow)
