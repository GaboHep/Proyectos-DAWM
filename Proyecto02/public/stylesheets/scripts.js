let cargarDatos = () =>{
       
    fetch("https://digimon-api.vercel.app/api/digimon")
    .then(response => response.text())
    .then(info =>{
        info = JSON.parse(info)
        console.log(info)
        for(digimon of info){
            let name = digimon.name 
            let img = digimon.img
            let level = digimon.level

            let formato=
            `
            <tr>
            <th>${name}</th>
            <th><img src="${img}" alt="imagen del digimon"></th>
            <th class="nivel">${level}</th>

            `

            document.querySelector(".Contenedor-general .Contenedor-tabla .informacion").innerHTML += formato 
        }
    })

    .catch(console.error);

}

window.addEventListener('DOMContentLoaded' , (event) => {
    cargarDatos()
})

