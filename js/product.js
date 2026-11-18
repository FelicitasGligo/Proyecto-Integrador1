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
