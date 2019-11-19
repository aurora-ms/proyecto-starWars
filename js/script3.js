// var species = [1, 2, 3, 6, 8, 10, 34, 20];
// var bigBox = document.createElement("div");
// bigBox.setAttribute("id", "bigSpecies")
// document.getElementById("contenedor").appendChild(bigBox);

// function peticionAjax(url, imagesRute) {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.onreadystatechange = function () {


//         if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
//             var info = JSON.parse(xmlHttp.responseText);
//             console.log(info.name);

//             var cajasInd = document.createElement("div");
//             cajasInd.setAttribute("class", "speciesBox");

//             var ids = info.url;
//             cajasInd.setAttribute("id", "spe"+ids.slice(29, -1));

//             var imagenes = document.createElement("img");
//             imagenes.setAttribute("src", imagesRute);

//             var nombres = document.createElement("h1");
//             nombres.innerHTML = info.name;

//             cajasInd.addEventListener("click", function () {

//                 var datosSpecies = document.createElement("p");
//                 datosSpecies.innerHTML = info.eye_colors;
//                 cajasInd.appendChild(datosSpecies)

//                 console.log(cajasInd.id);

//             })

//             bigBox.appendChild(cajasInd);
//             cajasInd.appendChild(nombres);
//             cajasInd.appendChild(imagenes);

//         } else if (xmlHttp.readyState === 4 && xmlHttp.status === 404) {
//             console.error("ERROR! 404");
//             console.info(JSON.parse(xmlHttp.responseText));
//         }

//     };
//     xmlHttp.open("GET", url, true);
//     xmlHttp.send();
// }

// for (var i = 0; i < species.length; i++) {

//     var imagesRute = "https://starwars-visualguide.com/assets/img/species/"+ species[i] + ".jpg"
//     peticionAjax("https://swapi.co/api/species/" + species[i] + "/?format=json", imagesRute);
// }








// species = Array con las especies seleccionadas.
var species = [1, 2, 3, 6, 8, 10, 34, 20];

// bigBox es la caja (div) donde se colocará todo el contenido de las especies
var bigBox = document.createElement("div");
bigBox.setAttribute("id", "bigSpecies")

// Unimos al main del html bigBox  | body | -> | main#contenedor | -> | bigBox#bigSpecies |
document.getElementById("contenedor").appendChild(bigBox);


// Creamos un array vacio para controlar los ids que se le asignarán a las diferentes cajas de las especies.
var asignedIds = [];


