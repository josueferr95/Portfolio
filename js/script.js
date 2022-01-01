/* Menu Responsivo  */

let menu=document.querySelector('.lista-ul');
let boton=document.querySelector('.btnMenu');

boton.addEventListener('click', ()=>{
    menu.classList.toggle('opened');
})

/* Menu fijo cambio de color */

window.addEventListener("scroll", ()=>{
    let header=document.querySelector("nav");
    header.classList.toggle("abajo", window.scrollY > 0);
})