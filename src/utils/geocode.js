const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://geocode.maps.co/search?q=' + address + '&limit=1';
    request({url:url, json:true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect to the server', undefined)
        }else if (!body[0].lat){
            callback('Unable to find the location try another location', undefined)
        } else {
            callback(undefined, {
                latitude: body[0].lat,
                longitude: body[0].lon,
                location: body[0].display_name
            })
        }
    })
}


module.exports = geocode