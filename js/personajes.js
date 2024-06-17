fetch("https://hp-api.onrender.com/api/characters")
.then(response => (
    response.json()
)).then(data => {
    const $grid = document.querySelector(".grid");
    data.forEach((personaje) => {
        //console.log(personaje)
        if (personaje.image) {
            const card = document.createElement("div");
            card.classList.add("card");
            console.log(personaje)
            card.innerHTML = `
                                <img src="${personaje.image}" alt="${personaje.name}">
                                <div class="card-content">
                                    <h3>${personaje.name}</h3>
                                    <p><strong>Fe de vida:</strong> ${ (personaje.alive) ? `Vivo` : `Muerto` }</p>
                                    <p><strong>Especie:</strong> ${personaje.species}</p>
                                    <p><strong>Intérprete:</strong> ${personaje.actor}</p>
                                </div>
                            `;
            $grid.appendChild(card);
        }
    })
})