// Función para hacer la llamada Ajax de los datos de las especies y asignación de la ruta de las imagenes de cada especie.
function peticionAjax(url, imagesRute) {

    fetch(url)
        .then(res => res.json())
        .then(info => {

            console.log(info.name);

            //Creamos las cajas de las especies y le asignamos la clase speciesBox
            var cajasInd = document.createElement("div");
            cajasInd.setAttribute("class", "speciesBox");

            // Para crear los ids de las cajas de las especies cogemos los datos de la url.
            var ids = info.url;

            // Asignamos los ids a las diferentes cajas. Usamos un slice para quedarnos solo con el nº de la especie.
            cajasInd.setAttribute("id", "spe" + ids.slice(29, -1));

            var principalBox = document.createElement("div");
            principalBox.setAttribute("id", "principal");

            // Creamos las imagenes y le asignamos la ruta.
            var imagenes = document.createElement("img");
            imagenes.setAttribute("src", imagesRute);

            // Creamos los encabezados con los nombres de las especies
            var nombres = document.createElement("h1");
            nombres.innerHTML = info.name;

            // Metemos los ids de los elementos en el array que hemos creado en la línea 76.
            asignedIds.push(cajasInd.id);

            // Creamos el evento click al pulsar en las diferentes especies
            principalBox.addEventListener("click", crearcontenido);


            function crearcontenido() {


                // Creamos un contenedor donde meter la información. Le asignamos un id y lo unimos a la caja que contiene cada especie.
                var speInfo = document.createElement("div");
                speInfo.setAttribute("id", "speContent");
                cajasInd.appendChild(speInfo);

                // Resumen estructura | body | -> | main#contenedor | -> | bigBox#bigSpecies | -> | cajasInd.speciesBox x8 | -> | speInfo#speContent |

                cajasInd.style.display = "grid";
                cajasInd.style.gridTemplateColumns = "30% auto";

                var datesList = document.createElement("ul");
                datesList.setAttribute("id", "listado");
                speInfo.appendChild(datesList);

                // Creamos las información que queremos introducir sobre la especie.

                var datosSpecies = document.createElement("li");
                datosSpecies.innerHTML = "Color de ojos: " + info.eye_colors;
                datesList.appendChild(datosSpecies);


                var datosSpecies1 = document.createElement("li");
                datosSpecies1.innerHTML = "Color de pelo: " + info.hair_colors;
                datesList.appendChild(datosSpecies1);

                var datosSpecies2 = document.createElement("li");
                datosSpecies2.innerHTML = "Color de piel: " + info.skin_colors;
                datesList.appendChild(datosSpecies2);

                var datosSpecies3 = document.createElement("li");
                datosSpecies3.innerHTML = "Lenguaje: " + info.language;
                datesList.appendChild(datosSpecies3);


                var planetas = document.createElement("div");
                planetas.setAttribute("class", "content");
                speInfo.appendChild(planetas);


                var planeta = document.createElement("p");
                planeta.innerHTML = "Descubre su planeta natal";
                planetas.appendChild(planeta);

                var planetBox = document.createElement("div");
                planetBox.setAttribute("class", "secondContent");
                planetas.appendChild(planetBox);


                var personajes = document.createElement("div");
                personajes.setAttribute("class", "content");
                speInfo.appendChild(personajes);

                var personaje = document.createElement("p");
                personaje.innerHTML = "Conoce los personajes de su especie";
                personajes.appendChild(personaje);

                var nameBox = document.createElement("div");
                nameBox.setAttribute("class", "secondContent");
                personajes.appendChild(nameBox);


                cajasInd.classList.add("activa");

                bigBox.style.gridTemplateColumns = "auto";

                verificar();

                var position = asignedIds.indexOf(cajasInd.id)
                asignedIds.splice(position, 1)

                for (var x = 0; x < asignedIds.length; x++) {
                    document.getElementById(asignedIds[x]).style.display = "none";
                }



                cajasInd.removeEventListener("click", crearcontenido);

                personajes.addEventListener("click", function () {

                    var personas = info.people;


                    for (var y = 0; y < personas.length; y++) {
                        fetch(personas[y])
                            .then(res => res.json())
                            .then(personData => {

                                console.log(personData);


                                var characterNumber = personData.url;

                                var personimagesRute = "https://starwars-visualguide.com/assets/img/characters/"+characterNumber.slice(28,-1)+".jpg"
                                var personImages = document.createElement("img");
                                personImages.setAttribute("src", personimagesRute);
                                nameBox.appendChild(personImages);

                                var nombres = document.createElement("h4");
                                nombres.innerHTML = personData.name;
                                nameBox.appendChild(nombres);





                            })

                    }

                })

            }


            bigBox.appendChild(cajasInd);
            cajasInd.appendChild(principalBox);
            principalBox.appendChild(imagenes);
            principalBox.appendChild(nombres);
        })


}

for (var i = 0; i < species.length; i++) {

    var imagesRute = "https://starwars-visualguide.com/assets/img/species/" + species[i] + ".jpg"
    peticionAjax("https://swapi.co/api/species/" + species[i] + "/?format=json", imagesRute);
}


function verificar() {
    for (var x = 0; x < asignedIds.length; x++) {
        var verify = document.getElementById(asignedIds[x]).classList.contains("activa");
        console.log(verify);
        if (verify === true) {
            var cerrar = document.createElement("nav");
            cerrar.setAttribute("id", "close");
            cerrar.innerHTML = "X";
            document.body.appendChild(cerrar);

        }
    }

    cerrar.addEventListener("click", function () {

        var selectec = document.querySelector(".activa");
        asignedIds.push(selectec.id);
        console.log(asignedIds);
        document.body.removeChild(cerrar);

        var contenido = document.querySelector("#speContent");

        selectec.classList.remove("activa");
        selectec.removeChild(contenido);

        bigBox.style.gridTemplateColumns = "auto auto auto auto";

        for (var x = 0; x < asignedIds.length; x++) {
            document.getElementById(asignedIds[x]).style.display = "inline";
        }

    })
}

