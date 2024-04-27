
let search_btn = document.querySelector(".search_btn")
let search_input=document.querySelector(".search_input")
let search_model=document.querySelector(".search_model")
search_img=document.querySelector('.search_img')
let img_cover=document.querySelector('.img_cover')
let close=document.querySelector(".close")
search_btn.addEventListener("click",()=>{
    search_input.classList.toggle("active")
    close.classList.toggle("active")
    search_img.classList.toggle('click')
  
    search_img.classList.toggle('search_img')
  
})
 


const contain=document.querySelector('.container')

search_input.addEventListener('input',function(){

if(!search_input.value.trim()){
  search_model.classList.remove('active')
  contain.classList.remove("none")
  return
}
 
contain.classList.add("none")
search_model.classList.add("active")
const card= document.querySelector(".inner_search")
card.innerHTML=''

      async function popular_movie(api){
        const response = await fetch(api);
        const data = await response.json();
        print_data(data.results);
      
      
      }
  
     
   
      async function print_data(evt){
      
       
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





          async function title(api){
            const response = await fetch(api);
            const data = await response.json();
            print_data_2(data.results);
          
          
          }
          
          async function print_data_2(evt){
          
            
            const search_title  = document.querySelector(".search_title")
            await  evt.map(evt=>{
           
              search_title.innerHTML=
          `
          
             
        <h3>Result For</h3>
  <h1>${search_input.value}</h1>

          
          
          
          
          
          `
          
          
          
          
              })
              }
          
      
      
      
          

        
      const api_urll=`${base_url}/search/movie?api_key=${api_key}&query=${search_input.value}&include_adult=false&page=1`
      popular_movie(api_urll)
      title(api_urll)


      console.log(search_input.value)
        
    })

  