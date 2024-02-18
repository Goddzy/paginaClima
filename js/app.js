let lon;
let lat;
let temperatura = document.getElementById('temperatura')
let icono = document.getElementById('icono')
let localidad = document.getElementById('localidad')

window.addEventListener('load', ()=>{
    
 if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position)=>{
        //obtengo la localización del navegador
        console.log(position)
        //position será un objeto que tendrá varios datos, entre los que se encuentran la latitud y longitud, al obtener dichos datos, redefino las variables lon y lat y guardo dichos datos en las variables.
        lon = position.coords.longitude
        lat = position.coords.latitude

    })
 }

})