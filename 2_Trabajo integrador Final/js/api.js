let contenedorPersonajes = document.getElementById("personajes")

fetch("https://rickandmortyapi.com/api/character")
.then((response)=>response.json())
.then((datos)=>{

    console.log(datos)
    console.log(datos.results)
    datos.results.forEach((elementos) => {
         // console.log(elementos.name)
         const contenedorDatos = document.createElement('div')
         contenedorDatos.innerHTML =`
         
         <p>${elementos.name}</p>
         <img src="${elementos.image}">
        `;
        contenedorPersonajes.append(contenedorDatos)
    });
})