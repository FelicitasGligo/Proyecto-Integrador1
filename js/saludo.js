
// saludo
let usuarioLogueado = localStorage.getItem("usuarioEmail")


if (usuarioLogueado) {
    let navLista = document.querySelector(".nav-superior ul")
    let itemRegistro = document.querySelector(".item-registro")
    let itemLogin = document.querySelector(".item-login")
   
    itemRegistro.style.display = "none"
    itemLogin.style.display = "none"

    navLista.innerHTML += "<li>Bienvenido: " + usuarioLogueado + "</li>"
    navLista.innerHTML += "<li><a href='#' class='btn-logout'>logout</a></li>"

    let btnLogout = document.querySelector(".btn-logout")

    btnLogout.addEventListener("click", function(e) {
        e.preventDefault()
        localStorage.removeItem("usuarioEmail")
        location.reload()
    })
}