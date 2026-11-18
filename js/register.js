let formulario = document.querySelector(".form-register")

let inputEmail = document.querySelector("#email")
let inputContrasena = document.querySelector("#contrasena")
let inputRepetir = document.querySelector("#repetirContrasena")

let errorInputEmail = document.querySelector(".error-email")
let errorInputContrasena = document.querySelector(".error-contrasena")
let errorInputRepetir = document.querySelector(".error-repetir")

formulario.addEventListener("submit", function(e){
    e.preventDefault()

    errorInputEmail.style.display = "none"
    errorInputContrasena.style.display = "none"
    errorInputRepetir.style.display = "none"

    if (inputEmail.value == "") {
        errorInputEmail.style.display = "block"
        errorInputEmail.innerHTML = "<p> El email tiene que estar completo </p>"
    } else if (inputContrasena.value == "") {
        errorInputContrasena.style.display = "block"
        errorInputContrasena.innerHTML = "<p> La contraseña tiene que estar completa </p>"
    } else if (inputContrasena.value.length < 6) {
        errorInputContrasena.style.display = "block"
        errorInputContrasena.innerHTML = "<p> La contraseña debe tener al menos 6 caracteres </p>"
    } else if (inputRepetir.value != inputContrasena.value) {
        errorInputRepetir.style.display = "block"
        errorInputRepetir.innerHTML = "<p> Las contraseñas no coinciden </p>"
    } else {
        this.submit()
    }
})

//header
let formBuscador = document.querySelector(".form-buscador")
let inputBuscador = document.querySelector(".barra")
let errorBuscador = document.querySelector(".error-buscador")

formBuscador.addEventListener("submit", function(e){
    e.preventDefault()

    errorBuscador.style.display = "none"

    if (inputBuscador.value == "") {
        errorBuscador.style.display = "block"
        errorBuscador.innerHTML = "<p> El campo de búsqueda no puede estar vacío </p>"
    } else if (inputBuscador.value.length < 3) {
        errorBuscador.style.display = "block"
        errorBuscador.innerHTML = "<p> El término buscado debe tener al menos 3 caracteres </p>"
    } else {
        this.submit()
    }
})