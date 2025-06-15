const home_button = document.getElementById("home_page_button")
home_button.addEventListener('click', goto_home_page)

function goto_home_page() {

  window.location.href = "../index.html"

}