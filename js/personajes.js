fetch("https://hp-api.onrender.com/api/characters")
.then(response => (
    response.json()
)).then(data => {
    data.forEach((personaje) =>
        console.log(personaje)        
    )
})