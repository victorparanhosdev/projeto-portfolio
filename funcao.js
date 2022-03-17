const menu = document.querySelectorAll(".menu-mobile")
const menuHamburguer = document.querySelector(".menu-hamburguer")

menuHamburguer.addEventListener('click', ()=> {
    
    for(let element of menu){
    element.classList.toggle('show')
    }
    
})




const menuShow = document.querySelectorAll('menu.menu-toggle ul li')
index = 0
const menuLi = menuShow[index]



menuLi.addEventListener('click', ()=> {
   


})

console.log(menuLi)