const db = require('quick.db');

const Discord = require('discord.js')
emojis = require("./../../emotes.json"),
module.exports.run = async (client, message, args) => {
    let config = require("../../config.json")
    let authorized = [`${config.bot.owner}` , `${config.bot.owner2}` , `${config.bot.owner3}` , `${message.guild.ownerID}`]
    if(!authorized.includes(message.author.id))    return message.lineReply(`${emojis.general.no} Désolé, mais vous n'avez pas la permission requise pour executer cette commande.`);
        if (!args.length) {
      return message.channel.send(`${emojis.general.warning} Attention, vous avez mal utiliser la commande, \`antilink <on/off>\``)
        }
      if(args[0] === "on") {
message.lineReply(`${emojis.general.on} Je viens d’activer l’anti-link`)
          db.set("al_"+ message.guild.id , true)
      }
      if(args[0] === "off") {
message.lineReply(`${emojis.general.off} Je viens de désactiver l’anti-link`)
        db.set("al_"+ message.guild.id , null)
    
  }
}
module.exports.help = {
  name: "antilink",
  aliases: ['anti-link', "antilien", "antipub"],
  category: 'Administration',
  description: "Désactiver la possibilité d'envoyer un lien",
};