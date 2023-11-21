const search_cancel=document.querySelector(".search-cancel"),burger_div=document.querySelector(".burger-div"),body=document.querySelector("body"),search1600px=document.querySelector(".search1600px")
search_cancel.addEventListener("click",e=>{
    search_cancel.classList.toggle("active")
    search1600px.classList.toggle("active")
})
body.addEventListener("click",e=>{
    place=e.target.parentElement
    console.log(place)
    if(!place.classList.contains("search1600px") && !place.classList.contains("search-cancel")){
        search_cancel.classList.remove("active")
        search1600px.classList.remove("active")
    }
    if(!place.classList.contains("menu") &&!place.classList.contains("nav"),!place.classList.contains("burger-div")){
        document.querySelector(".menu").classList.remove("active")
        document.querySelector(".menu2").classList.remove("active")
    }
})
burger_div.addEventListener("click",()=>{
    document.querySelector(".menu").classList.add("active")
    document.querySelector(".menu2").classList.add("active")
})
window.onload=function(){
    document.querySelector(".musilm-prayer").style.transform="translateY(-0%)"
}
// popap
const prayer=document.querySelectorAll(".prayer")
console.log(prayer)