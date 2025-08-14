const axios = require("axios");
const fetch = require("node-fetch");
const { sleep } = require('../lib/functions');
const { cmd, commands } = require("../command");

cmd({
  pattern: "readmore",
  alias: ["rm", "rmore", "readm"],
  desc: "Generate a Read More message.",
  category: "convert",
  use: ".readmore <text>",
  react: "📝",
  filename: __filename
}, async (conn, m, store, { args, reply }) => {
  try {
    const inputText = args.join(" ") || "No text provided.";
    const readMore = String.fromCharCode(8206).repeat(4000); // Creates a large hidden gap
    const message = `${inputText} ${readMore} Continue Reading...`;

    await conn.sendMessage(m.from, { 
      text: message,
      contextInfo:{
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
    console.error("❌ Error in repeat command:", error);
    reply("❎ An error occurred while processing your request.");
  }
});

  } catch (error) {
    console.error("❌ Error in readmore command:", error);
    reply("❌ An error occurred: " + error.message);
  }
});
