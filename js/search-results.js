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
// search results (feli)
let queryString = location.search
let params = new URLSearchParams(queryString)
let terminoBuscado = params.get("Buscar")

let sectionTitle = document.querySelector(".section-title")
let productsContainer = document.querySelector(".products-container")

sectionTitle.innerText = `Resultados de búsqueda para: ${terminoBuscado}`


let url = `https://dummyjson.com/products/search?q=${terminoBuscado}`

fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        let productos = data.products

        if (productos.length === 0) {
            sectionTitle.innerText = `No hay resultados para el término: ${terminoBuscado}`
            productsContainer.innerHTML = ""
        } else {
            let contenido = ""

            for (let i = 0; i < productos.length; i++) {
                let producto = productos[i]

                contenido += `
                    <article class="productocard">
                        <a href="./product.html?id=${producto.id}">
                            <img src="${producto.thumbnail}" alt="${producto.title}" class="product-img">
                        </a>
                        <h3 class="product-title">
                            <a href="./product.html?id=${producto.id}">${producto.title}</a>
                        </h3>
                        <p class="product-desc">${producto.description}</p>
                        <p class="product-price">$${producto.price}</p>
                        <a href="./product.html?id=${producto.id}" class="product-btn">Ver detalle</a>
                    </article>
                `
            }

            productsContainer.innerHTML = contenido
        }
    })
    .catch(function(error) {
        console.log("Error en la búsqueda:", error)
    })