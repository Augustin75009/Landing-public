const header = document.querySelector("#null")
const dropdown = document.querySelectorAll(".tab")
const dropdown1 = document.querySelector(".dropdown-content1 div")
const dropdown0 = document.querySelector(".dropdown-content0 div")

document.addEventListener("scroll", (event) => {
  if (window.pageYOffset > 10) {
    header.classList.add("border")
  } else {
    header.classList.remove("border")
  }
});


dropdown.forEach((d, index) => {
  d.addEventListener("mouseover", (event) => {
    let target = event.currentTarget.childNodes[3]
    target.classList.add("active")

  })
  d.addEventListener("mouseout", (event) => {
    let target = event.currentTarget.childNodes[3]
    target.classList.remove("active")
  })
});
