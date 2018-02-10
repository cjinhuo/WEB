const box = document.querySelector(".box")
const rp = document.querySelector("#relativePosition")
box.addEventListener("click", function (e) {
    var x = e.clientX
    var y = e.clientY
    const bb = box.getBoundingClientRect()

    document.getElementById("shubiao").innerHTML = "X=" + x + ",Y=" + y
    var div = document.createElement("div")
    div.id = "effect"
    div.style.position = "absolute"
    var xx = x - bb.left
    var yy = y - bb.top
    var xxx = xx - 140
    var yyy = yy - 140
    div.style.top = `${yyy}px`
    div.style.left = xxx + "px"
    document.getElementsByClassName("box")[0].appendChild(div)
    div.classList.add("effect")
    setTimeout(function () {
        div.classList.add("on")
    }, 10)
    setTimeout(() => {
        box.removeChild(div)
    }, 1000)
})
function creat() {
    var d = document.getElementsByClassName("box")
    var div = document.createElement("div")
    div.id = "effect"
    var ef = document.getElementById("effect")
    ef.style.position = "absolute"
    ef.style.top = x + "px"
    ef.style.left = y + "px"
    d.appendChild(div)
}
const qq = document.querySelector("#qq")
const ww = document.querySelector("#ww")
qq.addEventListener("click", e => {
    const rect = qq.getBoundingClientRect()
    console.log(e.clientX - rect.left, e.clientY - rect.top)
    rp.innerHTML = `相对当前盒子坐标：${e.clientX - rect.left},${e.clientY - rect.top}`
})



function aa(q,w){
    return q
}
q=>q