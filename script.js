const $firstSpan = document.getElementById("firstSpan")
const $body = document.getElementsByTagName("body")[0]
const $menuIcon = document.querySelector(".menu-icon")

(() => {
    let breakRow = document.createElement("span")
    breakRow.textContent = '/'
    breakRow.style.opacity = '0'
    $firstSpan.insertAdjacentElement("beforeend", breakRow)
})


$menuIcon.style.display = 'flex'

// (()=>{
//     $menuIcon
// })