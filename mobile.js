const menu = document.querySelector("#bar");
const close = document.querySelector(".close");
const nav = document.querySelector(".nav");
menu.addEventListener("click", () => {
	nav.classList.add("show");
})
close.addEventListener("click", () => {
	nav.classList.remove("show");
})