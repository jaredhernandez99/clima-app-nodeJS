const axios = require('axios');

const getClima = async(lat,lng) =>{
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=36878a2111f3c71836f6f7f1f175818c&units=metric`)
    
    return resp.data.main.temp
}


module.exports = {
    getClima
}