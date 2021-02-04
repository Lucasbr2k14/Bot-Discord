module.exports = (msg) => {
    //dependencias
    const Discord = require('discord.js')
    const moment = require('moment-timezone')
    const Moment = moment().tz('America/Sao_Paulo').format()
    const data = new Date(Moment).toLocaleString()

    const embed = new Discord.MessageEmbed()
    .setColor("#5f1775")
    .setTitle("Nome: " + msg.member.user.username)
    .setThumbnail(msg.member.user.displayAvatarURL({dynamic: true, format: "png", size: 1024}))
    .addFields(
        {name: "User id: ", value: msg.member.user.id},
        {name: "Nick: ", value: msg.member.displayName, inline: true},
        {name: "Entrou no Servidor em: ", value: `${msg.member.joinedAt.getDate()}/${msg.member.joinedAt.getMonth()+1}/${msg.member.joinedAt.getFullYear()}`, inline: true },
        {name: "Entrou no discord: ", value: `${msg.member.user.createdAt.getDate()}/${msg.member.user.createdAt.getMonth()+1}/${msg.member.user.createdAt.getFullYear()}`, inline: true}
    )
    .setFooter("Mensagen enviada: " + data)

    msg.channel.send(embed)    
}