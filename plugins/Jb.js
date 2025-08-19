


















































































































































































































































































































































































































































































































































































const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "menu",
    desc: "Show interactive menu system",
    category: "menu",
    react: "💬",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        // Show loading reaction
        await conn.sendMessage(from, {
            react: { text: '💬', key: mek.key }
        });

        const menuCaption = `
*╭━━━━━━━━━━━━━━━━⊷*
┊ ┏────────────⊷
┊ ┊▢ʙᴏᴛ ɴᴀᴍᴇ :  *ɴᴊᴀʙᴜʟᴏ ᴊʙ*
┊ ┊▢ᴘʀᴇғɪx : *[ ${config.PREFIX} ]*
┊ ┊▢ᴍᴏᴅᴇ :  *[${config.MODE}]*
┊ ┗────────────⊷
┊      ┏─────────⊷
┊      【①】• *ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ*
┊      【②】• *ɢʀᴏᴜᴘ ᴍᴇɴᴜ*
┊      【③】• *ғᴜɴ ᴍᴇɴᴜ*
┊      【④】• *ɴᴇᴛꜰʟɪx ᴍᴇɴᴜ*
┊      【⑤】• *ᴀɪ ᴍᴇɴᴜ*
┊      【⑥】• *ᴀɴɪᴍᴇ ᴍᴇɴᴜ*
┊      【⑦】• *ᴄᴏɴᴠᴇʀᴛ ᴍᴇɴᴜ*
┊      【⑧】• *ᴏᴛʜᴇʀ ᴍᴇɴᴜ* 
┊      【⑨】• *ʟᴏɢᴏ ᴍᴇɴᴜ*
┊      【⑩】• *ꜱᴇᴛᴛɪɴɢꜱ ᴍᴇɴᴜ*
┊      ┗─────────⊷
╰┬━━━━━━━━━━━━⊷⳹
┌┤ *ʀᴇᴘʟʏ ɴᴀᴍᴇ ᴄᴏᴍᴍᴀɴᴅs 1ᴛᴏ10*
┊╰─────────────⊷
*╰━━━━━━━━━━━━━━━━━⊷*

> ${config.DESCRIPTION}`;

        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363399999197102@newsletter',
                newsletterName: '╭••➤®Njabulo Jb',
                serverMessageId: 143
              },
                forwardingScore: 999,
                externalAdReply: {
                    title: "🖥️ᴡᴏʀᴅ ᴡʜᴀᴛꜱᴀᴩᴩ ᴍᴇꜱꜱᴀɢᴇ ᴏɴʟɪɴᴇ",
                    body: "📡ꜱʏꜱᴛᴇᴍ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ",
                    thumbnailUrl: "https://files.catbox.moe/173jef.jpeg",
                    sourceUrl: "https://whatsapp.com/channel/0029VarYP5iAInPtfQ8fRb2T",
                    mediaType: 1,
                    renderSmallThumbnail: true
            }
        };

        const sentMsg = await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL || 'https://files.catbox.moe/173jef.jpeg' },
                caption: menuCaption,
                contextInfo: contextInfo
          }, { quoted: {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=254700000000:+254 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });

        // Send menu audio only once
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/5cxuyv.mp3' },
            mimetype: 'audio/mp4',
            ptt: true,       
          }, { quoted: {
            key: {
                fromMe: false,
                participant: `0@s.whatsapp.net`,
                remoteJid: "status@broadcast"
            },
            message: {
                contactMessage: {
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=254700000000:+254 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });

        const messageID = sentMsg.key.id;

        // Complete menu data
        const menuData = {
            '1': {
                title: "📥 *Download Menu* 📥",
                content: ` 🎬 *(download)*
┏──────────────⊷
│ 🌐 *sᴏᴄɪᴀʟ ᴍᴇᴅɪᴀ*
│ • ғᴀᴄᴇʙᴏᴏᴋ [ᴜʀʟ]
│ • *ᴍᴇᴅɪᴀғɪʀᴇ* [ᴜʀʟ]
│ • *ᴛɪᴋᴛᴏᴋ* [ᴜʀʟ]
│ • *ᴛᴡɪᴛᴛᴇʀ* [ᴜʀʟ]
│ • *ɪɴsᴛᴀ* [ᴜʀʟ]
│ • *ᴀᴘᴋ* [ᴀᴘᴘ]
│ • *ɪᴍɢ* [ǫᴜᴇʀʏ]
│ • *ᴛᴛ2* [ᴜʀʟ]
│ • *ᴘɪɴs* [ᴜʀʟ]
│ • *ᴀᴘᴋ2* [ᴀᴘᴘ]
│ • *ғʙ2* [ᴜʀʟ]
│ • *ᴘɪɴᴛᴇʀᴇsᴛ* [ᴜʀʟ]
│ • *sᴘᴏᴛɪғʏ* [ǫᴜᴇʀʏ]
│ • *ᴘʟᴀʏ* [sᴏɴɢ]
│ • *ᴘʟᴀʏ2-10* [sᴏɴɢ]
│ • *ᴀᴜᴅɪᴏ* [ᴜʀʟ]
│ • *ᴠɪᴅᴇᴏ* [ᴜʀʟ]
│ • *ᴠɪᴅᴇᴏ2-10* [ᴜʀʟ]
│ • *ʏᴛᴍᴘ3* [ᴜʀʟ]
│ • *ʏᴛᴍᴘ4* [ᴜʀʟ]
│ • *sᴏɴɢ* [ɴᴀᴍᴇ]
│ • *ᴅᴀʀᴀᴍᴀ* [ɴᴀᴍᴇ]
┗──────────────⊷


*📅 Date*: 
*⏰ Time*: 
*⚙️ Prefix*: [.]
*🌐 Mode*: [public]
> ${config.DESCRIPTION}`
            },
            '2': {
                title: "👥 *Group Menu* 👥",
                content: ` 🌐 *Group)*
┏──────────────⊷
│ 🛠️ *ᴍᴀɴᴀɢᴇᴍᴇɴᴛ*
│ • ɢʀᴏᴜᴘʟɪɴᴋ
│ • ᴋɪᴄᴋᴀʟʟ
│ • ᴋɪᴄᴋᴀʟʟ2
│ • ᴋɪᴄᴋᴀʟʟ3
│ • ᴀᴅᴅ @ᴜsᴇʀ
│ • ʀᴇᴍᴏᴠᴇ @ᴜsᴇʀ
│ • ᴋɪᴄᴋ @ᴜsᴇʀ
│ • ᴘʀᴏᴍᴏᴛᴇ @ᴜsᴇʀ
│ • ᴅᴇᴍᴏᴛᴇ @ᴜsᴇʀ
│ • ᴅɪsᴍɪss 
│ • ʀᴇᴠᴏᴋᴇ
│ • ᴍᴜᴛᴇ [ᴛɪᴍᴇ]
│ • ᴜɴᴍᴜᴛᴇ
│ • ʟᴏᴄᴋɢᴄ
│ • ᴜɴʟᴏᴄᴋɢᴄ
│ • ᴛᴀɢ @ᴜsᴇʀ
│ • ʜɪᴅᴇᴛᴀɢ [ᴍsɢ]
│ • ᴛᴀɢᴀʟʟ
│ • ᴛᴀɢᴀᴅᴍɪɴs
│ • ɪɴᴠɪᴛᴇ
┗──────────────⊷


*📅 Date*: 
*⏰ Time*: 
*⚙️ Prefix*: [.]
*🌐 Mode*: [public]
> > *✆︎Pσɯҽɾҽԃ Ⴆყ NנɐႦυℓσ נႦ*
> ${config.DESCRIPTION}`
            },
            '3': {
                title: "😄 *Fun Menu* 😄",
                content: ` *(🌐ғᴜɴ)*
┏──────────────⊷
*│ᴀᴡᴏᴏ*
*│ʜᴜɢ*
*│ʙᴜʟʟʏ*
*│ᴄᴜᴅᴅʟᴇ*
*│ᴄʀʏ*
*│ʏᴇᴇᴛ*
*│ʙᴏɴᴋ*
*│sᴍᴜɢ*
*│ᴘᴀᴛ*
*│ʟɪᴄᴋ*
*│sᴍɪʟᴇ*
*│ᴡᴀᴠᴇᴠᴇ*
*│ɴᴏᴍ*
*│ʜɪɢʜғɪᴠᴇ*
*│ʜᴀɴᴅʜᴏʟᴅ*
*│ᴘᴏᴋᴇ*
*│ʙɪᴛᴇ*
*│ɢʟᴏᴍᴘ*
*│ʜᴀᴘᴘʏ*
*│ᴡɪɴᴋ*
*│ᴋɪss*
*│sʟᴀᴘ*
*│ᴋɪʟʟ*
*│ᴅᴀɴᴄᴇ*
*│ᴄʀɪɴɢᴇ*
┗──────────────⊷


*📅 ᴅᴀᴛᴇ*: 
*⏰ ᴛɪᴍᴇ*: 
*⚙️ ᴘʀᴇғɪx*: *[ ${config.PREFIX} ]*
*🌐 ᴍᴏᴅᴇ*: *[${config.MODE}]*

> ${config.DESCRIPTION}`
            },
            '4': {
                title: "👑 *Netflix Menu* 👑",
                content: ` 🌐 *(ɴᴇᴛꜰʟɪx ᴍᴇɴᴜ)*
┏──────────────⊷
┃ *⚠️ Coming soon 🔜*
┗──────────────⊷
> ${config.DESCRIPTION}`
            },
            '5': {
                title: "🤖 *AI Menu* 🤖",
                content: `🌐 *(ᴀɪ)*
┏──────────────⊷
│ 💬 *ᴄʜᴀᴛ ᴀɪ*
│ • ᴀɪ [ǫᴜᴇʀʏ]
│ • ɢᴘᴛ3 [ǫᴜᴇʀʏ]
│ • ɢᴘᴛ2 [ǫᴜᴇʀʏ]
│ • ɢᴘᴛᴍɪɴɪ [ǫᴜᴇʀʏ]
│ • ɢᴘᴛ [ǫᴜᴇʀʏ]
│ • ᴍᴇᴛᴀ [ǫᴜᴇʀʏ]
│ • ɪᴍᴀɢɪɴᴇ [ᴛᴇxᴛ]
│ • ɪᴍᴀɢɪɴᴇ2 [ᴛᴇxᴛ]
│ • ʙʟᴀᴄᴋʙᴏx [ǫᴜᴇʀʏ]
│ • ʟᴜᴍᴀ [ǫᴜᴇʀʏ]
│ • ᴅᴊ [ǫᴜᴇʀʏ]
│ • ᴋʜᴀɴ [ǫᴜᴇʀʏ]
┗──────────────⊷


*📅 ᴅᴀᴛᴇ*: 
*⏰ ᴛɪᴍᴇ*: 
*⚙️ ᴘʀᴇғɪx*: [.]
*🌐 ᴍᴏᴅᴇ*: [ᴘᴜʙʟɪᴄ]

> ${config.DESCRIPTION}`
            },
            '6': {
                title: "🎎 *Anime Menu* 🎎",
                content: `🌐 *(ᴀɴɪᴍᴇ)*
┏──────────────⊷
│ 🖼️ *ɪᴍᴀɢᴇs*
│ • ғᴀᴄᴋ
│ • ᴅᴏɢ
│ • ᴀᴡᴏᴏ
│ • ɢᴀʀʟ
│ • ᴡᴀɪғᴜ
│ • ɴᴇᴋᴏ
│ • ᴍᴇɢɴᴜᴍɪɴ
│ • ᴍᴀɪᴅ
│ • ʟᴏʟɪ
│ • ᴀɴɪᴍᴇɢɪʀʟ
│ • ᴀɴɪᴍᴇɢɪʀʟ1-5
│ • ᴀɴɪᴍᴇ1-5
│ • ғᴏxɢɪʀʟ
│ • ɴᴀʀᴜᴛᴏ
┗──────────────⊷

*📅 ᴅᴀᴛᴇ*: 
*⏰ ᴛɪᴍᴇ*: 
*⚙️ ᴘʀᴇғɪx*: *[ ${config.PREFIX} ]*
*🌐 ᴍᴏᴅᴇ*: *[${config.MODE}]*

> ${config.DESCRIPTION}`
            },
            '7': {
                title: "🔄 *Convert Menu* 🔄",
                content: `🌐 *(cᴏɴᴠᴇʀᴛ)*
┏──────────────⊷
│ 🖼️ *ᴍᴇᴅɪᴀ*
│ • sᴛɪᴄᴋᴇʀ [ɪᴍɢ]
│ • sᴛɪᴄᴋᴇʀ2 [ɪᴍɢ]
│ • ᴛᴀᴋᴇ [ɴᴀᴍᴇ,ᴛᴇxᴛ]
│ • ᴛᴏᴍᴘ3 [ᴠɪᴅᴇᴏ]
│ • ғᴀɴᴄʏ [ᴛᴇxᴛ]
│ • ᴛᴛs [ᴛᴇxᴛ]
│ • ᴛʀᴛ [ᴛᴇxᴛ]
│ • ʙᴀsᴇ64 [ᴛᴇxᴛ]
│ • ᴜɴʙᴀsᴇ64 [ᴛᴇxᴛ]
┗──────────────⊷

*📅 ᴅᴀᴛᴇ*: 
*⏰ ᴛɪᴍᴇ*: 
*⚙️ ᴘʀᴇғɪx*: *[ ${config.PREFIX} ]*
*🌐 ᴍᴏᴅᴇ*: *[${config.MODE}]*

> ${config.DESCRIPTION}`
            },
            '8': {
                title: "📌 *Other Menu* 📌",
                content: `🌐 *(ᴏᴛʜᴇʀ)*
┏──────────────⊷
│ 🕒 *ᴜᴛɪʟɪᴛɪᴇs*
│ • ᴛɪᴍᴇɴᴏᴡ
│ • ᴅᴀᴛᴇ
│ • ᴄᴏᴜɴᴛ [ɴᴜᴍ]
│ • ᴄᴀʟᴄᴜʟᴀᴛᴇ [ᴇxᴘʀ]
│ • ᴄᴏᴜɴᴛx
│ • ғʟɪᴘ
│ • ᴄᴏɪɴғʟɪᴘ
│ • ʀᴄᴏʟᴏʀ
│ • ʀᴏʟʟ
│ • ғᴀᴄᴛ
│ • ᴅᴇғɪɴᴇ [ᴡᴏʀᴅ]
│ • ɴᴇᴡs [ǫᴜᴇʀʏ]
│ • ᴍᴏᴠɪᴇ [ɴᴀᴍᴇ]
│ • ᴡᴇᴀᴛʜᴇʀ [ʟᴏᴄ]
┗──────────────⊷

*📅 ᴅᴀᴛᴇ*: 
*⏰ ᴛɪᴍᴇ*: 
*⚙️ ᴘʀᴇғɪx*: *[ ${config.PREFIX} ]*
*🌐 ᴍᴏᴅᴇ*: *[${config.MODE}]*

> ${config.DESCRIPTION}`
            },
            '9': {
                title: "💞 *logo Menu* 💞",
                content: ` 🎨 *(ʟᴏɢᴏ ᴍᴇɴᴜ)*
┏──────────────⊷
│• *ɴᴇᴏɴʟɪɢʜᴛ*
│• *ʙʟᴀᴄᴋᴘɪɴᴋ*
│• *ᴅᴇᴀᴅᴘᴏᴏʟ*
│• *ᴅʀᴀɢᴏɴʙᴀʟʟ*
│• *3ᴅᴄᴏᴍɪᴄ*
│• *ᴛʜᴏʀ*
│• *ɴᴀʀᴜᴛᴏ*
│• *ᴘᴏʀɴʜᴜʙ*
│• *sᴀᴅɢɪʀʟ*
│• *ᴄᴀᴛ*
│• *ᴄʟᴏᴜᴅs*
│• *ғᴜᴛᴜʀɪsᴛɪᴄ*
│• *3ᴅᴘᴀᴘᴇʀ*
│• *ᴇʀᴀsᴇʀ*
│• *ᴀᴍᴇʀɪᴄᴀ*
│• *ᴅᴇᴠɪʟᴡɪɴɢs*
│• *ɴɪɢᴇʀɪᴀ*
│• *sᴜɴsᴇᴛ*
│• *ʟᴇᴀғ*
│• *ɢᴀʟᴀxʏ*
│• *ᴀɴɢᴇʟᴡɪɴɢs*
│• *ᴢᴏᴅɪᴀᴄ*
│• *ʟᴜxᴜʀʏ*
│• *ʙᴏᴏᴍ*
│• *ʜᴀᴄᴋᴇʀ*
│• *ᴘᴀɪɴᴛ*
│• *ғʀᴏᴢᴇɴ*
│• *ᴄᴀsᴛʟᴇ*
│• *ᴛᴀᴛᴏᴏ*
│• *ʙᴜʟʙ*
│• *ᴠᴀʟᴏʀᴀɴᴛ*
│• *ʙᴇᴀʀ*
│• *ᴛʏᴘᴏɢʀᴀᴘʜʏ*
│• *ʙɪʀᴛʜᴅᴀʏ*
┗──────────────⊷

*📅 ᴅᴀᴛᴇ*: 
*⏰ ᴛɪᴍᴇ*: 
*⚙️ ᴘʀᴇғɪx*: *[ ${config.PREFIX} ]*
*🌐 ᴍᴏᴅᴇ*: *[${config.MODE}]*

> ${config.DESCRIPTION}`
            },
            '10': {
                title: "🏠 *Settings menu* 🏠",
                content: ` 🌐 *(Main)*
┏──────────────⊷
┃ ℹ️ *Bot Info*
┃ • ping
┃ • live
┃ • alive
┃ • runtime
┃ • uptime
┃ • repo
┃ • owner
┃ • menu
┃ • restar
┃ • block @user
┃ • unblock @user
┃ • fullpp [img]
┃ • setpp [img]
┃ • restart
┗──────────────⊷
> ${config.DESCRIPTION}`
            }
        };

        // Message handler
        const handler = async (msgData) => {
            const receivedMsg = msgData.messages[0];
            if (!receivedMsg?.message || !receivedMsg.key?.remoteJid) return;

            const isReplyToMenu = receivedMsg.message.extendedTextMessage?.contextInfo?.stanzaId === messageID;
            
            if (isReplyToMenu) {
                const receivedText = receivedMsg.message.conversation || 
                                  receivedMsg.message.extendedTextMessage?.text;
                const senderID = receivedMsg.key.remoteJid;

                await conn.sendMessage(senderID, {
                    react: { text: '🧾', key: receivedMsg.key }
                });

                if (menuData[receivedText]) {
                    const selectedMenu = menuData[receivedText];
                    
                    await conn.sendMessage(
                        senderID,
                        {
                            image: { url: config.MENU_IMAGE_URL || 'https://files.catbox.moe/173jef.jpeg' },
                            caption: selectedMenu.content,
                            contextInfo: contextInfo
                        }, { quoted: {
                       key: {
                       fromMe: false,
                       participant: `0@s.whatsapp.net`,
                       remoteJid: "status@broadcast"
                      },
            message: {
      contactMessage: {
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=254700000000:+254 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                     }
                   }
              } });
                    await conn.sendMessage(senderID, {
                        react: { text: '💬', key: receivedMsg.key }
                    });

                } else {
                    await conn.sendMessage(
                        senderID,
                        {
                           image: { url: config.MENU_IMAGE_URL || 'https://res.cloudinary.com/dgy2dutjs/image/upload/v1751624587/url.crissvevo.co.tz/IMG_2353_fze42l.jpg' },
                            caption: `❌ *Invalid Option!* ❌\n\nPlease reply with a number between 1-10 to select a menu.\n\n*Example:* Reply with "1" for Download Menu\n\n> ${config.DESCRIPTION}`,
                            contextInfo: contextInfo
                        },
                        { quoted: receivedMsg }
                    );
                    await conn.sendMessage(senderID, {
                        react: { text: '❌', key: receivedMsg.key }
                    });
                }
            }
        };

        // Add listener
        conn.ev.on("messages.upsert", handler);

        // Remove listener after 5 minutes
        setTimeout(() => {
            conn.ev.off("messages.upsert", handler);
        }, 300000);

    } catch (e) {
        console.error('Menu Error:', e);
        await conn.sendMessage(from, {
            react: { text: '❌', key: mek.key }
        });
        reply(`❌ An error occurred: ${e}\n\n> ${config.DESCRIPTION}`);
    }
});
