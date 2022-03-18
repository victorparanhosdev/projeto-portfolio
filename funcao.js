const menu = document.querySelectorAll(".menu-mobile")
const menumobile = document.querySelector(".menu-mobile")
const menuHamburguer = document.querySelector(".menu-hamburguer")
const menuShow = document.querySelectorAll('.menu-toggle ul li a')



menuHamburguer.addEventListener('click', ()=> {
    for(const element of menu){
    element.classList.toggle('show')
    
    }

})

for (const link of menuShow){  
    link.addEventListener('click', ()=> {
      menumobile.classList.remove('show')
     
    })
}

