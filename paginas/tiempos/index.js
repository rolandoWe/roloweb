
let flecha=document.querySelectorAll(".flecha")
let dato=document.querySelectorAll(".datos")

for(let i=0;i<flecha.length;i++){
    flecha[i].addEventListener("click",function(){
        for(let x=0;x<dato.length;x++){
            if(i==x){
                dato[x].classList.toggle("ver_dato")
                // flecha[i].classList.toggle("flechaR")
            }else{
                dato[x].classList.remove("ver_dato")
                // flecha[i].classList.toggle("flechaR")
            }
        }
    })
}