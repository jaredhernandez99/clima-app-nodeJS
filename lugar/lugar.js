const axios = require('axios');

const getLugarLatLon = async(direccion) =>{
    const encodedUrl = encodeURI(direccion)
    
    const instance = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedUrl}`,
        headers: { 'x-RapidAPI-Key': '08622b6d39msh68b3c3112a0f2a4p114c7cjsn032522c9509c' }
    })
    
    const resp  = await instance.get()

    if(resp.data.cod == "404"){
        throw new Error(`No hay resultados para ${direccion}`)
    }
    const lng = resp.data.coord.lon
    const lat = resp.data.coord.lat
    const dir  = resp.data.name
        
        return{
            dir,
            lat,
            lng
        }
}

module.exports = {
    getLugarLatLon
}
// El encodeURI te codifica a modo o texto de URL 
// la variable que le pases para que este pueda ser utilizado correctamente