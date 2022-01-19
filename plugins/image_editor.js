



e.addCommand({pattern: 'wanted ?(.*)', fromMe: a, desc:'Edits photo to a wanted effect'}, (async (m, match) => { 
if (!m.reply_message.image) return await m.sendMessage("_Reply to an image!_")
var q = await m.client.downloadAndSaveMediaMessage({key: {remoteJid: m.reply_message.jid,id: m.reply_message.id},message: m.reply_message.data.quotedMessage});
var res = await i.query.edit(q,'wanted',v)
await m.client.sendMessage(m.jid, res,MessageType.image,{mimetype: Mimetype.jpg ,quoted:m.data});}));
