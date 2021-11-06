const API_KEY = 'api_key=55d1e67ca3f35e2f1fc11825c314baa7';
const BASE_URL = 'https://api.themoviedb.org/3';
const APL_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const urlsearh = BASE_URL + '/search/movie?' +API_KEY;

grtmovies(APL_URL);

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const home = document.getElementById('home');

function grtmovies(url) {


    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showmovies(data.results);
    })
}

function showmovies(data) {
    main.innerHTML = "";
    data.forEach(movie => {
        const {title, poster_path, vote_average, overview} = movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${IMG_URL+poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getcolor(vote_average)}">${vote_average}</span>
        </div>

        <div class="overview">
            <h1>overview</h1>
            ${overview}
        </div>
        `

        main.appendChild(movieEl);
    });
}

 function getcolor(vote) {
     if (vote >= 8) {
         return 'green'
     }
     else if (vote >= 3.5) {
         return 'orange'
     }
     else 
         return 'red'
     }
 

form.addEventListener('submit', (e)=> {
     e.preventDefault();

     const searchterm = search.value;

     if (searchterm) {
         grtmovies(urlsearh + '&query=' + searchterm);
     }
    search.value ="";
});

home.addEventListener('click', ()=>{
     grtmovies(APL_URL)
})








































































































































































































































































































































































































































