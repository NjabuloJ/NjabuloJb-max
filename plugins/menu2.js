const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
  pattern: "menu2",
  alias: ["mainmenu", "help2"],
  desc: "Interactive menu with categories",
  category: "main",
  react: "🧾",
  filename: __filename
}, async (conn, mek, m, { from, pushname, reply }) => {
  try {
    const getGreeting = () => {
      const h = new Date().getHours();
      if (h >= 5 && h < 12) return "ɢᴏᴏᴅ ᴍᴏʀɴɪɴɢ 🌅";
      if (h >= 12 && h < 18) return "ɢᴏᴏᴅ ᴀꜰᴛᴇʀɴᴏᴏɴ 🌞";
      return "ɢᴏᴏᴅ ᴇᴠᴇɴɪɴɢ 🌚";
    };

    const caption = `*┌──○*
*│ 『 ᴍᴇʀᴄᴇᴅᴇs 』*
*└─┬○*
*┌─┤ ${getGreeting()}*
*│  ╰────────────────╯*
*│◓ ᴜsᴇʀ : ${pushname}*
*│◓ ᴏᴡɴᴇʀ : ${config.OWNER_NAME}*
*│◓ ʙᴀɪʟᴇʏs : ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ*
*│◓ ᴛʏᴘᴇ : ɴᴏᴅᴇᴊs*
*│◓ ᴅᴇᴠ : ᴍᴀʀɪsᴇʟ*
*│◓ ᴍᴏᴅᴇ : ${config.MODE}*
*│◓ ᴘʀᴇғɪx :*「 ${config.PREFIX} 」
*│◓ ᴠᴇʀsɪᴏɴ : 1.0.0 ʙᴇᴛᴀ*
*╰─────────────────⊷*`;

    // Create interactive buttons
    const buttons = [
      {
        buttonId: "menu_action",
        buttonText: { displayText: "📂 ᴄᴀᴛᴇɢᴏʀɪᴇs" },
        type: 1 // Use type 1 for simple buttons
      },
      {
        buttonId: "owner_info",
        buttonText: { displayText: "👑 ᴏᴡɴᴇʀ" },
        type: 1
      }
    ];

    // Send the initial menu message
    const sentMsg = await conn.sendMessage(from, {
      image: { url: 'https://files.catbox.moe/roubzi.jpg' },
      caption: caption,
      buttons: buttons,
      footer: "ᴍᴀᴅᴇ ʙʏ ᴍᴀʀɪsᴇʟ",
      headerType: 1
    }, { quoted: mek });

    // Store the message ID for reference
    const menuMessageId = sentMsg.key.id;

    // Button handler function
    const handleButtons = async (response) => {
      try {
        // Check if this is a response to our menu message
        if (response.key.remoteJid !== from) return;
        if (!response.message?.buttonsResponseMessage) return;
        if (response.message.buttonsResponseMessage.contextInfo?.stanzaId !== menuMessageId) return;

        const selectedButton = response.message.buttonsResponseMessage.selectedButtonId;

        if (selectedButton === "menu_action") {
          // Show category selection
          const categoryButtons = [
            { buttonId: "download_menu", buttonText: { displayText: "📥 ᴅᴏᴡɴʟᴏᴀᴅ" }, type: 1 },
            { buttonId: "group_menu", buttonText: { displayText: "👥 ɢʀᴏᴜᴘ" }, type: 1 },
            { buttonId: "fun_menu", buttonText: { displayText: "🎮 ғᴜɴ" }, type: 1 },
            { buttonId: "owner_menu", buttonText: { displayText: "👑 ᴏᴡɴᴇʀ" }, type: 1 },
            { buttonId: "ai_menu", buttonText: { displayText: "🤖 ᴀɪ" }, type: 1 },
            { buttonId: "anime_menu", buttonText: { displayText: "🍥 ᴀɴɪᴍᴇ" }, type: 1 }
          ];

          await conn.sendMessage(from, {
            text: "*📂 sᴇʟᴇᴄᴛ ᴀ ᴄᴀᴛᴇɢᴏʀʏ*",
            buttons: categoryButtons,
            footer: config.BOT_NAME,
            headerType: 1
          }, { quoted: response });
        }
        else if (selectedButton === "owner_info") {
          await conn.sendMessage(from, {
            text: `*👑 OWNER INFO*\n\nName: ${config.OWNER_NAME}\nContact: ${config.OWNER_NUMBER}`
          }, { quoted: response });
        }
        // Add more button handlers as needed
      } catch (error) {
        console.error("Button handler error:", error);
      }
    };

    // Listen for button responses
    conn.ev.on('messages.upsert', async ({ messages }) => {
      const msg = messages[0];
      if (msg?.message?.buttonsResponseMessage) {
        await handleButtons(msg);
      }
    });

  } catch (err) {
    console.error("❌ menu2 error:", err);
    reply("⚠️ Error showing menu.");
  }
});
