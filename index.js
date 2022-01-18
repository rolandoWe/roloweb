

document.addEventListener("scroll",function(){
    menuScroll()
})
let pageTop=window.pageYOffset;
function menuScroll(){
    let pageAct=window.pageYOffset;
    if(pageTop<pageAct){
        document.querySelector(".nav").style.top="-200px"
    }else{
        document.querySelector(".nav").style.top="0px"
    }
pageTop=pageAct
}
let hambur=document.querySelector(".hamburguesa")
let close=document.querySelector(".close")
hambur.addEventListener("click",()=>{
    document.querySelector(".ul").classList.toggle("ver_ul")
})
document.querySelector(".ul").addEventListener("click",(u)=>{
// console.log(u.target)
cerrarUl(u.target)
})
function cerrarUl(i){
 if(i!=="ul"){
    document.querySelector(".ul").classList.toggle("ver_ul")  
 }
}

// ANIMACIONES CSS

let dig="";
[5].forEach(function(f){
    Array(f).fill().forEach((x,d)=>{
        dig+=([...Array(40).fill(`<span class='span'>$</span>`)].join(""))+"<br>"
    })
})
document.querySelector(".anim_p").innerHTML=dig;

let span=document.querySelectorAll(".span");

function animarSpan(){
    for(let i=0;i<span.length;i++){
        let num=i/100+2;
        span[i].style.animation="anim "+ num+"s infinite"
    }
}
animarSpan()