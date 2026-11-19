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

// logout
let btnLogout = document.querySelector(".btn-logout");
let itemRegistro = document.querySelector(".item-registro");
let itemLogin = document.querySelector(".item-login");
let itemBienvenida = document.querySelector(".item-bienvenida");
let itemLogout = document.querySelector(".item-logout");

btnLogout.addEventListener("click", function(e) {
    e.preventDefault();

    localStorage.removeItem("usuarioEmail");

    itemBienvenida.innerText = "";
    itemBienvenida.style.display = "none";
    itemLogout.style.display = "none";

    itemRegistro.style.display = "block";
    itemLogin.style.display = "block";
});