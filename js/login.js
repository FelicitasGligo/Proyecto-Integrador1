let formulario = document.querySelector(".form-login")

let inputEmail = document.querySelector("#email")
let inputContrasena = document.querySelector("#contrasena")

let errorInputEmail = document.querySelector(".error-email")
let errorInputContrasena = document.querySelector(".error-contrasena")

formulario.addEventListener("submit", function(e){
    e.preventDefault()

    errorInputEmail.style.display = "none"
    errorInputContrasena.style.display = "none"

    if (inputEmail.value == "") {
        errorInputEmail.style.display = "block"
        errorInputEmail.innerHTML = "<p> El email tiene que estar completo </p>"
    } else if (inputContrasena.value == "") {
        errorInputContrasena.style.display = "block"
        errorInputContrasena.innerHTML = "<p> La contraseña tiene que estar completa </p>"
    } else if (inputContrasena.value.length < 6) {
        errorInputContrasena.style.display = "block"
        errorInputContrasena.innerHTML = "<p> La contraseña debe tener al menos 6 caracteres </p>"
    } else {
        this.submit()
    }
})