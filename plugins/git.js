const asena = require('../events');

const {MessageType} = require('@adiwajshing/baileys');

const GM = "it sends bot deploying link"

const GN = "it sends bot deploying link"

const Config = require('../config');

if (Config.WORKTYPE == 'private') {

asena.addCommand({pattern: 'git', fromMe: true, deleteCommand: true, desc: GM,}, (async (message, match) => {

    var r_text = new Array ();

    r_text[0] = "*https://github.com/Jackz-ser/Angelina*"; 
 
    var i = Math.floor(1*Math.random())

    await message.client.sendMessage(

        message.jid,(r_text[i]), MessageType.text);

    }));
    

    }

    if (Config.WORKTYPE == 'public') {

        asena.addCommand({pattern: 'git', fromMe: false, deleteCommand: true, desc: GM,}, (async (message, match) => {

            var r_text = new Array ();

                 r_text[0] = "*Bot git : https://github.com/Jackz-ser/Angelina*\n*Any error watch video on the bottom of bot git*\n*Deploying git: github.com/Jackz-ser/deployer*"; 

                     var i = Math.floor(1*Math.random())

                         await message.client.sendMessage(

                               message.jid,(r_text[i]), MessageType.text);

    }));
    

   }
