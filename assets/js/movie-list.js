const api_key ="c3a09871e5735dbb1ffa130f49fbdc5d"
const base_url ="https://api.themoviedb.org/3"
const img_url="https://image.tmdb.org/t/p/w500/"

const trend ='/trending/movie/day'

const genre_name=window.localStorage.getItem('genre_name')
const load_more= document.querySelector('.more')

const urlparam=window.localStorage.getItem('urlparam')
const content=document.querySelector('.movie_list_content')
      
let pages=0;
let cur_page=1;
document.title=`${genre_name} Movies` 


  





async function popular_movies(api){
  const response = await fetch(api);
  const data = await response.json();
  print_data(data.results);


}

async function print_data(evt){

  
  const card  = document.querySelector(".inner_movies_list")
  await  evt.map(evt=>{
 
        card.innerHTML+=
`

   
   
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
    
const api_url=`${base_url}/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=true&page=1&${urlparam}`
popular_movies(api_url)


load_more.addEventListener('click',function(){
  cur_page++
  



    async function popular_movies_1(api){
      const response = await fetch(api);
      const data = await response.json();
      print_data_1(data.results);
    
    
    }
    
    async function print_data_1(evt){
    
      
      const card  = document.querySelector(".inner_movies_list")
      await  evt.map(evt=>{
     
            card.innerHTML+=
    `
    
       
       
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
        const api_url2=`${base_url}/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=true&page=${cur_page}&${urlparam}`
        popular_movies_1(api_url2)
        
      
      
      })
     



















      


    async function title(api){
      const response = await fetch(api);
      const data = await response.json();
      print_data_2(data.results);
    
    
    }
    
    async function print_data_2(evt){
    
      
      const card  = document.querySelector(".coming_movie")
      await  evt.map(evt=>{
     
            card.innerHTML=
    `
    
       
    <h2>All ${genre_name} Movies</h2>


    
    
    
    
    
    
    `
    
    
    
    
        })
        }
    








 

     

  








     
      title(api_url)
      



 





 