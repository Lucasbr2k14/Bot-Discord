module.exports = (msg) => {

    const valor = msg.content.substr(2)

    msg.channel.send(`${Math.floor(Math.random() * valor + 1)}`)
}