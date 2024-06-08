fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((datos) => {
        console.log(datos);
    });
