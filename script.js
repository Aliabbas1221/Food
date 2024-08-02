var nav=document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop>20){
        nav.classList.add("header-scrolled");
    }else{
        nav.classList.remove("header-scrolled");
    }
}


// remove nav show class
var navbar=document.querySelectorAll(".nav-link");
var navcollapes=document.querySelector(" .navbar-collapse .collapse");
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navcollapes.classList.remove("show")
    })
})