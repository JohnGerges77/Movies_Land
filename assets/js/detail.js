
const api_key ="c3a09871e5735dbb1ffa130f49fbdc5d"
const img_url="https://image.tmdb.org/t/p/w500/"
const original_img='https://image.tmdb.org/t/p/original/'
const base_url ="https://api.themoviedb.org/3"
const detail='movie/';
const trend ='/trending/movie/day'

const fetch_fun =function(url,res,op){

  fetch(url)
  .then(response=>response.json())
  .then(data=>res(data,op))
}
const getgeners =function(genre_list){
  const newgenre =[];
  for(const{name} of genre_list) newgenre.push(name);
  return newgenre.join(", ")
}
  

const getcasts =function(cast_list){
  const newcast =[];
  for(let i=0, len=cast_list.length;i<len && i<10 ; i++){
  const {name} =cast_list[i];
   newcast.push(name);

  }
  return newcast.join(", ")
}

const all=document.querySelector('.detail')
const movie_id=window.localStorage.getItem("id")
console.log(movie_id)

const filter_videos =function(v){
  return v.filter(({type,site})=>(type==="Trailer" || type==="Teaser") && site==="Youtube")
}



fetch_fun(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${api_key}&append_to_response=casts,videos,images,releases`
,function(movie){

  const{
poster_path,
    title,
    release_date,
    vote_average,
    genres,
    runtime,
    overview,
    casts:{cast},
    videos:{results:videos},
    releases:{countries:[{certification}]} 
   
  }=movie
  document.title=title
  

 
const details_content=document.querySelector('.movie_details')

details_content.innerHTML=
`



</div>
<div class="movie_poster">
  <img src=${img_url}${poster_path} alt="" class="img_cover">

</div>

<div class="details_box">
  <div class="details_items">
    <h1 class="details_title">
    ${title}
    </h1>
    <div class="details_rating">
     
      <img src="./assets/images/star.png" alt="" width="27px">
  
     
      <span>${vote_average.toFixed(1)}</span>
 
    
    </div>

    <div>
    <span>${runtime}m</span>
    </div>
    <div>
    <span>${release_date}</span>
    </div>


    <div class="details_genre">
      <p>${certification}</p>
      <span>
  ${getgeners(genres)}
        </span>
    </div>
    <div class="details_des">
      
${overview}
    </div>

    <div class="starring">
      <p>Starring :</p>
      <span>
      ${getcasts(cast)}
        </span>
    </div>


   

    </div>
  
</div>

`





})







async function movies(api){
  const response = await fetch(api);
  const data = await response.json();
  print_data(data.results);


}


async function print_data (evt){

const card  = document.querySelector(".inner_detail")

await  evt.map(evt=>{
      
      card.innerHTML+=`

 
<div class="cards detail_cards">
<div class="img_card">
<img src=${img_url}${evt.poster_path} alt="" class="img_cover">
</div>

<h4 class="title">${evt.title}</h4>

<div class="rating">
<img src="./assets/images/star.png" alt="">
<span class="value">${(evt.vote_average).toFixed(1)}</span>
<a href="./detail.html" class="card_btn" onclick="getid(${evt.id})"></a>
    </div>

</div>





`



  })
  }



    const api_url_detail=` ${base_url}/${detail}${movie_id}/recommendations?api_key=${api_key}&page=1`
    movies(api_url_detail)
    




