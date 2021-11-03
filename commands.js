const fs = require('fs');
const Discord = require('discord.js');

module.exports = {

    addRole: function (message) {

        if (message.author.bot) return;
        const path = "./codes/" + message.content + ".txt";

        try {
            if (fs.existsSync(path)) {

                fs.readFile(path, 'utf8', function (err, data) {
                    console.log(data);
                    
                    if (err) {

                        console.log(err);
                        throw err;

                    } else {

                        let role = message.guild.roles.cache.get(data.toString());

                        console.log(role);
                        message.member.roles.add(role.id);
                        message.channel.bulkDelete(1);
                        
                        console.log("msg had a valid code")
                    }

                });

            } else {
                message.channel.bulkDelete(1);
                console.log("msg had an invalid code")
            }

        } catch (err) {

            console.error(err)
            message.channel.bulkDelete(1);

            console.log("ACTION FINISHED WITH ERRORS!");
            console.log("DELETING ANYWAYS");
            console.log("msg had an invalid code");
        }
    }
}

