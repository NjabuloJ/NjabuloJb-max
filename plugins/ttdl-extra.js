const { cmd } = require('../command');
const fetch = require('node-fetch');

cmd({
    pattern: "tiktok2",
    alias: ["tt2", "tiktokdl2", "ttdown2", "tiktokvid2", "ttdl"],
    desc: "Download TikTok videos using a link.",
    category: "downloader",
    filename: __filename
},
async (conn, mek, m, { from, args, quoted, reply }) => {
    try {
        // Validate input
        if (!args[0]) {
            return reply(`✳️ Use this command like:\n *${command} <TikTok link>*`);
        }

        reply("⏳ Fetching video details... Please wait.");

        const res = await fetch(`https://darkcore-api.onrender.com/api/tiktok?url=${encodeURIComponent(args[0])}`);
        if (!res.ok) {
            return reply("❎ Unable to fetch data. Please try again later.");
        }

        const data = await res.json();
        if (!data.success) {
            return reply("❎ Failed to fetch video. Please check the link and try again.");
        }

        const { author, titulo, thumbanail, mp4, mp3 } = data.result;

        // Send the initial options with a thumbnail
        const caption = `📖 *Title:* ${titulo}\n👤 *Author:* ${author}\n\n📥 *Reply with:*\n1️⃣ for *Video*\n2️⃣ for *Audio*`;
        const menuMsg = await conn.sendMessage(from, {
            image: { url: thumbanail },
            caption: "> ✆︎Pσɯҽɾҽԃ Ⴆყ NנɐႦυℓσ נႦ",
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

        // Wait for the user to reply with the option
        conn.ev.on('messages.upsert', async (msgUpdate) => {
            const msg = msgUpdate.messages[0];
            if (!msg.message || !msg.message.extendedTextMessage) return;

            const userReply = msg.message.extendedTextMessage.text.trim();

            // Ensure the user reply references the correct message
            if (msg.message.extendedTextMessage.contextInfo && msg.message.extendedTextMessage.contextInfo.stanzaId === menuMsg.key.id) {
                if (userReply === '1') {
                    // Send video
                    await conn.sendMessage(from, {
                        video: { url: mp4 },
                        caption: "🎥 *Here is your TikTok video!*",
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
                } else if (userReply === '2') {
                    // Send audio
                    await conn.sendMessage(from, {
                        audio: { url: mp3 },
                        mimetype: 'audio/mpeg',
                        caption: "🎵 *Here is the extracted audio!*",
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
                    reply("❎ Invalid option. Please reply with `1` for video or `2` for audio.");
                }
            }
        });

    } catch (error) {
        console.error(error);
        reply("❎ An error occurred while processing your request. Please try again later.");
    }
});


