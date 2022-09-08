const iconmenu= document.querySelector("#iconmenu");
const menu= document.querySelector("#menu")

iconmenu.addEventListener("click" , function() {
    menu.classList.toggle("menu-show");
})