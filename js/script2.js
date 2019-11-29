var especies = [1, 2, 3, 6, 8, 10, 34, 20];

var x = 0;


var speciesDates =  especies.map(function (elemento){return "https://swapi.co/api/species/"+ elemento + "/?format=json"});
var speciesImages = especies.map(function (elemento){return "https://starwars-visualguide.com/assets/img/species/"+ elemento + ".jpg"});





// document.getElementById("humanos").addEventListener("click", function(){
//   loadSpecieDates(speciesDates[0], speciesImages[0]);
//        x = 1;
// })

// document.getElementById("droides").addEventListener("click", function(){
//   loadSpecieDates(speciesDates[1], speciesImages[1]);
//    x = 1;
// })

for (var i = 0; especies.length>i; i++)
{
    loadSpecieDates(speciesDates[i], speciesImages[i]);
    
}


function loadSpecieDates(speciesDates, speciesImages){
    fetch(speciesDates)
    .then(res => res.json())
    .then(datos => {
      console.log(res.json());
      if (x===0){
      document.getElementById("contenedor").innerHTML+= `<div class="character">
      <div class="imagenes">
        <img src= "${speciesImages}" alt="${datos.name}" class="imgCharacter"></img>
      </div>
        <div class="datos">
         <button id="${datos.name}" type="button" value="1"> <h2>${datos.name}<h2></button>
        </div>
      </div>`;
      
      }
      else {
        cargaSelecionado(datos, speciesImages);
      } 
    })
    .catch(error => console.log("error"))
    return i;
}

function cargaSelecionado(datos, speciesImages) {
    document.getElementById("contenedor").innerHTML+= `<div class="character">
    <div class="imagenes">
      <img src= "${speciesImages}" alt="${datos.name}" class="imgCharacter"></img>
    </div>
      <div class="datos">
        <h2>${datos.name}<h2>
      </div>
    </div>`;
  }