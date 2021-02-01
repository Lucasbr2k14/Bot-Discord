module.exports = (msg) => {

    const valor = msg.content.substr(2)

    if(valor > 0){
        msg.channel.send(`${Math.floor(Math.random() * valor + 1)}`)
    }

}