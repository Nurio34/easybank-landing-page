
const headerBtn = document.querySelector(".header__btn")
const menu = document.querySelector(".header__nav-mobile-hidden")
const overlay = document.querySelector(".header__overlay-hidden")
const btn = document.querySelector(".fa-solid")
const body = document.querySelector("body")

headerBtn.addEventListener("click", function() {
    if(menu.classList.contains("header__nav-mobile-visible")) {
        menu.classList.remove("header__nav-mobile-visible")
        overlay.classList.remove("header__overlay-visible")
        btn.classList.add("fa-bars")
        btn.classList.remove("fa-xmark")
        body.classList.remove("ow-hi")
    } else {
            menu.classList.add("header__nav-mobile-visible")
            overlay.classList.add("header__overlay-visible")
            btn.classList.add("fa-xmark")
            btn.classList.remove("fa-bars")
            body.classList.add("ow-hi")
    }
})






