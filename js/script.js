



// function cogerDatos(tipeSpecie) {
  
//  var speciesDates = 'https://swapi.co/api/species/'+tipeSpecie+'/';
//     fetch(speciesDates)
//         .then(res => res.json())
//         .then(datos => console.log(datos.name + " " + datos.classification))
//         .catch(error => console.log("error"));
// }

// function cargarImage(tipeSpecie) {
//   var speciesImages = 'https://starwars-visualguide.com/assets/img/species/'+tipeSpecie+'.jpg'
//   var x = document.createElement("IMG");
//   x.setAttribute("src", ""+speciesImages+"");
//   x.setAttribute("class", "imagenes");
//   document.body.appendChild(x);   
// }

console.time("tiempo");

var especies = [1, 2, 3, 6, 8, 10, 34, 20];

document.getElementById("humanos").addEventListener("click", function(){
  //var speciesDates = 'https://swapi.co/api/species/'+especies[1]+'/';
 //var speciesImages = 'https://starwars-visualguide.com/assets/img/species/'+especies[1]+'.jpg'
 var i=0; 
  loadGeneral(i, speciesDates, speciesImages);
  return speciesDates, speciesImages;


});

for (var i = 0; (especies.length - i>0); i++){
 
 var speciesDates = 'https://swapi.co/api/species/'+especies[i]+'/?format=json';
 var speciesImages = 'https://starwars-visualguide.com/assets/img/species/'+especies[i]+'.jpg'
 


 loadGeneral(i, speciesDates, speciesImages);
 
}

function loadGeneral(i, speciesDates, speciesImages) {
   fetch(speciesDates)
        .then(res => res.json())
        .then(datos => {
          showSpecies(datos, name, speciesImages)
        })
        .catch(error => console.log("error"));
        

}


function showSpecies(datos, name, speciesImages) {
  document.getElementById("contenedor").innerHTML+= `<div class="character">
  <div class="imagenes">
    <img src= "${speciesImages}" alt="${datos.name}" class="imgCharacter"></img>
  </div>
    <div class="datos">
      <h2>${datos.name}<h2>
    </div>
  </div>`;
}
console.timeEnd("tiempo");


// document.getElementById("humanos").addEventListener("click", function(){
//  var humanSpecie = 1;
//  cogerDatos();
//  cargarImage();
 
//  console.log (tipeSpecie)
 
// });






//var tipeSpecie = "";
//
//document.getElementById("humanos").addEventListener("click", function(){
//  var tipeSpecie = 1;
//  cogerDatos();
//  cargarImage();
//  
//  console.log (tipeSpecie)
//  
//});
//
//document.getElementById("droid").addEventListener("click", function(){
//  var tipeSpecie = 2;
//  cogerDatos();
//  cargarImage();
//  
//
//});
//
//var specie = document.getElementById(tipeSpecie).value;





// contenido sin numeracion 
// console.time("tiempo");

// var especies = [1, 2, 3, 4, 5, 6, 7, 8];
//  var speciesDates = 'https://swapi.co/api/species/?format=json';


//  document.getElementById("humanos").addEventListener("click", function(){
//   //var speciesDates = 'https://swapi.co/api/species/'+especies[1]+'/';
//  //var speciesImages = 'https://starwars-visualguide.com/assets/img/species/'+especies[1]+'.jpg'
//  var i=0; 
//   loadGeneral(i, speciesDates, speciesImages);
//   return speciesDates, speciesImages;


// });

// for (var i = 0; (especies.length - i>0); i++){
 

//  var speciesImages = 'https://starwars-visualguide.com/assets/img/species/'+especies[i]+'.jpg'
 
//  var x =  especies[i];

//  loadGeneral(i, x, speciesDates, speciesImages);
 
// }

// function loadGeneral(i, x, speciesDates, speciesImages) {
//    fetch(speciesDates)
//         .then(res => res.json())
//         .then(species => {
//           showSpecies(x, species, speciesImages)
//         })
//         .catch(error => console.log("error"));
        

// }


// function showSpecies(x, species, speciesImages) {
//   document.getElementById("contenedor").innerHTML+= `<div class="character">
//   <div class="imagenes">
//     <img src= "${speciesImages}" alt="${species.results[x].name}" class="imgCharacter"></img>
//   </div>
//     <div class="datos">
//       <h2>${species.results[x].name}<h2>
//       <h3>${species.results[x].classification}</h3>
//     </div>
//   </div>`;
// }
// console.timeEnd("tiempo");