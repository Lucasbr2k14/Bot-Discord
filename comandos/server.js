module.exports = (msg) => {
    //adicionando dependencias
    const util = require('minecraft-server-util')
    const Discord = require("discord.js")
    const config = require("./../config.json")

    //Pegando a variavel servidor 
    const server = msg.content.substr(8)


    msg.channel.send("conectanddo").then((msg) =>{
        
        if(!server){    
        }else{
            util.status(server) //Conexão com o servidor do mine
            .then((response) => {//caso a conexão de certo
    
                const embed = new Discord.MessageEmbed()//criando o embed
                    .setColor("#6ac259")
                    .setTitle(response.host)
                    .setDescription(response.description.toRaw())
                    .addFields({name: "Jogadores online", value: `${response.onlinePlayers}/${response.maxPlayers}`}, {name: "Versão", value: response.version})
                    .setThumbnail("https://blogdocftv.com/wp-content/plugins/aap_newTables/images/pro.png")
                
    
                msg.edit(embed)
            })
            .catch(() => {//Para caso o servidor não erxtir ou estiver offline
    
                const embed = new Discord.MessageEmbed()
                .setThumbnail("https://blogdocftv.com/wp-content/plugins/aap_newTables/images/contra.png")//Set img de erro
                .setColor("#f05228")//Setando a cor
                .setTitle(`Este servidor não existe: ${server}`)//titulo
                .setDescription("Tente rever a escrita e tente novamente.")//Descrição
                .setFooter("Caso o problema continuar entre em contato com o criador do bot.")
    
                msg.edit(embed)
    
    
            })   
        }
    })
}