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
let queryString = location.search;
let params = new URLSearchParams(queryString);
let idProducto = params.get("id");

fetch(`https://dummyjson.com/products/${idProducto}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        let imagen = document.querySelector(".productoimagen");
        let nombre = document.querySelector(".productonombre");
        let marca = document.querySelector(".productomarca");
        let descripcion = document.querySelector(".productodescripcion");
        let precio = document.querySelector(".productoprecio");
        let linkCategoria = document.querySelector(".productocategoria a");
        let stock = document.querySelector(".productostock");

        imagen.src = data.thumbnail;
        imagen.alt = data.title;
        nombre.innerText = data.title;

        if (data.brand) {
            marca.innerText = `Marca: ${data.brand}`;
        } else {
            marca.innerText = "Marca: Sin marca";
        }

        descripcion.innerText = data.description;
        precio.innerText = `Precio: $${data.price}`;

        linkCategoria.innerText = data.category;
        linkCategoria.href = `./category.html?categoria=${data.category}`;

        stock.innerText = `Stock: ${data.stock} unidades`;

        let itemsTags = document.querySelectorAll(".productoli");

        for (let i = 0; i < itemsTags.length; i++) {
            if (i < data.tags.length) {
                itemsTags[i].innerText = data.tags[i];
            } else {
                itemsTags[i].style.display = "none";
            }
        }

        let tarjetasReviews = document.querySelectorAll(".reviewproducto1");
        let ratings = document.querySelectorAll(".reviewrating");
        let comentarios = document.querySelectorAll(".reviewcomentario");
        let fechas = document.querySelectorAll(".reviewfecha");
        let usuarios = document.querySelectorAll(".reviewusuario");

        for (let i = 0; i < tarjetasReviews.length; i++) {
            if (i < data.reviews.length) {
                let review = data.reviews[i];
                ratings[i].innerText = `Rating: ${review.rating} / 5`;
                comentarios[i].innerText = review.comment;
                fechas[i].innerText = `Fecha: ${review.date}`;
                usuarios[i].innerText = `Usuario: ${review.reviewerName}`;
            } else {
                tarjetasReviews[i].style.display = "none";
            }
        }
    })
    .catch(function(error) {
        console.log("El error es: " + error);
    });