const menu = document.querySelectorAll(".menu-mobile")
const menumobile = document.querySelector(".menu-mobile")
const menuHamburguer = document.querySelector(".menu-hamburguer")
const menuShow = document.querySelectorAll('.menu-toggle ul li a')



menuHamburguer.addEventListener('click', ()=> {
    for(const element of menu){
    element.classList.toggle('show')
    
    }
    esconder() 

})

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
})

for (const link of menuShow){  
    link.addEventListener('click', ()=> {
      menumobile.classList.remove('show')
      esconder() 
    })

}

function esconder() {
  if(menumobile.classList.contains('show')){
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'initial'
  }
}
