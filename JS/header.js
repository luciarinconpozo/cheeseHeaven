const nav = document.querySelector("#nav");
const open = document.querySelector("#open-menu");
const close = document.querySelector("#close-menu");

open.addEventListener("click", () => {
    nav.classList.add("visible");
    open.classList.add("invisible");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible");
    open.classList.remove("invisible");

})