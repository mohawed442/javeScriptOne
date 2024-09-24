let bgImg = document.querySelectorAll(".bgImg");
bgImg.forEach(ele => {
  ele.classList.remove("active")
  ele.addEventListener("click", function () {
    bgImg.forEach(ele => {
      ele.classList.remove("active")
      }
)
    ele.classList.add("active")
  })
}
)
