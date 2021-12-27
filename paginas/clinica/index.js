console.log("joooo")

document.addEventListener("scroll",function(){
    scrollMenu()
})
let main=document.querySelector(".main");

let pTop=window.pageYOffset;
function scrollMenu(){
    let pAct=window.pageYOffset;
    if(pTop<pAct){
        main.style.top="-200px";
    }else{
        main.style.top="0px";

    }
    pTop=pAct
}
// **********************************
let bars=document.querySelector(".bars")
let cerrar_ul=document.querySelector(".cerrar_ul");
let ul=document.querySelector(".ul")

bars.addEventListener("click", ()=>{
    ul.classList.toggle("mostrar_ul")

})
ul.addEventListener("click",(u)=>{
close(u.target)
})

function close(c){
if(c!==ul){
    ul.classList.toggle("mostrar_ul")

}
}