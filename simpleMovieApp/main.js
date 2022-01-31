const APIKEY = "a77293d0aeba5b961d941e706e5b7545";
const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=a77293d0aeba5b961d941e706e5b7545";
//https://api.themoviedb.org/3/movie/550?api_key=a77293d0aeba5b961d941e706e5b7545
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI ="https://api.themoviedb.org/3/search/movie?&api_key=a77293d0aeba5b961d941e706e5b7545&query=";
const movieDiv = document.querySelector(".movies");
const form = document.getElementById("form");
const search = document.querySelector(".search");
const faSearch = document.querySelector(".fa-search");


getMovies(APIURL);

async function getMovies(url){
    const resp = await fetch(url);
    const respData = await resp.json();

    // console.log(respData.results);
    // respData.results.map(movie =>{
    //     const img = document.createElement('img')
    //     img.src = IMGPATH + movie.poster_path;
    //     document.body.appendChild(img);
    // })
    movieDiv.innerHTML=respData.results.map(item =>
    `<div>
      <div class="movieCard">
        <img src="${IMGPATH+item.poster_path}"/>
          <div class="movieDesc">
          <div>Title: ${item.original_title}</div>
          <div>Average Vote: <span class="${movieRate(item.vote_average)}">
            ${item.vote_average}</span></div>
          <div>Release Date: ${item.release_date}</div>
          <div class="overview">
          <h3>Overview:</h3>
          ${item.overview}
          </div>
          </div>
      </div>
    </div>`
    ).join('')
}

function movieRate(vote){
  if(vote>=8){
    return "green";
  }else if(vote>=6){
    return "yellow"
  }else if(vote>=4){
    return "orange"
  }else{
    return "red"
  }
}



form.addEventListener("submit", (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if (searchTerm) {
      getMovies(SEARCHAPI + searchTerm);

      search.value = "";
  }
});