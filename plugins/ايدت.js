let handler = async (m, { conn, usedPrefix, command }) => {
		
			await conn.sendMessage(m.chat, { video: { url: dir[Math.floor(Math.random() * dir.length)] }, caption: `تمت المهمه` }, { quoted: m })
	}

handler.help = ['storyanime']
handler.tags = ['anime']
handler.command = /^(ايديت)$/i
handler.limit = false

export default handler

global.dir = [
	"https://telegra.ph/file/6ba127d2d35e578463737.mp4",
  "https://telegra.ph/file/95861fa420464766ad12e.mp4",
  "https://telegra.ph/file/d8e4f5e39a246495d0795.mp4",
  "https://telegra.ph/file/829214a20630e9a4bc7b6.mp4",
  "https://telegra.ph/file/eb4c1059fc5b62c44ca23.mp4",
  "https://telegra.ph/file/801c2e9e30bf698fa9530.mp4",
  "https://telegra.ph/file/0f702124c602f6a754b35.mp4",
  "https://telegra.ph/file/40f52c8c089f9883af659.mp4",
  "https://telegra.ph/file/967b8c215eb7d649eb493.mp4",
  "https://telegra.ph/file/f463f43323da331f8b592.mp4",
  "https://telegra.ph/file/c5ef2afff4321aa348893.mp4",
  "https://telegra.ph/file/e12a37c57b267fe8351fc.mp4",
  "https://telegra.ph/file/6c5d908a01dd1e4ece24b.mp4",
  "https://telegra.ph/file/6c5d908a01dd1e4ece24b.mp4",
  "https://telegra.ph/file/5ad845a8ddcae975ef883.mp4",
  "https://telegra.ph/file/04c0e7a5604b7b1f43b89.mp4",
  "https://telegra.ph/file/39446b37cd0e58ab220f4.mp4",
  "https://telegra.ph/file/f18e131fe870ad976f8d1.mp4",
  "https://telegra.ph/file/dba8688db6d1d1ed4df72.mp4", 
 "https://telegra.ph/file/8bdf3ad408335d1b619c2.mp4",
  "https://telegra.ph/file/a6df85971901211ead50a.mp4",
  "https://telegra.ph/file/653ed470b61034eed4d3a.mp4",
  "https://telegra.ph/file/6a059f0b424762af08ccb.mp4"
]