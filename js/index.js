//home
let contenedores = document.querySelectorAll(".products-container");

fetch("https://dummyjson.com/products/category/kitchen-accessories")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let productos = data.products;
        let contenidoSeccion1 = "";

        for (let i = 0; i < 10; i++) {
            contenidoSeccion1 += `
                <article class="product-card">
                    <a href="./product.html?id=${productos[i].id}">
                        <img class="product-img" src="${productos[i].thumbnail}" alt="${productos[i].title}">
                    </a>
                    <h3 class="product-title">
                        <a href="./product.html?id=${productos[i].id}">${productos[i].title}</a>
                    </h3>
                    <p class="product-desc">${productos[i].description}</p>
                    <p class="product-price">$${productos[i].price}</p>
                    <a class="product-btn" href="./product.html?id=${productos[i].id}">Ver detalle</a>
                </article>
            `;
        }

        contenedores[0].innerHTML = contenidoSeccion1;
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });



fetch("https://dummyjson.com/products/category/sports-accessories")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        let productos = data.products;
        let contenidoSeccion2 = "";

        for (let i = 0; i < 10; i++) {
            contenidoSeccion2 += `
                <article class="product-card">
                    <a href="./product.html?id=${productos[i].id}">
                        <img class="product-img" src="${productos[i].thumbnail}" alt="${productos[i].title}">
                    </a>
                    <h3 class="product-title">
                        <a href="./product.html?id=${productos[i].id}">${productos[i].title}</a>
                    </h3>
                    <p class="product-desc">${productos[i].description}</p>
                    <p class="product-price">$${productos[i].price}</p>
                    <a class="product-btn" href="./product.html?id=${productos[i].id}">Ver detalle</a>
                </article>
            `;
        }

        contenedores[1].innerHTML = contenidoSeccion2;
    })
    .catch(function (error) {
        console.log("El error es: " + error);
    });


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
