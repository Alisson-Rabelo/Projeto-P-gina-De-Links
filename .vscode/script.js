function togglemode() {
  const html = document.documentElement
  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}
  html.classList.toggle("light")

  //pegar foto:
  const img = document.querySelector("#profile img")

  // trocar a foto usando o if e o else
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar2.png")
  } else {
    img.setAttribute("src", "./assets/avatar1.png")
  }
}
