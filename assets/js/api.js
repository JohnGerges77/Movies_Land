
const api_key ="c3a09871e5735dbb1ffa130f49fbdc5d"
const img_url="https://image.tmdb.org/t/p/w500/"
const original_img='https://image.tmdb.org/t/p/original/'
const base_url ="https://api.themoviedb.org/3"
const now_playing_movies='/movie/now_playing';
const coming_movies='/movie/upcoming';
const top_rated_movie='/movie/top_rated';
const trend ='/trending/movie/day'
const popular ='/movie/popular'





  const main_card= document.querySelector(".main_cards")
const mini_card_list =[



   
  {
    "adult": false,
    "backdrop_path": "/qrGtVFxaD8c7et0jUtaYhyTzzPg.jpg",
    "genre_ids": [
      28,
      878,
      12
    ],
    "id": 823464,
    "original_language": "en",
    "original_title": "Godzilla x Kong: The New Empire",
    "overview": "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
    "popularity": 1722.61,
    "poster_path": "/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
    "release_date": "2024-03-27",
    "title": "Godzilla x Kong: The New Empire",
    "video": false,
    "vote_average": 6.6,
    "vote_count": 752
  },
  

  
]


 


 

set_mini_cards2();
function set_mini_cards2(){
   
  mini_card_list.forEach(evt=>{



main_card.innerHTML+=
`
<div class=main_card_cover>
<div class="card">


<div class='main_img'>

    <img src="${original_img}${evt.poster_path}" autoplay muted loop alt="" class="img_cover" >
    </div>
  <div class="card_contain">
    <h3>${evt.title}</h3>

    <div class="card_list">
<div>${evt.release_date.split('-')[0]}</div>
<span>${evt.vote_average.toFixed(1)}</span>
    </div>
    <p class="gener">Action, Science Fiction, Adventure </p>
    <p class='card_text'>
   ${evt.overview}
    </p>

    <a href="./detail.html" class="btn"  onclick="getid(${evt.id})">
    <div class="watch">
    
        <img src="./assets/images/play_circle.png"
         alt="">
        <span>Watch Now</span>
        
      
    </div>
  </a>
    </div>

       
      
       
  </div>

<div>

`





    })
}










async function movies(api){
    const response = await fetch(api);
    const data = await response.json();
    print_data(data.results);


}


async function print_data (evt){

  const card  = document.querySelector(".inner")
 
  await  evt.map(evt=>{
        
        card.innerHTML+=`

   
<div class="cards">
<div class="img_card">
  <img src=${img_url}${evt.poster_path} alt="" class="img_cover img_movie">
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

const api_url_coming_movies=` ${base_url}/${coming_movies}?api_key=${api_key}`
movies(api_url_coming_movies)




async function top_movie(api){
  const response = await fetch(api);
  const data = await response.json();
  print_data_2(data.results);


}

async function print_data_2 (top_movie){

  
  const card_top  = document.querySelector(".inner_top")
  await  top_movie.map(top_movie=>{
        
        card_top.innerHTML+=
`

   
<div class="cards">
<div class="img_card">
  <img src=${img_url}${top_movie.poster_path} alt="" class="img_cover img_movie">
</div>

<h4 class="title">${top_movie.title}</h4>

<div class="rating">
  <img src="./assets/images/star.png" alt="">
  <span class="value">${(top_movie.vote_average).toFixed(1)}</span>
<a href="./detail.html" class="card_btn" onclick="getid(${top_movie.id})"></a>
      </div>

</div>





`



    })
    }



const api_url_top=` ${base_url}/${top_rated_movie}?api_key=${api_key}`
top_movie(api_url_top)

async function now_movies(api){
  const response = await fetch(api);
  const data = await response.json();
  print_data_3(data.results);


}

async function print_data_3(now_movies){

  
  const now_card  = document.querySelector(".now_inner")
  await  now_movies.map(now_movies=>{
        
        now_card.innerHTML+=
`

   
<div class="cards">
<div class="img_card">
  <img src=${img_url}${now_movies.poster_path} alt="" class="img_cover img_movie">
</div>

<h4 class="title">${now_movies.title}</h4>

<div class="rating">
  <img src="./assets/images/star.png" alt="">
  <span class="value">${(now_movies.vote_average).toFixed(1)}</span>
<a href="./detail.html" class="card_btn" onclick="getid(${now_movies.id})"></a>
      </div>

</div>





`



    })
    }




  
const api_url3=` ${base_url}/${now_playing_movies}?api_key=${api_key}`
now_movies(api_url3)



async function trendy(api){
  const response = await fetch(api);
  const data = await response.json();
  print_data_4(data.results);


}

async function print_data_4(popular_movies){

  
  const now_card  = document.querySelector(".inner_popular")
  await  popular_movies.map(popular_movies=>{
        
        now_card.innerHTML+=
`

   
<div class="cards">
<div class="img_card">
  <img src=${img_url}${popular_movies.poster_path} alt="" class="img_cover img_movie">
</div>

<h4 class="title">${popular_movies.title}</h4>

<div class="rating">
  <img src="./assets/images/star.png" alt="">
  <span class="value">${(popular_movies.vote_average).toFixed(1)}</span>
<a href="./detail.html" class="card_btn" onclick="getid(${popular_movies.id})"></a>
      </div>

</div>





`



    })
    }





const api_url4=` ${base_url}/${popular}?api_key=${api_key}`
trendy(api_url4)




  


async function trendy_movies(api){
  const response = await fetch(api);
  const data = await response.json();
  print_data_5(data.results);


}

async function print_data_5(popular_movies){

  
  const now_card  = document.querySelector(".inner_trendy")
  await  popular_movies.map(popular_movies=>{
        
        now_card.innerHTML+=
`

   
<div class="cards">
<div class="img_card">
  <img src=${original_img}${popular_movies.poster_path} alt="" class="img_cover img_movie">
</div>
<div>
<h4 class="title">${popular_movies.title}</h4>
</div>
<div class="rating">
  <img src="./assets/images/star.png" alt="">
  <span class="value">${(popular_movies.vote_average).toFixed(1)}</span>
<a href="./detail.html" class="card_btn" onclick="getid(${popular_movies.id})"></a>
      </div>

</div>





`



    })
    }





const api_url5=` ${base_url}/${trend}?api_key=${api_key}`
trendy_movies(api_url5)




    