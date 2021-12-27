

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