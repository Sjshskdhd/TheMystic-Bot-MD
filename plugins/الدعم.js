let handler = async (m, { conn, command, text }) => {
let support = `
*لدعم البوت تستطيع ان تفعل:-*
*1_تستطيع دخول قروب دعم البوت لدعمه.↯↯*
*https://chat.whatsapp.com/F6V4riw80YGKSVQ91kWlH0*

*2_وتستطيع ان تتابع البوت على الانستا:-*
*https://instagram.com/raily.bot.itachi* 

*وشكرا لكم يا افضل مستخدمين ❤️😍*
`.trim()
m.reply(support, null, { mentions: conn.parseMention(support) })}
handler.help = ['support']
handler.tags = ['support']
handler.command = /^(الدعم|دعم)$/i
export default handler
