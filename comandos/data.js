module.exports = (msg) => {


    const moment = require('moment-timezone')
    const Moment = moment().tz("America/Sao_Paulo").format().toLocaleString()
    const data = new Date(Moment).toLocaleString()

    msg.channel.send(data)
}








