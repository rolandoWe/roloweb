
console.log("hora")

let anioNuevo=new Date(`Jan 1 2023 00:00:00`).getTime();

function operar(){
    let hoy = new Date().getTime();
    let nuevo=anioNuevo-hoy;

    let segundos=1000;
    let minutos=segundos*60;
    let horas=minutos*60;
    let dias=horas*24;


    let d=Math.floor(nuevo / dias);
    let h=Math.floor((nuevo% (dias)) / (horas));
    let m=Math.floor((nuevo% (horas))/(minutos));
    let s=Math.floor((nuevo%(minutos))/(segundos))

    document.querySelector('.dia').innerHTML=d;
    document.querySelector('.hora').innerHTML=h;
    document.querySelector('.minuto').innerHTML=m;
    document.querySelector('.segundo').innerHTML=s;
}
operar();
setInterval(operar,1000)
