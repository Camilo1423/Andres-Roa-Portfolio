'use strict'

window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("Sticky", window.scrollY > 0);
})
