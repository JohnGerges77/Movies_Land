
let sidebar=document.querySelector(".sidebar")
let menu=document.querySelector('.menu_btn')
menu.addEventListener("click",()=>{
    sidebar.classList.toggle("active")
   
})

let inner_scroll=document.querySelectorAll(".inner").forEach(function(e){
    e.addEventListener("wheel",evt=>{
        evt.preventDefault();
        let deltay = evt.deltaY;
        let speed =deltay*2.3;
        e.scrollLeft-=speed;


})

    
});


const getid=function(id){
    window.localStorage.setItem("id",String(id))
}


const getmovies_list=function(urlparam,genre_name ){
   
    window.localStorage.setItem("genre_name",genre_name)
    window.localStorage.setItem("urlparam",urlparam)
}



