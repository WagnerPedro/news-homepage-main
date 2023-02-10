const $burguerMenu = document.querySelector(".burguerMenu")
const menu = document.getElementsByTagName("menu")[0]
const $menuImg = document.getElementById("imagem")
const close = document.getElementById("close")
const closeMenu =  document.querySelector(".closeMenu")

$burguerMenu.addEventListener("click", ()=> {
    if(!$menuImg.setAttribute("src", "./assets/images/icon-menu.svg")) {
        menu.style.display = 'flex'
        $menuImg.setAttribute("src", "./assets/images/icon-menu-close.svg")
    }
    // console.log($menuImg)
})