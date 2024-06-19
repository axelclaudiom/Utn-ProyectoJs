const $buttonPersonajes = document.getElementById('personajesButton');

$buttonPersonajes.addEventListener("click" , (e) => {
    e.preventDefault();
    //console.log("Personajes")
    const template = `
    <h2>Personajes</h2>
	<div id="data-content">
    <img src="../assets/images/protagonistas-harry-potter.webp">
    <p>Descubre la historia, las características y las curiosidades de tus personajes favoritos, desde el valiente Harry Potter y sus amigos Hermione Granger y Ron Weasley, hasta los enigmáticos Severus Snape y Lord Voldemort. Cada personaje tiene su propia magia y secretos que te invitamos a conocer.</p>
    </div>
    `
	const data = document.getElementById('data')
	data.innerHTML = template
})

const $buttonCasas = document.getElementById('casasButton');

$buttonCasas.addEventListener("click" , (e) => {
    e.preventDefault();
    //console.log("Casas")
    const template = `
    <h2>Casas</h2>
    <div id="data-content">
    <img src="../assets/images/Hogwarts-Crest_400x.webp">
	<p>Adéntrate en el espíritu de las cuatro casas de Hogwarts: Gryffindor, Hufflepuff, Ravenclaw y Slytherin. Aprende sobre sus fundadores, sus valores y las características que definen a sus miembros. ¿A cuál casa perteneces tú?.</p>
    </div>
    `
	const data = document.getElementById('data')
	data.innerHTML = template
})

const $buttonHechizos = document.getElementById('hechizosButton');

$buttonHechizos.addEventListener("click" , (e) => {
    e.preventDefault();
    //console.log("Hechizos")
    const template = `
    <h2>Hechizos</h2>
    <div id="data-content">
    <img src="../assets/images/hechizos-varitas-harry-potter.png">
	<p>La magia está en el corazón de este mundo, y los hechizos son la herramienta principal de todo mago y bruja. Aquí encontrarás una guía completa de los hechizos más importantes, desde el encantamiento más sencillo hasta los hechizos más complejos y poderosos.
Prepárate para un viaje mágico lleno de descubrimientos y maravillas. ¡Bienvenido a nuestra comunidad de amantes de Harry Potter!</p>
    </div>
`
	const data = document.getElementById('data')
	data.innerHTML = template
})

const template = `
<h2>Personajes</h2>
<div id="data-content">
<img src="../assets/images/protagonistas-harry-potter.webp">
<p>Descubre la historia, las características y las curiosidades de tus personajes favoritos, desde el valiente Harry Potter y sus amigos Hermione Granger y Ron Weasley, hasta los enigmáticos Severus Snape y Lord Voldemort. Cada personaje tiene su propia magia y secretos que te invitamos a conocer.</p>
</div>
`
const data = document.getElementById('data')
data.innerHTML = template