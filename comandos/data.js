module.exports = (msg) => {
    //dependencias
    const moment = require('moment-timezone')
    
    const Moment = moment().tz("America/Sao_Paulo").format().toLocaleString()
    const data = new Date(Moment).toLocaleString()

    const Data =  data.split(" ")

    msg.channel.send(data)
}
