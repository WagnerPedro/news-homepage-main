const $firstSpan = document.getElementById("firstSpan")
const $body = document.getElementsByTagName("body")[0]

let breakRow = document.createElement("span")
breakRow.textContent = '/'
breakRow.style.opacity = '0'
$firstSpan.insertAdjacentElement("beforeend", breakRow)
