const menu = document.querySelector(".menu-mobile")
const menuHamburguer = document.querySelector(".menu-hamburguer")
show = true
menuHamburguer.addEventListener('click', ()=> {
    if(show) {
        menu.classList.add('show')
        show = false
    } else{
        menu.classList.remove('show')
        show = true
    }
    

})