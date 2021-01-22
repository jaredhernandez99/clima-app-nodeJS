const color = require('colors')
const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv

const getInfo = async(direccion)=>{

    try {
        const coords = await lugar.getLugarLatLon(direccion)
        const temp = await clima.getClima(coords.lat,coords.lng)
        return `El clima de ${direccion} es de ${temp}.`
    } catch (error) {
        return `no se pudo determinar el clima de ${direccion}`,error.response.data.message
    }

}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)