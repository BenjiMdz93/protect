const db = require("quick.db")
const fs = require("fs");
const Discord = require('discord.js')



emojis = require("./../../emotes.json"),

module.exports.run = async (client, message, args) => {
    let dab = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    let authorized = [`${config.bot.owner}` , `${config.bot.owner2}` , `${config.bot.owner3}` , `${message.guild.ownerID}`]
    if(!authorized.includes(message.author.id))    return message.lineReply(`${emojis.general.no} Désolé, mais vous n'avez pas la permission requise pour executer cette commande.`);
  if(args[0] === "on") {
    message.lineReply(`${emojis.general.on} Je viens d’activer l'anti-ping`)
      db.set("ap_"+ message.guild.id , true)
  }
  if(args[0] === "off") {
    message.lineReply(`${emojis.general.off} Je viens de désactiver l’anti-ping`)
    db.set("ap_"+ message.guild.id , null)

}

};


module.exports.help = {
    name: "antiping",
    aliases: ['ap' ],
    category: 'Administration',
    description: "Désactiver la possibilité de ping",
  };