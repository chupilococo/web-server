const request = require('request')

const geocode = (address, callback) => {
    callback(undefined, {
        latitude: "-34.603684",
        longitude: "- 58.381559",
        location: "buenos aires"
    })
}

module.exports = geocode