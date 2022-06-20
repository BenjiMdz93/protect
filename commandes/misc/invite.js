const { MessageButton } = require('discord-buttons');
const discord = require('discord.js'); 
const client = new discord.Client(); 
const fs = require('fs')
module.exports.run = async (client, message, args) => {
  let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));

    let myembed = new discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
    .setDescription(`> **Lien d'invitation** = \`🔌\` \n\n> **Serveur d'assistance** = \`💡\` `)
    .setTimestamp() 
    .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))
    .setColor(db.color)
    

let btn = new disbut.MessageButton()
  .setStyle('url') 
  .setLabel('🔌') 
  .setURL('') //note: if you use the style "url" you must provide url using .setURL('https://example.com')

  let button2 = new disbut.MessageButton()
  .setStyle('url') 
  .setLabel('💡') 
  .setURL('https://discord.gg/masadora') 

  message.channel.send({ buttons: [btn, button2], embed: myembed },)
}
    module.exports.help = {
        name: 'invite',
    }  