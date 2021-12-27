

let nav=document.querySelector(".nav");

document.addEventListener("scroll",function(){
scrollMenu()
})

let pT=window.pageYOffset;

function scrollMenu(){
    let pA=window.pageYOffset;
    if(pT<pA){
        nav.style.top="-200px"
    }else{
        nav.style.top="0"

    }
    pT=pA
}