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
//nav-categorias ul    

let listaCategorias = document.querySelector('.nav-categorias ul') 

fetch('https://dummyjson.com/products/category-list')
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        let contenido = ''

        for (let i = 0; i < data.length; i++) {
            contenido += `
                <li>
                    <a href="category.html?categoria=${data[i]}">
                        ${data[i]}
                    </a>
                </li>`
        }

        listaCategorias.innerHTML = contenido;
    })
    .catch(function(error) {
        console.log('Error: ' + error)
    })
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