const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.open-meteo.com/v1/forecast?latitude='+ lat +'&longitude='+ long + '&current_weather=true'

    request({url, json: true}, (error, {body}) => {
        console.log(body)
        if (error) {
            callback('Unable to connect to the server', undefined)
        }else if (!body.current_weather){
            callback('Unable to find the location try another location', undefined)
        } else {
            callback(undefined, {
                temperature: body.current_weather.temperature,
                windSpeed: body.current_weather.windspeed,
                time: body.current_weather.time
            })
        }
    })
}

module.exports = forecast