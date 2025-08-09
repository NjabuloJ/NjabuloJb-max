const config = require('../config');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');

cmd({
    pattern: "menu3",
    desc: "Show interactive menu system",
    category: "menu",
    react: "🧾",
    filename: __filename
}, async (conn, mek, m, { from, reply }) => {
    try {
        // Show loading reaction
        await conn.sendMessage(from, {
            react: { text: '⏳', key: mek.key }
        });

        const menuCaption = `
╭─❖ 𓆩 ⚡ 𓆪 ❖─╮
*(Njabulo Jb max)*
╰─❖ 𓆩 ⚡ 𓆪 ❖─╯
*╭─❖*
*┋🕵️ ʙᴏᴛ ɴᴀᴍᴇ : ${config.OWNER_NAME}*
*┋📅 ᴅᴀᴛᴇ: [${config.MODE}]*
*┋⏰ ᴛɪᴍᴇ: [${config.PREFIX}]*
*┋ Version :* 5.0.0 Pro
*╰─❖*


╭━━〔 *Menu List* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈│1️⃣  📥 *Download Menu*
┃◈│2️⃣  👥 *Group Menu*
┃◈│3️⃣  😄 *Fun Menu*
┃◈│4️⃣  👑 *Owner Menu*
┃◈│5️⃣  🤖 *AI Menu*
┃◈│6️⃣  🎎 *Anime Menu*
┃◈│7️⃣  🔄 *Convert Menu*
┃◈│8️⃣  📌 *Other Menu*
┃◈│9️⃣  💞 *Reactions Menu*
┃◈│🔟  🏠 *Main Menu*
┃◈╰───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        const contextInfo = {
            mentionedJid: [m.sender],
            forwardingScore: 999,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: '120363417599637828@newsletter',
                newsletterName: config.OWNER_NAME,
                serverMessageId: 143
            }
        };

        const sentMsg = await conn.sendMessage(
            from,
            {
                image: { url: config.MENU_IMAGE_URL || 'https://res.cloudinary.com/dgy2dutjs/image/upload/v1751624587/url.crissvevo.co.tz/IMG_2353_fze42l.jpg' },
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
                    displayName: "✆︎NנɐႦυℓσ נႦ verified",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=254700000000:+254 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });
    

        // Send menu audio only once
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/criss-vevo/CRISS-DATA/raw/refs/heads/main/autovoice/menunew.m4a' },
            mimetype: 'audio/mp4',
            ptt: true,       
        }, { quoted: mek });

        const messageID = sentMsg.key.id;

        // Complete menu data
        const menuData = {
            '1': {
                title: "📥 *Download Menu* 📥",
                content: ` 🎬 *(download)*
┏──────────────⊷
│ 🌐 *sᴏᴄɪᴀʟ ᴍᴇᴅɪᴀ*
│ • ғᴀᴄᴇʙᴏᴏᴋ [ᴜʀʟ]
│ • ᴍᴇᴅɪᴀғɪʀᴇ [ᴜʀʟ]
│ • ᴛɪᴋᴛᴏᴋ [ᴜʀʟ]
│ • ᴛᴡɪᴛᴛᴇʀ [ᴜʀʟ]
│ • ɪɴsᴛᴀ [ᴜʀʟ]
│ • ᴀᴘᴋ [ᴀᴘᴘ]
│ • ɪᴍɢ [ǫᴜᴇʀʏ]
│ • ᴛᴛ2 [ᴜʀʟ]
│ • ᴘɪɴs [ᴜʀʟ]
│ • ᴀᴘᴋ2 [ᴀᴘᴘ]
│ • ғʙ2 [ᴜʀʟ]
│ • ᴘɪɴᴛᴇʀᴇsᴛ [ᴜʀʟ]
│ • sᴘᴏᴛɪғʏ [ǫᴜᴇʀʏ]
│ • ᴘʟᴀʏ [sᴏɴɢ]
│ • ᴘʟᴀʏ2-10 [sᴏɴɢ]
│ • ᴀᴜᴅɪᴏ [ᴜʀʟ]
│ • ᴠɪᴅᴇᴏ [ᴜʀʟ]
│ • ᴠɪᴅᴇᴏ2-10 [ᴜʀʟ]
│ • ʏᴛᴍᴘ3 [ᴜʀʟ]
│ • ʏᴛᴍᴘ4 [ᴜʀʟ]
│ • sᴏɴɢ [ɴᴀᴍᴇ]
│ • ᴅᴀʀᴀᴍᴀ [ɴᴀᴍᴇ]
┗──────────────⊷


*📅 Date*: 
*⏰ Time*: 
*⚙️ Prefix*: [${config.PREFIX}]
*🌐 Mode*: [${config.MODE}]
> ${config.DESCRIPTION}`
            },
            '2': {
                title: "👥 *Group Menu* 👥",
                content: `
┏──────────────⊷
│ 🛠️ *Management*
│ • grouplink
│ • kickall
│ • kickall2
│ • kickall3
│ • add @user
│ • remove @user
│ • kick @user
│ • promote @user
│ • demote @user
│ • dismiss 
│ • revoke
│ • mute [time]
│ • unmute
│ • lockgc
│ • unlockgc
│ • tag @user
│ • hidetag [msg]
│ • tagall
│ • tagadmins
│ • invite
┗──────────────⊷


*📅 Date*: 
*⏰ Time*: 
*⚙️ Prefix*: [${config.PREFIX}]
*🌐 Mode*: [${config.MODE}]
> ${config.DESCRIPTION}`
            },
            '3': {
                title: "😄 *Fun Menu* 😄",
                content: ` 🌐*(Fun)*
┏──────────────⊷
│ 🎭 *Interactive*
│ • shapar
│ • rate @user
│ • insult @user
│ • hack @user
│ • ship @user1 @user2
│ • character
│ • pickup
│ • joke
│ • hrt
│ • hpy
│ • syd
│ • anger
│ • shy
│ • kiss
│ • mon
│ • cunfuzed
┗──────────────⊷


*📅 Date*: 
*⏰ Time*: 
*⚙️ Prefix*: [${config.PREFIX}]
*🌐 Mode*: [${config.MODE}]
> ${config.DESCRIPTION}`
            },
            '4': {
                title: "👑 *Owner Menu* 👑",
                content: `  🌐 *(Owner)*
┏──────────────⊷
│ ⚠️ *Restricted*
│ • block @user
│ • unblock @user
│ • fullpp [img]
│ • setpp [img]
│ • restart
│ • shutdown
│ • updatecmd
│ • gjid
│ • jid @user
│ • listcmd
│ • allmenu
┗──────────────⊷


*📅 Date*: 
*⏰ Time*: 
*⚙️ Prefix*: [${config.PREFIX}]
*🌐 Mode*: [${config.MODE}]
> ${config.DESCRIPTION}`
            },
            '5': {
                title: "🤖 *AI Menu* 🤖",
                content: ` 🌐 *(AI)*
┏──────────────⊷
│ 💬 *Chat AI*
│ • ai [query]
│ • gpt3 [query]
│ • gpt2 [query]
│ • gptmini [query]
│ • gpt [query]
│ • meta [query]
│ • imagine [text]
│ • imagine2 [text]
│ • blackbox [query]
│ • luma [query]
│ • dj [query]
│ • khan [query]
┗──────────────⊷


*📅 Date*: 
*⏰ Time*: 
*⚙️ Prefix*: [${config.PREFIX}]
*🌐 Mode*: [${config.MODE}]
> ${config.DESCRIPTION}`
            },
            '6': {
                title: "🎎 *Anime Menu* 🎎",
                content: ` 🌐 *(Anime)*
┏──────────────⊷
│ 🖼️ *Images*
│ • fack
│ • dog
│ • awoo
│ • garl
│ • waifu
│ • neko
│ • megnumin
│ • maid
│ • loli
│ • animegirl
│ • animegirl1-5
│ • anime1-5
│ • foxgirl
│ • naruto
┗──────────────⊷


*📅 Date*: 
*⏰ Time*: 
*⚙️ Prefix*: [${config.PREFIX}]
*🌐 Mode*: [${config.MODE}]
> ${config.DESCRIPTION}`
            },
            '7': {
                title: "🔄 *Convert Menu* 🔄",
                content: ` 🌐 *(Xonvert)*
┏──────────────⊷
│ 🖼️ *Media*
│ • sticker [img]
│ • sticker2 [img]
│ • emojimix 😎+😂
│ • take [name,text]
│ • tomp3 [video]
│ • fancy [text]
│ • tts [text]
│ • trt [text]
│ • base64 [text]
│ • unbase64 [text]
┗──────────────⊷


*📅 Date*: 
*⏰ Time*: 
*⚙️ Prefix*: [${config.PREFIX}]
*🌐 Mode*: [${config.MODE}]
> ${config.DESCRIPTION}`
            },
            '8': {
                title: "📌 *Other Menu* 📌",
                content: ` 🌐 *(Other)*
┏──────────────⊷
│ 🕒 *Utilities*
│ • timenow
│ • date
│ • count [num]
│ • calculate [expr]
│ • countx
│ • flip
│ • coinflip
│ • rcolor
│ • roll
│ • fact
│ • define [word]
│ • news [query]
│ • movie [name]
│ • weather [loc]
┗──────────────⊷


*📅 Date*: 
*⏰ Time*: 
*⚙️ Prefix*: [${config.PREFIX}]
*🌐 Mode*: [${config.MODE}]
> ${config.DESCRIPTION}`
            },
            '9': {
                title: "💞 *Reactions Menu* 💞",
                content: ` *(Reactions)*
┏──────────────⊷
│ ❤️ *Affection*
│ • cuddle @user
│ • hug @user
│ • kiss @user
│ • lick @user
│ • pat @user
│ • bully @user
│ • bonk @user
│ • yeet @user
│ • slap @user
│ • kill @user
│ • blush @user
│ • smile @user
│ • happy @user
│ • wink @user
│ • poke @user
┗──────────────⊷


*📅 Date*: 
*⏰ Time*: 
*⚙️ Prefix*: [${config.PREFIX}]
*🌐 Mode*: [${config.MODE}]
> ${config.DESCRIPTION}`
            },
            '10': {
                title: "🏠 *Main Menu* 🏠",
                content: ` 🌐 *(Main)*
┏──────────────⊷
│ ℹ️ *Bot Info*
│ • ping
│ • live
│ • alive
│ • runtime
│ • uptime
│ • repo
│ • owner
│ • menu
│ • menu2
│ • restart
┗──────────────⊷


*📅 Date*: 
*⏰ Time*: 
*⚙️ Prefix*: [${config.PREFIX}]
*🌐 Mode*: [${config.MODE}]
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
                    react: { text: '⏳', key: receivedMsg.key }
                });

                if (menuData[receivedText]) {
                    const selectedMenu = menuData[receivedText];
                    
                    await conn.sendMessage(
                        senderID,
                        {
                            text: selectedMenu.content,
                            contextInfo: contextInfo
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
        
                    await conn.sendMessage(senderID, {
                        react: { text: '✅', key: receivedMsg.key }
                    });

                } else {
                    await conn.sendMessage(
                        senderID,
                        {
                            text: `❌ *Invalid Option!* ❌\n\nPlease reply with a number between 1-10 to select a menu.\n\n*Example:* Reply with "1" for Download Menu\n\n> ${config.DESCRIPTION}`,
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
