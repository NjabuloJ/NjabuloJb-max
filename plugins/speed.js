const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
    pattern: "pingl",
    alias: ["speedl","pongl"],use: '.ping',
    desc: "Check bot's response time.",
    category: "main",
    react: "🏓",
    filename: __filename
},
async (conn, mek, m, { from, quoted, sender, reply, }) => {
    try {
        const start = new Date().getTime();

        const reactionEmojis = ['🔥', '⚡', '🚀', '💨', '🎯', '🎉', '🌟', '💥', '🕐', '🔹'];
        const textEmojis = ['💎', '🏆', '⚡️', '🚀', '🎶', '🌠', '🌀', '🔱', '🛡️', '✨'];

        const reactionEmoji = reactionEmojis[Math.floor(Math.random() * reactionEmojis.length)];
        let textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];

        // Ensure reaction and text emojis are different
        while (textEmoji === reactionEmoji) {
            textEmoji = textEmojis[Math.floor(Math.random() * textEmojis.length)];
        }

        // Send reaction using conn.sendMessage()
        await conn.sendMessage(from, {
            react: { text: textEmoji, key: mek.key }
        });

        const end = new Date().getTime();
        const responseTime = (end - start) / 1000;

        const text = ` *ɴᴊᴀʙᴜʟᴏ ᴊʙ ᴘᴏɴɢ🏓: ${responseTime.toFixed(2)}ms*`;

        await conn.sendMessage(from, {
           text: text,
           contextInfo: {
              isForwarded: true,
               forwardedNewsletterMessageInfo: {
                 newsletterJid: '120363399999197102@newsletter',
                   newsletterName: '╭••➤®Njabulo Jb',
                   serverMessageId: 143
                    },
                   forwardingScore: 999,
                    externalAdReply: {
                      title: "╭••➤®Njabulo Jb",
                       body: "ɴᴊᴀʙᴜʟᴏ ᴊʙ ᴘᴀɪʀ ᴄᴏᴅᴇ ғᴏʀ ᴡʜᴀᴛsᴀᴘᴘ ʟɪɴᴋᴇᴅ ᴅᴇᴠɪᴄᴇ ᴡᴏʀᴋ ᴏɴ ᴏʟʟ ᴅᴇᴘʟᴏʏɪɴɢ ᴍᴇɴᴛ",
                      thumbnailUrl: "https://files.catbox.moe/ny55yv.jpg",
                       sourceUrl: "https://files.catbox.moe/ny55yv.jpg",
                       mediaType: 1,
                 renderLargerThumbnail: true
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
                    displayName: "✆︎NנɐႦυℓσ ",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=254700000000:+254 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });

    } catch (e) {
        console.error("Error in ping command:", e);
        reply(`An error occurred: ${e.message}`);
    }
});
