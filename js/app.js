let lon;
let lat;
let fechaActual = document.getElementById('fechaActual')
let temperatura = document.getElementById('temperatura')
let localidad = document.getElementById('localidad')
let urlBase;


window.addEventListener('load', ()=>{
    
 if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition((position)=>{
        //obtengo la localización del navegador
        //position será un objeto que tendrá varios datos, entre los que se encuentran la latitud y longitud, al obtener dichos datos, redefino las variables lon y lat y guardo dichos datos en las variables.
        lon = position.coords.longitude
        lat = position.coords.latitude

        //api sacada de openweathermap.org
        const api = 'f3f25df4cf6424a6d7095df2d61bcf79'
        //aquí guardo en una constante la url con la latitud, longitud, y el api 
        urlBase = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api}`
        consultarApi()
    })
 }



})

let consultarApi = async()=>{
    try{
        //hacer la consulta al API
        const respuesta = await fetch(urlBase);
        if(!respuesta.ok) {
            throw new Error('La solicitud no fue exitosa');
        }
        const dato = await respuesta.json();
        console.log(dato)
        //reemplazar las variables por los datos
        localidad.textContent = dato.name + ", " + dato.sys.country
        temperatura.textContent = Math.floor(dato.main.temp - 273.15) + '°C'
    } catch(error){
        console.log(error);
    }
}