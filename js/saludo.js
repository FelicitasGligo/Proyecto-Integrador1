// saludo
let usuarioLogueado = localStorage.getItem("usuarioEmail");

if (usuarioLogueado !== null) {
    let itemRegistro = document.querySelector(".item-registro");
    let itemLogin = document.querySelector(".item-login");
    let itemBienvenida = document.querySelector(".item-bienvenida");
    let itemLogout = document.querySelector(".item-logout");

    itemRegistro.style.display = "none";
    itemLogin.style.display = "none";

    itemBienvenida.innerText = `Bienvenido: ${usuarioLogueado}`;
    itemBienvenida.style.display = "block";
    itemLogout.style.display = "block";

    let btnLogout = document.querySelector(".btn-logout");

    btnLogout.addEventListener("click", function() {
        localStorage.removeItem("usuarioEmail");
    });
}
