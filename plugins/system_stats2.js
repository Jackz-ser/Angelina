const Asena = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

let whb = Config.WORKTYPE == 'public' ? false : true

Asena.addCommand({pattern: 'alive', fromMe: whb, dontAddCommandList: true}, (async (message, match) => {
// send a buttons message!
    var plk_say = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: '' + Config.ALIVEBUTTON + '\n '}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: '' + Config.ALIVBUTTON + '\n '}, type: 1},
      ]
      
      const buttonMessage = {
          contentText: '      \n╔══╗╔╗─╔══╗╔╗─╔╗╔═╗        \n║╔╗║║║─╚║║╝║╚╦╝║║╦╝        \n║╠╣║║╚╗╔║║╗╚╗║╔╝║╩╗        \n╚╝╚╝╚═╝╚══╝─╚═╝─╚═╝ \n\n *╔✘ Config.ALIVEMSG║✘Bᴏᴛ ɴᴀᴍᴇ :* ' + Config.BOT + '\n*║✘ Oᴡɴᴇʀ : Config.OWNER║✘ᴛɪᴍᴇ   :* ```' + plk_say + '```\n*║✘Wᴏʀᴋ ᴛʏᴘᴇ : ' + Config.WORKTYPE + '*\n*║✘ Pʀᴇғɪx : ' + Config.HANDLERS + '*    \n *╚✘*\n           *ꪶ͢💝ANGELINA💝ꫂ⁩*         \n\n*╭◪ ᴄᴏᴅᴅᴇᴅ ʙʏ ꪶ͢JACKZꫂ*\n*╰─────────────────❋ཻུ۪۪⸙*\n',
          footerText: '©ꪶ͢ANGELINAꫂ',
          buttons: buttons,
          headerType: 1
        }
        
}));
