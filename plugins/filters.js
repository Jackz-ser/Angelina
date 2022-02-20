const fs = require('fs')
const Asena = require('../events');
const {MessageType, Mimetype } = require('@adiwajshing/baileys');
const FilterDb = require('./sql/filters');
const Config = require('../config')
const jid = Config.DISBGM !== false ? Config.DISBGM.split(',') : [];
const afn = Config.PLKS !== false ? Config.PLKS.split(',') : [];
const Language = require('../language');
const Lang = Language.getString('filters');


Asena.addCommand({pattern: 'filter ?(.*)', fromMe: true, desc: Lang.FILTER_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);

    if (match === null) {
        filtreler = await FilterDb.getFilter(message.jid);
        if (filtreler === false) {
            await message.client.sendMessage(message.jid,Lang.NO_FILTER,MessageType.text)
        } else {
            var mesaj = Lang.FILTERS + '\n';
            filtreler.map((filter) => mesaj += '```' + filter.dataValues.pattern + '```\n');
            await message.client.sendMessage(message.jid,mesaj,MessageType.text);
        }
    } else {
        if (match.length < 2) {
            return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + ' ```.filter "sa" "as"',MessageType.text);
        }
        await FilterDb.setFilter(message.jid, match[0].replace(/['"“]+/g, ''), match[1].replace(/['"“]+/g, '').replace(/[#]+/g, '\n'), match[0][0] === "'" ? true : false);
        await message.client.sendMessage(message.jid,Lang.FILTERED.format(match[0].replace(/['"]+/g, '')),MessageType.text);
    }
}));
Asena.addCommand({pattern: 'stop ?(.*)', fromMe: true, desc: Lang.STOP_DESC, dontAddCommandList: true}, (async (message, match) => {
    match = match[1].match(/[\'\"\“](.*?)[\'\"\“]/gsm);
    if (match === null) {
        return await message.client.sendMessage(message.jid,Lang.NEED_REPLY + '\n*Example:* ```.stop "hello"```',MessageType.text)
    }

    del = await FilterDb.deleteFilter(message.jid, match[0].replace(/['"“]+/g, ''));
    
    if (!del) {
        await message.client.sendMessage(message.jid,Lang.ALREADY_NO_FILTER, MessageType.text)
    } else {
        await message.client.sendMessage(message.jid,Lang.DELETED, MessageType.text)
    }
}));
    
if (Config.GEAR == 'one') {  
    
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
        if(Config.BGMFILTER){
            var uri = encodeURI(match[1])
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '918075641889@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/rafimention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('uploads/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == '917994765065@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/nnn.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted : message.data, ptt: true})
        }
const array = ['ayye','Romantic','Adhuz','adhuz','carlo','Carlo','Ooh','frnd','Theja','sathan','Sathan','theja','wizard','Wizard','ooh','Kk','Rafi','rafi','thug','anjali','Anjali','Sed','sed','sad','Love','love','Line','line','Jackz','jackz','Broken','broken','Angelina','angelina','single','Single','Commited','Hi','poda','poli','ayin','Ayin','ayn','vilachil','sense','Mukesh','idiot','Cyber','cyber','tyr','thyr','Thyr','budhi','Myre','myre','Aara','kundan','Kundan','Thug','trance','Trance','aara','Food','food','fud','Fud','Nee','nee','happy','Happy','Sinan','Dud','Photo','photo','fan','Fan','Gd nyt','gd nyt','koi','Koi','vatt','Vatt','ara','Ara','name','Name','pinnalla','Pinnalla','Hai','Reply','reply','thall','Thall','Song','kozhi','Kozhi','I love you','mass','Mass','arulle','Arulle','Mirash','mirash','Mirash bgm','Salman','Arshi','Ezra','ezra','nihal','Nihal','sticker','sufaid','Sufaid','jinn','Jinn','Feel','lub','Lub','foxy','Foxy','Music','music','CR7','Alan','Halo','Aysheri','aysheri','kooi','Kooi','Achumon','ith','🔥','bye','para','Para','mentionameen','Khais','mukesh','Hlo','hlo','njan','Njan','muthe','Muthe','Xxxtentacion','alone','Alone','Converting','potta','Potta','menu','welcome','Welcome','vannu','Vannu','Remove','kyat','rip','remix','Remix','Rip','Myr','dj','Dj','pever','Pever','Oo','XXXTENTACION','Love u','hate','Hate','Njan vannu','tto','Audio','audio','veno','xxxtentacion','Veno','nanban','Ayye','Ronaldo','ronaldo','katha','hy','vaanam','Vaanam','Vanam','Ivan','ivan','Annan','annan','Thayoli','umbi','Umbi','Noob','noob','Nanban','Achu','achu','Ok','Ameen','Shiva','ok','Enth','ameen','enth','nth','Edi','kundi','Kundi','Uff','Dey','Cr7','Poda','Poli','Pm','Plzz','girl','Oi','mp3','nirth','Nirth','good nyt','birthday','HBD','bdy','Birthday','Pattula','Good night','Nth','Mood','Please','Mm','Dance','Ith','thech','caption','Polikk','Aah','Good nyt','Mrng','alive','Di','Bro','avan','converting','Allah','bg','help','Hii','odiko','oho','killadi','oo','Fuck','invite','Bgm','Owner','Group','list','man','Nanba','oii','yo','sad','work','set','remove','thukum','poko','xmedia','commands','Boss','vava','Lalitha','start','sing','Hello','Bye','warn','Baby','who','find','power','myr','vanam','tagall','Re entry','pass','patti','phaa','mone','look','bor','try','owner','luv','feel','romam','potte','no replay','bgm','vijay','Da','Vazha','kunna','Kunna','Sorry','Sry','sorry','sry','Bot','bot','song','Uyir','uyir','thayoli','Hy','Sad','Ayn','BRKNOFC','basil','Brokenofc','jackzser']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./uploads/' + a + '.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted: message.data, ptt: true})
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
    if (Config.GEAR == 'two') {    
    Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {   
        if(Config.BGMFILTER){
        let banned = jid.find( Jid => Jid === message.jid);
        if(banned !== undefined) return
        if (!!message.mention && message.mention[0] == '918075641889@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./Amalserv2/Jackz.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, contextInfo: { forwardingScore: 5, isForwarded: true }, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == Config.MENTION) {
await message.client.sendMessage(message.jid, fs.readFileSync('Amalserv2/mention.mp3'), MessageType.audio, { mimetype: Mimetype.mp4Audio,duration: Config.SAID, quoted : message.data, ptt: true})
        }
        if (!!message.mention && message.mention[0] == '917994765065@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('Amalserv2/Broken.mp3'), MessageType.audio, { mimetype: Mimetype.mpAudio,duration: Config.SAID, contextInfo: { forwardingScore: 5, isForwarded: true }, quoted : message.data, ptt: true})
        }
        var uri = encodeURI(match[1])
const array = ['anjali','Anjali','Sed','sed','sad','Love','love','Line','line','Jackz','jackz','Broken','broken','Angelina','angelina','single','Single','Commited','Hi','poda','poli','ayin','Ayin','ayn','vilachil','sense','Mukesh','idiot','Cyber','cyber','tyr','thyr','Thyr','budhi','Myre','myre','Aara','kundan','Kundan']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
       await message.client.sendMessage(message.jid, fs.readFileSync('./Amalserv2/' + a + '.mp3'), MessageType.audio,{ mimetype: Mimetype.mp4Audio,duration: Config.SAID, ptt: true,quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(message.jid ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": Config.BOT + '\n', "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('./photo/vava.png')}}}});
}
});
    }

    var filtreler = await FilterDb.getFilter(message.jid);
    if (!filtreler) return; 
    filtreler.map(
        async (filter) => {
            pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
            if (pattern.test(message.message)) {
                await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
            }
        }
    );
}));
}
Asena.addCommand({on: 'text', fromMe: false}, (async (message, match) => {
    if(Config.STICKERP){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    if (!!message.mention && message.mention[0] == '919605741366@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./Amalser/mention.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted : message.data, ptt: false})
    }
 if (!!message.mention && message.mention[0] == '917994909899@s.whatsapp.net') {
await message.client.sendMessage(message.jid, fs.readFileSync('./Amalser/ameenmention.webp'), MessageType.sticker, { mimetype: Mimetype.webp,quoted : message.data, ptt: false})
     }
       
const array = ['Mm','umma','Umma','Oi','Ezra','ezra','Hi','nihal','Nihal','Sufaid','sufaid','Khais','khais','achu','Achu','Ok','ok','Sorry','sorry','nna','Nna','name','Name','myre','Myre','inna','Inna','Malare','git','Ameen','chaya','escape','truth','hm','pottan','oh','nokk','nude','oo','hi','kali','Remove','bot','lost','copy','Da','come','sex','help','sorry','podi','nee','done','kalam','Di','Dey','oho','Welcome','Nanba','ee','Hello','para','kindi','list','check','podey','odiko','save','Hii','oii','sad','sed','thenga','bad','run','remove','love','kick','enth','alive','amal','menu','ella','unmute','mute','Ayye','pm','Hhee','Patti','Chumma paranjatha','Myr','rply','selfie','ban','Sad','fuk','Engenend','Pattula','sticker','da','kittiyo','Comedy','resendo','Poda','mrng','Bot','Rafi','rafi']
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
   await message.client.sendMessage(message.jid, fs.readFileSync('./Amalser/' + a + '.webp'), MessageType.sticker, { mimetype: Mimetype.webp, quoted: message.data, ptt: false})
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
        if (pattern.test(message.message)) {
            await message.client.sendMessage(message.jid,filter.dataValues.text, MessageType.text, {quoted: message.data});
        }
    }
);
}));
    
    async function checkUsAdmin(message, user = message.data.participant) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
