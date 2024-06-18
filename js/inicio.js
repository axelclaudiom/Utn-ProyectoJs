const $buttonPersonajes = document.getElementById('personajesButton');

$buttonPersonajes.addEventListener("click" , (e) => {
    e.preventDefault();
    console.log("Personajes")
})

const $buttonCasas = document.getElementById('casasButton');

$buttonCasas.addEventListener("click" , (e) => {
    e.preventDefault();
    console.log("Casas")
})

const $buttonHechizos = document.getElementById('hechizosButton');

$buttonHechizos.addEventListener("click" , (e) => {
    e.preventDefault();
    console.log("Hechizos")
})