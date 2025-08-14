const { cmd } = require('../command');
const os = require("os");
const { runtime } = require('../lib/functions');
const config = require('../config');

cmd({
  pattern: "alie",
  alias: ["satus", "nline", "l"],
  desc: "Check bot is alive or not",
  category: "main",
  react: "⚡",
  filename: __filename
},
async (conn, mek, m, { from, sender, reply }) => {
  try {
    const status = `
╭───〔 *${config.BOT_NAME}* 〕───◉
│✨ *Bot is Active & Online!*
│
│♦️ *Owner:* ${config.OWNER_NAME}
│♦️ *Version:* 5.0.0 max
│♦️ *Prefix:* [${config.PREFIX}]
│♦️ *Mode:* [${config.MODE}]
│♦️ *RAM:* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB
│♦️ *Host:* ${os.hostname()}
│♦️ *Uptime:* ${runtime(process.uptime())}
╰────────────────────◉
> ${config.DESCRIPTION}`;

    const buttons = [
      {
        buttonId: "action",
        buttonText: { displayText: "📂 ᴍᴇɴᴜ ᴏᴘᴛɪᴏɴꜱ" },
        type: 4,
        nativeFlowInfo: {
          name: "single_select",
          paramsJson: JSON.stringify({
            title: "📂 ᴄʟɪᴄᴋ ʜᴇʀᴇ",
            sections: [
              {
                title: "📁 ᴍᴇʀᴄᴇᴅᴇs",
                highlight_label: "",
                rows: [
                  {
                    title: "📂 ᴍᴇɴᴜ",
                    description: "ᴏᴘᴇɴ ᴀʟʟ ᴄᴏᴍᴍᴀɴᴅꜱ",
                    id: `${config.PREFIX}menu`,
                  },
                  {
                    title: "👑 ᴏᴡɴᴇʀ",
                    description: "ᴄᴏɴᴛᴀᴄᴛ ʙᴏᴛ ᴏᴡɴᴇʀ",
                    id: `${config.PREFIX}owner`,
                  },
                  {
                    title: "📶 ᴘɪɴɢ",
                    description: "ᴛᴇꜱᴛ ʙᴏᴛ ꜱᴘᴇᴇᴅ",
                    id: `${config.PREFIX}ping`,
                  },
                  {
                    title: "🖥️ ꜱʏꜱᴛᴇᴍ",
                    description: "ꜱʏꜱᴛᴇᴍ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ",
                    id: `${config.PREFIX}system`,
                  },
                  {
                    title: "🛠️ ʀᴇᴘᴏ",
                    description: "ɢɪᴛʜᴜʙ ʀᴇᴘᴏꜱɪᴛᴏʀʏ",
                    id: `${config.PREFIX}repo`,
                  },
                ],
              },
            ],
          }),
        },
      },
    ];

    await conn.sendMessage(from, {
      image: { url: config.MENU_IMAGE_URL },
      caption: status,
      buttons: buttons,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 1000,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363416335506023@newsletter',
          newsletterName: 'ᴏʙᴇᴅᴛᴇᴄʜ',
          serverMessageId: 143
        }
      }
    }, { quoted: mek });

  } catch (e) {
    console.error("Alive Error:", e);
    reply(`An error occurred: ${e.message}`);
  }
});
