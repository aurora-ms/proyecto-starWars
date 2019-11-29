

var urlfilms = "https://swapi.co/api/films/?format=json"
var filmsImages = "https://starwars-visualguide.com/assets/img/films/"

films(urlfilms, filmsImages)



function films(urlfilms, filmsImages) {
    fetch(urlfilms)
        .then(res => res.json())
        .then(filmsData => {

            var film = filmsData.results;

            for (var x = 0; x < film.length; x++) {
                console.log(film[x].title + film[x].episode_id);
                var contenFilms = document.createElement("div");
                document.getElementById("filmcont").appendChild(contenFilms);

                var y = x + 1

                var imgs = document.createElement("img");
                imgs.setAttribute("src", filmsImages + "/" + y + ".jpg");
                contenFilms.appendChild(imgs);

                var filmTitle = document.createElement("h1");
                filmTitle.innerText = film[x].title;
                contenFilms.appendChild(filmTitle);

                var filmDescript = document.createElement("p");

                var sin_salto = film[x].opening_crawl.split("\r\n").join(" ");
                filmDescript.innerText = sin_salto;
                contenFilms.appendChild(filmDescript);

                var filmDirector = document.createElement("h2");
                filmDirector.innerText = film[x].director;
                contenFilms.appendChild(filmDirector);
            }

        })
        .catch(error => console.error('error:', error));
}