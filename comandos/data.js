module.exports = (msg) => {
    //dependencias
    const timezone = require('moment-timezone')
    const moment = require('moment')

    
    const Timezone = timezone().tz("America/Sao_Paulo").format().toLocaleString()
    const data = new Date(Timezone)

    const Data = moment(data).format("DD/MM/YYYY")
    

    msg.channel.send(Data)
}
