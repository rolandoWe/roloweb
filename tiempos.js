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

// Aqui trabajamos con el boton <<ver por mes>>
document.querySelector(".ull").addEventListener("click",function(g){
    ver(g.target)
})
function reT(){
    document.querySelectorAll(".grupo_datos").forEach(function(f){
        f.classList.add("no")
          })
}
function ver(v){
    if(v.className=="diciembre2021"){
        reT()
        document.querySelectorAll(".diciembre").forEach(function(h){
            h.classList.toggle("no")
        })
    }else if(v.className=="enero2022"){
        reT()
        document.querySelectorAll(".enero").forEach(function(h){
            h.classList.remove("no")
        }) 
    }
}