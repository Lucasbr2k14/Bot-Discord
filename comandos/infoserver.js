module.exports = (msg) => {
    const Discord = require("discord.js")


    const embed = new Discord.MessageEmbed()
        .setColor("#5f1775")
        .setTitle(`Servidor: ${msg.guild.name}`)
        .setThumbnail(msg.guild.iconURL())
        .addFields(
            {name: "Pessoas online:", value: `${msg.guild.menbers}/${msg.guild.memberCount}: ${Math.round(100*msg.guild.presences.cache.size/msg.guild.memberCount)}%`},
            {name: "Id do servidor: ", value: msg.guild.id, inline: true},
            {name:"Id do canal:", value: msg.channel.id},
            {name: "Quantidades de canais:", value: msg.guild.channels.cache.size,inline: true},
            {name: "Quantidade de emojis:", value: msg.guild.emojis.cache.size, inline: true}
        )

    msg.channel.send(embed)





}