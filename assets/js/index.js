const header = document.querySelector("#null")

document.addEventListener("scroll", (event) => {
  if (window.pageYOffset > 10) {
    header.classList.add("border")
  } else {
    header.classList.remove("border")
  }
});
