//home
let contenedores = document.querySelectorAll(".products-container");

fetch("https://dummyjson.com/products/category/kitchen-accessories")
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);

    let seccion = document.querySelector(".seccion-uno")
    let productos = ""

    for (let i = 0; i < data.products.length; i++) {

        productos = productos + `
        <article class="product-card">
            <a href="./product.html?id=${data.products[i].id}"><img class="product-img" src="${data.products[i].thumbnail}" alt="${data.products[i].title}"></a>
            <h3 class="product-title"><a href="./product.html?id=${data.products[i].id}">${data.products[i].title}</a></h3>
            <p class="product-desc">${data.products[i].description}</p>
            <p class="product-price">$${data.products[i].price}</p>
            <a class="product-btn" href="./product.html?id=${data.products[i].id}">Ver detalle</a>
        </article>`
    }

    seccion.innerHTML = productos
})
.catch(function(error) {
    console.log("Error: " + error);
})


fetch("https://dummyjson.com/products/category/sports-accessories")
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);

    let seccion = document.querySelector(".seccion-dos")
    let productos = ""

    for (let i = 0; i < data.products.length; i++) {

        productos = productos + `
        <article class="product-card">
            <a href="./product.html?id=${data.products[i].id}"><img class="product-img" src="${data.products[i].thumbnail}" alt="${data.products[i].title}"></a>
            <h3 class="product-title"><a href="./product.html?id=${data.products[i].id}">${data.products[i].title}</a></h3>
            <p class="product-desc">${data.products[i].description}</p>
            <p class="product-price">$${data.products[i].price}</p>
            <a class="product-btn" href="./product.html?id=${data.products[i].id}">Ver detalle</a>
        </article>`
    }

    seccion.innerHTML = productos
})
.catch(function(error) {
    console.log("Error: " + error);
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

