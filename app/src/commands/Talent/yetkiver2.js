const config = require("../../../config.json")
const db = require("quick.db");
const moment = require("moment");
moment.locale("tr");

module.exports = {
    name: "yetkiver2",
    aliases: ["yetkiver2"],
    execute: async (client, message, args, embed, author, channel, guild) => {
      if (!message.member.roles.cache.has("937698195977424907") && !message.member.roles.cache.has("937698196073893929") && !message.member.hasPermission("ADMINISTRATOR")) return channel.error(message, "Komutu kullanabilmek i�in ge�erli yetkin olmali.")
        var member = message.mentions.users.first() || guild.members.cache.get(args[0]);
        if (!member) return channel.error(message, "Gecerli bir kullanici belirtmelisin!")
        if (member.id === author.id) return channel.error(message, "Kendine rol veremezsin!")
        guild.members.cache.get(member.id).roles.add("1022882253736509440")
        guild.members.cache.get(member.id).roles.add("1022882252763451423")
        channel.send(embed.setDescription(`${member} kullancisina <@&1022882253736509440> ve <@&1022882252763451423> yetkisi verildi.`));
    }
}