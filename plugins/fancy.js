const axios = require("axios");
const { cmd } = require("../command");

cmd({
  pattern: "fancy",
  alias: ["font", "style"],
  react: "🖋️",
  desc: "Convert text into various fonts.",
  category: "tools",
  filename: __filename
}, async (conn, m, store, { from, quoted, args, q, reply }) => {
  try {
    if (!q) {
   await conn.sendMessage(m.chat, {
      text: "❎ Please provide text to convert into fancy fonts.\n\n*Example:* .fancy Hello",
      contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363399999197102@newsletter',
                        newsletterName: '╭••➤®Njabulo Jb',
                        serverMessageId: 143
                    }
               }
             }, { quoted: {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: "✆︎NנɐႦυℓσ נႦ verified",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=254700000000:+254 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });
    }

    const apiUrl = `https://www.dark-yasiya-api.site/other/font?text=${encodeURIComponent(q)}`;
    const response = await axios.get(apiUrl);
    
    if (!response.data.status) {
   await conn.sendMessage(m.chat, {
      text: "❌ Error fetching fonts. Please try again later.",
      contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363399999197102@newsletter',
                        newsletterName: '╭••➤®Njabulo Jb',
                        serverMessageId: 143
                    }
               }
             }, { quoted: {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: "✆︎NנɐႦυℓσ נႦ verified",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=254700000000:+254 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });
    }

    const fonts = response.data.result.map(item => `*${item.name}:*\n${item.result}`).join("\n\n");
    const resultText = `✨ *Fancy Fonts Converter* ✨\n\n${fonts}\n\n> ✆︎Pσɯҽɾҽԃ Ⴆყ NנɐႦυℓσ נႦ`;

    await conn.sendMessage(from, { 
      text: resultText,
      contextInfo: {
         mentionedJid: [m.sender],
          forwardingScore: 999,
           isForwarded: true,
             forwardedNewsletterMessageInfo: {
                newsletterJid: '120363399999197102@newsletter',
                 newsletterName: '╭••➤®Njabulo Jb',
                 serverMessageId: 143
                 }
               }
             }, { quoted: {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    displayName: "✆︎NנɐႦυℓσ נႦ verified",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=254700000000:+254 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });

  } catch (error) {
    console.error("❌ Error in fancy command:", error);
    reply("⚠️ An error occurred while fetching fonts.");
  }
});
      
