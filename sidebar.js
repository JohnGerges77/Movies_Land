const genre  = document.querySelector(".genre_links")
const genre_list=[

        
    {
      "id": 28,
      "name": "Action"
    },
    {
      "id": 12,
      "name": "Adventure"
    },
    {
      "id": 16,
      "name": "Animation"
    },
    {
      "id": 35,
      "name": "Comedy"
    },
    {
      "id": 80,
      "name": "Crime"
    },
    {
      "id": 99,
      "name": "Documentary"
    },
    {
      "id": 18,
      "name": "Drama"
    },
    {
      "id": 10751,
      "name": "Family"
    },
    {
      "id": 14,
      "name": "Fantasy"
    },
    {
      "id": 36,
      "name": "History"
    },
    {
      "id": 27,
      "name": "Horror"
    },
    {
      "id": 10402,
      "name": "Music"
    },
    {
      "id": 9648,
      "name": "Mystery"
    },
   
    {
      "id": 878,
      "name": "Science_Fiction"
    },
    {
      "id": 10770,
      "name": "TV_Movie"
    },
   
    {
      "id": 53,
      "name": "Thriller"
    },
    {
      "id": 10752,
      "name": "War"
    },
    
          
        
  ]
  var selected_genre=[];
  setgeners();
   function setgeners(){
     
      genre_list.forEach(evt=>{
  const genre_text =document.createElement('a')
  genre_text.href='./movie-list.html'
  genre_text.classList.add('sidebar_links')
  genre_text.id=evt.id
  genre_text.innerText=evt.name;

  genre_text.setAttribute('onclick',`getmovies_list(
    "with_genres=${evt.id}","${evt.name}"
  )`);

  genre.append(genre_text);
  
      })
  }