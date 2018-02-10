"use strict"
const wrapper = document.querySelector("#wrapper")
wrapper.addEventListener("click", e => {
    const {target} = e
    if (target.classList.contains("left")) {
        target.classList.remove("left")
        target.classList.add("front")
        const front = target.nextElementSibling || wrapper.firstElementChild
        front.classList.remove("front")
        front.classList.add("right")
        const right = front.nextElementSibling || wrapper.firstElementChild
        right.classList.remove("right")
        right.classList.add("back")
        const back = target.previousElementSibling || wrapper.lastElementChild
        back.classList.remove("back")
        back.classList.add("left")
    }
    else if (target.classList.contains("front")) {
        location.href = "https://www.baidu.com/"
    }
})
wrapper.addEventListener("click",e=>{
    const {target}=e
    if(target.classList.contains("right")){
    target.classList.remove("right")
    target.classList.add("front")
    const front1 = target.previousElementSibling || wrapper.lastElementChild
    front1.classList.remove("front")
    front1.classList.add("left")
    const left1=front1.previousElementSibling||wrapper.lastElementChild
    left1.classList.remove("left")
    left1.classList.add("back")
    const back1=target.nextElementSibling||wrapper.firstElementChild
    back1.classList.remove("back")
    back1.classList.add("right")
}
})
function onclick_left() {
   const button_left=document.querySelector(".left")
   button_left.classList.remove("left")
   button_left.classList.add("front")
   const button_front=button_left.nextElementSibling||wrapper.firstElementChild
   button_front.classList.remove("front")
   button_front.classList.add("right")
   const button_right=button_front.nextElementSibling||wrapper.firstElementChild
   button_right.classList.remove("right")
   button_right.classList.add("back")
   const button_back=button_left.previousElementSibling||wrapper.lastElementChild
   button_back.classList.remove("back")
   button_back.classList.add("left")
}