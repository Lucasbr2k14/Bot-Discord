module.exports = (msg) => {
    //Dependencias
    const Discord = require('discord.js')
    const config = require('./../config.js')

    const embed = new Discord.MessageEmbed()
    .setColor("#5f1775")
    .setTitle("Ajuda de comandos")
    .setThumbnail(bot.user.avatarURL())
    .addFields(
        {name: "Informações de servidor do minecraft", value: `${config.bot.prefix}server <server.ip>`},
        {name: "Informações de usuarios", value: `${config.bot.prefix}userinfo`},
        {name: "Informações do servidor", value: `${config.bot.prefix}infoserver`}
    )
    .setFooter(config.bot.verçao)

    msg.channel.send(embed)


}