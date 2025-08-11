const { cmd, commands } = require('../command');
const config = require('../config');
const prefix = config.PREFIX;
const fs = require('fs');
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, sleep, fetchJson } = require('../lib/functions2');
const { writeFileSync } = require('fs');
const path = require('path');

cmd({
  pattern: "antilink",
  alias: ["antilinks"],
  desc: "Enable or disable ANTI_LINK in groups",
  category: "group",
  react: "🚫",
  filename: __filename
}, async (conn, mek, m, { isGroup, isAdmins, isBotAdmins, args, reply }) => {
  try {
    if (!isGroup) 
    await conn.sendMessage(m.chat, {
      text: "This command can only be used in a group.'",
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
  
    
      if (!isBotAdmins) 
     await conn.sendMessage(m.chat, {
      text: "Bot must be an admin to use this command.'",
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

    
    if (!isAdmins) 
await conn.sendMessage(m.chat, {
      text: "You must be an admin to use this command.",
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

    if (args[0] === "on") {
      config.ANTI_LINK = "true";
      reply("✅ ANTI_LINK has been enabled.");
    } else if (args[0] === "off") {
      config.ANTI_LINK = "false";
      reply("❌ ANTI_LINK has been disabled.");
    } else {
      reply("Usage: *.antilink on/off*");
    }
  } catch (e) {
    reply(`Error: ${e.message}`);
  }
});

cmd({
  pattern: "antilinkkick",
  alias: ["kicklink"],
  desc: "Enable or disable ANTI_LINK_KICK in groups",
  category: "group",
  react: "⚠️",
  filename: __filename
}, async (conn, mek, m, { isGroup, isAdmins, isBotAdmins, args, reply }) => {
  try {
    if (!isGroup) 
    await conn.sendMessage(m.chat, {
      text: "This command can only be used in a group.'",
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
  
    
      if (!isBotAdmins) 
     await conn.sendMessage(m.chat, {
      text: "Bot must be an admin to use this command.'",
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

    
    if (!isAdmins) 
await conn.sendMessage(m.chat, {
      text: "You must be an admin to use this command.",
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

    if (args[0] === "on") {
      config.ANTI_LINK_KICK = "true";
      reply("✅ ANTI_LINK_KICK has been enabled.");
    } else if (args[0] === "off") {
      config.ANTI_LINK_KICK = "false";
      reply("❌ ANTI_LINK_KICK has been disabled.");
    } else {
      reply("Usage: *.antilinkkick on/off*");
    }
  } catch (e) {
    reply(`Error: ${e.message}`);
  }
});


cmd({
  pattern: "deletelink",
  alias: ["linksdelete"],
  desc: "Enable or disable DELETE_LINKS in groups",
  category: "group",
  react: "❌",
  filename: __filename
}, async (conn, mek, m, { isGroup, isAdmins, isBotAdmins, args, reply }) => {
  try {
    if (!isGroup) 
    await conn.sendMessage(m.chat, {
      text: "This command can only be used in a group.'",
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
  
    
      if (!isBotAdmins) 
     await conn.sendMessage(m.chat, {
      text: "Bot must be an admin to use this command.'",
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

    
    if (!isAdmins) 
await conn.sendMessage(m.chat, {
      text: "You must be an admin to use this command.",
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
    if (args[0] === "on") {
      config.DELETE_LINKS = "true";
      reply("✅ DELETE_LINKS is now enabled.");
    } else if (args[0] === "off") {
      config.DELETE_LINKS = "false";
      reply("❌ DELETE_LINKS is now disabled.");
    } else {
      reply("Usage: *.deletelink on/off*");
    }
  } catch (e) {
    reply(`Error: ${e.message}`);
  }
});
