const { cmd, commands } = require("../command");
const { fetchJson } = require("../lib/functions");
const { translate } = require("@vitalets/google-translate-api");

cmd({
  pattern: "wikipedia",
  alias: ["wiki"],
  react: "📖",
  desc: "Fetch Wikipedia information and translate to English.",
  category: "information",
  filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, reply }) => {
  try {
    const njabulo = "Please provide a search query for Wikipedia.",
    if (!q) {
      await conn.sendMessage(m.chat, {
        caption: njabulo,
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


    await reply("Searching Wikipedia...");

    const response = await fetchJson(`https://api.siputzx.my.id/api/s/wikipedia?query=${encodeURIComponent(q)}`);

    if (!response.status || !response.data) {
      return reply("No results found for your query.");
    }

    const { wiki, thumb } = response.data;

    // Translate the Wikipedia text to English
    const translated = await translate(wiki, { to: "en" });

    let message = `📖 *Wikipedia Result*\n\n📝 *Query:* ${q}\n\n${translated.text}`;

    if (thumb) {
      await conn.sendMessage(m.chat, {
        image: { url: thumb },
        caption: message,
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
    } else {
      await reply(message);
    }

  } catch (error) {
    console.error(error);
    reply("An error occurred: " + error.message);
  }
});
