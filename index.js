const Discord = require("discord.js")
const bot = new Discord.Client()
const config = require("./config.json")


//Importando os commandos do bot
const serverMineCommand = require("./comandos/server.js")
const userInfo = require("./comandos/userinfo.js")
const ajuda = require("./comandos/ajuda.js")
const infoServer = require("./comandos/infoserver.js")
const dado = require("./comandos/dado.js")
const data = require("./comandos/data.js")


/*
Quando o bot ficar online
Enviar console.log falando que o bot está online
e setar a atividade do bot dizando -ajuda, para mais informações
*/
bot.on("ready", () =>{
    console.log("O bot foi iniciado com sucesso")
    bot.user.setActivity(`${config.bot.prefix}ajuda, para mais informações.`)
    
})


/*
Chamando todos os comandos do bot
*/
bot.on("message", msg =>{

    const messagem = msg.content.toLowerCase()

    /*
    Retornando as msg
    quando for de um bot
    ou quando não for de um servidor
    */
    if(msg.author.bot || !msg.guild)return


    if(msg.content.startsWith(`${config.bot.prefix}server`)){
        serverMineCommand(msg)
    }
    

    if(messagem == `${config.bot.prefix}userinfo`){
        userInfo(msg)
    }
    

    if(messagem == `${config.bot.prefix}ajuda`){
        ajuda(msg)
    }

    if(messagem == `${config.bot.prefix}infoserver`){
        infoServer(msg)
    }

    if(msg.content.startsWith(`${config.bot.prefix}d`)){
        dado(msg)
    }

    if(msg.content == "a"){
        const Server = guildID("780224632652693505")
        const emoji = Server.guild.emojis.cache.first()
        msg.channel.send(`${emoji}`)
    }

    if(messagem == `${config.bot.prefix}data`){
        data(msg)
    }
        

})


bot.login(config.bot.token)