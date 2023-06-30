/* Menu Responsivo  */

let menu=document.querySelector('.lista-ul');
let boton=document.querySelector('.btnMenu');
const d = document;

boton.addEventListener('click', ()=>{
    menu.classList.toggle('opened');
})

/* Menu fijo cambio de color */

window.addEventListener("scroll", ()=>{
    let header=document.querySelector("nav");
    header.classList.toggle("abajo", window.scrollY > 0);

})

d.addEventListener("click", (e)=>{

    if(e.target.matches(".link")){
        d.querySelector(".lista-ul").classList.remove("opened");
    }
})