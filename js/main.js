let header = document.querySelector("#header");

document.querySelector("#burger-menu").addEventListener("click", () => {
  header.classList.toggle("open");
});

window.addEventListener("scroll", () => {
  header.classList.toggle("fixed", window.scrollY > 0);
});