async function checkImAdmin(message, user = message.client.user.jid) {
    var grup = await message.client.groupMetadata(message.jid);
    var sonuc = grup['participants'].map((member) => {     
        if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
    });
    return sonuc.includes(true);
}
 
Asena.addCommand({on: 'text', fromMe: false,onlyGroup: true}, (async (message, match) => {

    if(Config.THERI_KICK){
    let banned = jid.find( Jid => Jid === message.jid);
    if(banned !== undefined) return
    
const array = afn 
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){
        var us = await checkUsAdmin(message)
        var im = await checkImAdmin(message)
        if (!im) return;
        if (us) return;
await message.client.sendMessage(message.jid,Lang.KICK, MessageType.text, {quoted: message.data });  
await message.client.groupRemove(message.jid, [message.data.participant]);                
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
    }
);
}));
 Asena.addCommand({on: 'text', fromMe: false, onlyPm: true}, (async (message, match) => {

    if(Config.PLKS){
const array = afnp 
array.map( async (a) => {
let pattern = new RegExp(`\\b${a}\\b`, 'g');
if(pattern.test(message.message)){          
await message.client.sendMessage(message.jid,Lang.KICK2, MessageType.text, {quoted: message.data });               
}
});
}

var filtreler = await FilterDb.getFilter(message.jid);
if (!filtreler) return; 
filtreler.map(
    async (filter) => {
        pattern = new RegExp(filter.dataValues.regex ? filter.dataValues.pattern : ('\\b(' + filter.dataValues.pattern + ')\\b'), 'gm');
    }
);
}));
