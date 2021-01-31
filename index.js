const Discord = require("discord.js")
const bot = new Discord.Client()
const config = require("./config.json")
const util = require('minecraft-server-util')
const data = new Date()



bot.on("ready", () =>{
    console.log("O bot foi iniciado com sucesso")
    bot.user.setActivity(`${config.bot.prefix}ajuda, para mais informações.`)
    
})

bot.on("message", msg =>{

    const messagem = msg.content.toLowerCase()


    if(!msg.guild){
        console.log("Msg retornada na DM.")
        return
    }

    if(msg.author.bot){
        return
    }


    if(msg.content.startsWith(`${config.bot.prefix}server`)){
        const server = msg.content.substr(8)
        console.log("Msg de servidor requisitado.")

        
        if(!server){

          msg.channel.send(`${config.bot.prefix}server <ServerIP>`)

        }else{
            util.status(server) //Conexão com o servidor do mine
            .then((response) => {//caso a conexão de certo

                const embed = new Discord.MessageEmbed()//criando o embed
                    .setColor("#6ac259")
                    .setTitle(response.host)
                    .setDescription(response.description.toRaw())
                    .addFields({name: "Jogadores online", value: `${response.onlinePlayers}/${response.maxPlayers}`}, {name: "Versão", value: response.version})
                    .setThumbnail("https://blogdocftv.com/wp-content/plugins/aap_newTables/images/pro.png")
                
                msg.channel.send(embed)
                console.log("Enviada com sucesso:  " + server)
            })
            .catch((error) => {//Para caso o servidor não erxtir ou estiver offline

                const embed = new Discord.MessageEmbed()
                .setThumbnail("https://blogdocftv.com/wp-content/plugins/aap_newTables/images/contra.png")
                .setColor("#f05228")
                .setTitle(`Este servidor não existe: ${server}`)
                .setDescription("Tente rever a escrita e tente novamente.")
                .setFooter("Caso o problema continuar entre em contato com o criador do bot.")

                msg.channel.send(embed)


                console.log("404 error:  " + server)
            })


            
        }
    }
    

    if(messagem == `${config.bot.prefix}userinfo`){

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
            .setFooter("Mensagen enviada: " + data.getDate() + "/" + data.getUTCMonth()+1 + "/" + data.getFullYear())

        msg.channel.send(embed)
        console.log(msg.member.user)    

    }
    

    if(messagem == `${config.bot.prefix}ajuda`){

        const embed = new Discord.MessageEmbed()
            .setColor("#5f1775")
            .setTitle("Ajuda de comandos")
            .setThumbnail(bot.user.avatarURL())
            .addFields(
                {name: "Informações de servidor do minecraft", value: `${config.bot.prefix}server <server.ip>`},
                {name: "Informações de usuarios", value: `${config.bot.prefix}userinfo`}
            )
            .setFooter(config.bot.verçao)

        msg.channel.send(embed)
    }

    if(messagem == `${config.bot.prefix}infoserver`){
        
        console.log("Mensagen de informaçoes do servidor requesitada")

    
        const embed = new Discord.MessageEmbed()
            .setColor("#5f1775")
            .setTitle(`Servidor: ${msg.guild.name}`)
            .setThumbnail(msg.guild.iconURL())
            .addFields(
                {name: "Pessoas online:", value: `${msg.guild.presences.cache.size}/${msg.guild.memberCount}: ${Math.round(100*msg.guild.presences.cache.size/msg.guild.memberCount)}%`},
                {name: "Id do servidor: ", value: msg.guild.id, inline: true},
                {name:"Id do canal:", value: msg.channel.id},
                {name: "Quantidades de canais:", value: msg.guild.channels.cache.size,inline: true},
                {name: "Quantidade de emojis:", value: msg.guild.emojis.cache.size, inline: true}
            )

        msg.channel.send(embed)
    }


    if(msg.content.startsWith(`${config.bot.prefix}d`)){
       const valor = msg.content.substr(2)
       function dado(a){
            return Math.floor(Math.random() * a + 1)
        }


        msg.channel.send(`${dado(valor)}`)
    }
})


bot.login(config.bot.token)