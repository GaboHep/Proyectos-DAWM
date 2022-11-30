(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });

    // Chart Global Color
    Chart.defaults.color = "#6C7293";
    Chart.defaults.borderColor = "#000000";



    
})(jQuery);

let cargarPeriodo=()=>{

        fetch("https://swapi.dev/api/planets/?format=json")
        .then(response => response.text())
        .then(info =>{
            info = JSON.parse(info)
            // Poblacion Chart
            var ctx1 = document.querySelector("#periodo-chart")
            let planetas=[]
            let periodoOrbital=[]

            for(objeto of info.results){
                if(objeto.orbital_period == "unknown"){
                    continue
                }else{
                    planetas.push(objeto.name)
                    periodoOrbital.push(parseInt(objeto.orbital_period))
                }
            }

            const datosP = {
                label: "Dias",
                data: periodoOrbital,
                backgroundColor: "rgba(235, 22, 22, .7)"
                

            }


            var myChart1 = new Chart(ctx1, {
                type: "bar",
                data: {
                    labels: planetas,
                    datasets: [
                        datosP 
                    ]
                    },
                options: {
                    responsive: true
                }
            });

        })




}

let cargarClimas=()=>{
    fetch("https://swapi.dev/api/planets/?format=json")
    .then(response => response.text())
    .then(info =>{
        info = JSON.parse(info)
        // Poblacion Chart
        var ctx2 = document.querySelector("#climas-chart")
        let planetas=[]
        let climas=[]

        for(objeto of info.results){
            if(objeto.climate.includes(",")){
                let cantC=0;
                let arrayC=objeto.climate.split(",")
                for(c of arrayC){   
                    cantC++
                }

                planetas.push(objeto.name)
                climas.push(cantC)
                
            }else{
                planetas.push(objeto.name)
                climas.push(1)
            }
        }

        const datosC = {
            label: "Climas",
            data: climas,
            backgroundColor: "rgba(235, 22, 22, .7)",
            fill:true
            

        }


        var myChart1 = new Chart(ctx2, {
            type: "line",
            data: {
                labels: planetas,
                datasets: [
                    datosC 
                ]
                },
            options: {
                responsive: true
            }
        });

    })
}


let cargarDatos = (grav) =>{
       
    fetch("https://swapi.dev/api/planets/?format=json")
    .then(response => response.text())
    .then(info =>{
        info = JSON.parse(info)
        console.log(info)
        for(objeto of info.results){
            let name = objeto.name 
            let population = objeto.population
            let gravedad= objeto.gravity
            let clima=objeto.climate
            let periodoOrbital=objeto.orbital_period
            //Si es que se selecciona sin filtro o por defecto, entonces se procede a todos ponerles plantilla y por ende cargan todos
            if(grav =="No"){
                let formato=
                `
                <tr>
                <th>${name}</th>
                <th>${population}</th>
                <th>${gravedad}</th>
                <th>${clima}</th>
                <th>${periodoOrbital}</th>
    
                `
    
                document.querySelector(".table-responsive .table .information").innerHTML += formato 
            }
            // Si es que se selecciona gravedad 1, entonces solo aquellos con gravedad 1 se les da la plantilla y cargan
            if(grav == gravedad){
                let formato=
                `
                <tr>
                <th>${name}</th>
                <th>${population}</th>
                <th>${gravedad}</th>
                <th>${clima}</th>
                <th>${periodoOrbital}</th>
    
                `
    
                document.querySelector(".table-responsive .table .information").innerHTML += formato 
            }
 
        }
    })

    .catch(console.error);

}

//Actualiza la tabla de datos
window.addEventListener('change',(event)=>{
    let selector=document.querySelector('select#tipo');
    let opcion=selector.options[selector.selectedIndex].value;
    document.querySelector('.table-responsive .table .information').innerHTML=""
    cargarDatos(opcion)
})
//Inicializa los charts y la tabla con NO por defecto
window.addEventListener('DOMContentLoaded' , (event) => {
    cargarDatos("No")
    cargarPeriodo()
    cargarClimas()
})
