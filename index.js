

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
// CUENTA REGRESIVA AÑO NUEVO*****************
let dia=document.querySelector(".dia");
let hora=document.querySelector(".hora");
let minuto=document.querySelector(".minuto");
let segundo=document.querySelector(".segundo");

let año=new Date("1 Jan 2023 00:00:00").getTime()
function crono(){
    let fechaACtual=new Date().getTime()
    let actual=año-fechaACtual;

    let segundos=1000;
    let minutos=segundos*60;
    let horas=minutos*60;
    let dias=horas*24;

    let diaAct=Math.floor(actual/(dias));
    let horaAct=Math.floor((actual%(dias))/(horas));
    let minAct=Math.floor((actual% (horas))/(minutos));
    let secAct=Math.floor((actual%(minutos))/segundos)
    if(secAct<10){secAct="0"+secAct}else{secAct};
    if(minAct<10){minAct="0"+minAct}else{minAct};

dia.innerHTML=diaAct;
hora.innerHTML=horaAct;
minuto.innerHTML=minAct;
segundo.innerHTML=secAct

}
crono()
setInterval(crono,1000)

