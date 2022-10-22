
window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}



let searchBtn = document.querySelector("#search-btn");
let searchBar = document.querySelector(".search-bar-container");
searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
});




let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");
menu.addEventListener('click',()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});




let videoBtn = document.querySelectorAll(".vid-btn");
videoBtn.forEach(btn=>{
    btn.addEventListener('click',()=>{
        document.querySelector('.controls .active').classList.remove("active");
        btn.classList.add("active");

        let src= btn.getAttribute("data-src");
        document.querySelector("#video-slider").src=src;
    });
});




function abc(){
    var a=document.querySelector("#a1").value;
    var b=document.querySelector("#a2").value;
    var c=document.querySelector("#a3").value;
    var d=document.querySelector("#a4").value;
    if(a!='' && b!='' && c!='' && d!='')
        alert("Booked! you will receive mail shortly");
}

function def(){
    var a=document.querySelector("#b1").value;
    var b=document.querySelector("#b2").value;
    var c=document.querySelector("#b3").value;
    var d=document.querySelector("#b4").value;
    var e=document.querySelector("#b5").value;
    if(a!='' && b!='' && c!='' && d!='' && d!='')
        alert("message sent");
    

}