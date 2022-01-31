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

Amalser.addCommand({pattern: 'alive', fromMe: false, desc: 'it send bot menu'}, (async (message, match) => {

    var r_text = new Array ();

    

    

    r_text[0] = "https://i.imgur.com/Tv7ejZF.jpeg";
    
    var i = Math.floor(80*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]

    var wish = ''

  

    var antilink = ''

     

    var pinky = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ ⛅*'

if (hrs >= 12 && hrs <= 17) wish = '*ɢᴏᴏᴅ ᴀғᴛᴇʀɴᴏᴏɴ 🌞*'

if (hrs >= 17 && hrs <= 19) wish = '*ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌥*'

if (hrs >= 19 && hrs <= 24) wish = '*ɢᴏᴏᴅ ɴɪɢʜᴛ 🌙*'

if (config.TALKING_PINKY == 'true') pinky = 'On'

if (config.TALKING_PINKY == 'false') pinky = 'Off'

if (config.AUTOBİO == 'true') auto_bio = 'On'

if (config.AUTOBİO == 'false') auto_bio = 'Off'

if (config.ANTİLİNK == 'true') antilink = 'On'

if (config.ANTİLİNK == 'false') antilink = 'Off'

    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.jpg, contextInfo: {mentionedJid: message.mention}, caption: `╭──────────────────╮

   ` + config.BOT + `

╭──────────────────╯

│

│ ʜᴇʏ ᴜsᴇʀ ` + wish + `

│         *⌚` + time + `*

│

┣𝕾⃝🌺 *ᴅᴇᴠᴇʟᴏʟᴇʀ* : JACKZ,BROKEN

┣𝕾⃝🌺 *Antilink* : ` + antilink + `

┣𝕾⃝🌺 *ғᴜʟʟ ᴇᴠᴀ* : ` + pinky + `

┣𝕾⃝🌺 *ᴀᴜᴛᴏ ʙɪᴏ* : ` + auto_bio + `

┣𝕾⃝🌺 *ᴍᴏᴅᴇ* : ᴘᴜʙʟɪᴄ

┣𝕾⃝🌺 *ᴘʀᴇғɪx* : *. ; !*

│

│      ▎▍▌▌▉▏▎▌▉▐▏▌▎

│      ▎▍▌▌▉▏▎▌▉▐▏▌▎

│       

│

╰──────────────────╮

  

╭──────────────────╯

│ ◩ I AM ALIVE ◪

╭──────────────────╮

│ 

│ ALIVE MSG SET AYITILA😂😬

│   ❏ANGELINA❏

╰──────────────────╯

`}) 

}));                                                                 
                                                                              
                                                                              
                                                                              
