let flecha=document.querySelectorAll(".flecha")
let dato=document.querySelectorAll(".datos")

for(let i=0;i<flecha.length;i++){
    flecha[i].addEventListener("click",function(){
        for(let x=0;x<dato.length;x++){
            if(i==x){
                dato[x].classList.toggle("ver_dato")
            }else{
                dato[x].classList.remove("ver_dato")
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
    if(v.className=="diciembre2021 mes"){
        reT()
        document.querySelectorAll(".diciembre").forEach(function(h){
            h.classList.toggle("no")
        })
    }else if(v.className=="enero2022 mes"){
        reT()
        document.querySelectorAll(".enero").forEach(function(h){
            h.classList.remove("no")
        }) 
    }else if(v.className=="febrero2022 mes"){
        reT()
        document.querySelectorAll(".febrero").forEach(function(h){
            h.classList.remove("no")
        }) 
    }
}
document.querySelector(".ver_mes").addEventListener("click",function(f){
    document.querySelector(".sub_ul").classList.toggle("ver_sub_ul")
    
})
document.querySelectorAll(".mes").forEach(function(f){
    f.addEventListener("click",function(){
        document.querySelector(".sub_ul").classList.toggle("ver_sub_ul")
    })
})