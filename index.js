const Discord = require('discord.js');
const fs = require('fs');
const cmds = require("./commands.js");

const token = fs.readFileSync("./keys.txt").toString('utf-8');
const channelName = fs.readFileSync("./channelName.txt").toString('utf-8');

const bot = new Discord.Client();

bot.on('ready', () => {
    console.log("initiated...")
})

bot.login(token);

bot.on('message', async message => {

    if (message.channel.type == 'text' && message.channel.name == channelName) {
        cmds.addRole(message);
    }

})
