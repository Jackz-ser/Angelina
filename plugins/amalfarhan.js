/* codded by Amal

reedited by Amalser

use this git under copyright

dont change credit

*/

const Amalser= require('../events');

const config = require('../config');

const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

const axios = require('axios');

const hrs = new Date().getHours({ timeZone: 'Asia/Kolkata' })

if (Config.WORKTYPE == 'public') {

   Asena.addCommand({pattern: 'alive', fromMe: false, desc: Lang.ALIVE_DESC}, (async (message, match) => {
        
        let pp
        try { pp = await message.client.getProfilePicture(message.jid.includes('-') ? message.data.participant : message.jid ); } catch { pp = await message.client.getProfilePicture(); }
        await axios.get(Config.LOGOSK, {responseType: 'arraybuffer'}).then(async (res) => { await message.client.sendMessage(message.jid, res.data, MessageType.image, { caption: Config.ALIVEMSG }); });
    }));
    Asena.addCommand({pattern: 'sysd', fromMe: false, desc: Lang.SYSD_DESC}, (async (message, match) => {
        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
    
    Asena.addCommand({pattern: 'psysd', fromMe: true, desc: Lang.SYSD_DESC, dontAddCommandList: true }, (async (message, match) => {
        const child = spawnSync('neofetch', ['--stdout']).stdout.toString('utf-8')
        await message.sendMessage(
            '```' + child + '```', MessageType.text
        );
    }));
}
