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
//detalle producto 
let queryString = location.search
let params = new URLSearchParams(queryString)
let idProducto = params.get("id")

fetch(`https://dummyjson.com/products/${idProducto}`)
    .then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data)

        let imagen = document.querySelector(".productoimagen")
        let nombre = document.querySelector(".productonombre")
        let marca = document.querySelector(".productomarca")
        let descripcion = document.querySelector(".productodescripcion")
        let precio = document.querySelector(".productoprecio")
        let linkCategoria = document.querySelector(".productocategoria a")
        let stock = document.querySelector(".productostock")
        let listaTags = document.querySelector(".productoul")

        imagen.src = data.thumbnail
        imagen.alt = data.title
        nombre.innerText = data.title
        marca.innerText = `Marca: ${data.brand ? data.brand : "Sin marca"}`
        descripcion.innerText = data.description
        precio.innerText = `Precio: $${data.price}`
        
        linkCategoria.innerText = data.category
        linkCategoria.href = `./category.html?categoria=${data.category}`
        
        stock.innerText = `Stock: ${data.stock} unidades`

        let contenidoTags = ""
        let limiteTags = data.tags.length < 3 ? data.tags.length : 3

        for (let i = 0; i < limiteTags; i++) {
            contenidoTags += `<li class="productoli">${data.tags[i]}</li>`
        }
        listaTags.innerHTML = contenidoTags

        let contenedorReviews = document.querySelector(".contenedor-reviews")
        let contenidoReviews = ""

        for (let i = 0; i < data.reviews.length; i++) {
            let review = data.reviews[i]
            let fechaFormateada = new Date(review.date).toLocaleDateString("es-AR")

            contenidoReviews += `
                <article class="reviewproducto1">
                    <p class="reviewrating">Rating: ${review.rating} / 5</p>
                    <p class="reviewcomentario">${review.comment}</p>
                    <p class="reviewfecha">Fecha: ${fechaFormateada}</p>
                    <p class="reviewusuario">Usuario: ${review.reviewerName}</p>
                </article>
            `
        }

        contenedorReviews.innerHTML = contenidoReviews
    })
    .catch(function(error) {
        console.log("Error al cargar el producto:", error)
    })