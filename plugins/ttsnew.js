const { cmd } = require("../command");
const googleTTS = require('google-tts-api'); 

cmd({
  pattern: "voice",
  desc: "Convert text to speech with different voices.",
  category: "fun",
  react: "ðŸ”Š",
  filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    // Ensure there is text
    if (!q) {
await conn.sendMessage(m.chat, {
      text: "Please provide text for conversion! Usage: `.tts <text>`",
      contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363399999197102@newsletter',
                        newsletterName: '••®Njabulo Jb',
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
                    displayName: "NנɐႦυℓσ נႦ verified",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=254700000000:+254 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });
    }

    // Select voice language based on user input or default to a male voice
    let voiceLanguage = 'en-US'; // Default language is American English with a male voice
    let selectedVoice = 'male';  // Default voice type (we assume it's male by default)

    // Check if user wants a different language or voice
    if (args[0] === "male") {
      voiceLanguage = 'en-US'; // Use American male voice
    } else if (args[0] === "female") {
      voiceLanguage = 'en-GB'; // Use British female voice
      selectedVoice = 'female';
    } else if (args[0] === "loud") {
      voiceLanguage = 'en-US'; // Default male voice, but let's interpret "loud" as normal speech speed.
    } else if (args[0] === "deep") {
      voiceLanguage = 'en-US'; // Deep male voice (still has limitations with `google-tts-api`)
    } else {
      voiceLanguage = 'en-US'; // Default fallback
    }

    // Generate the URL for the TTS audio
    const url = googleTTS.getAudioUrl(q, {
      lang: voiceLanguage,  // Choose language based on selected voice
      slow: false,  // Normal speed for the speech
      host: 'https://translate.google.com'
    });

    // Send the audio message to the user
    await conn.sendMessage(from, { 
      audio: { url: url }, 
      mimetype: 'audio/mpeg', 
      ptt: true,
      contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363399999197102@newsletter',
                        newsletterName: '••®Njabulo Jb',
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
                    displayName: "NנɐႦυℓσ נႦ verified",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=254700000000:+254 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });

  } catch (error) {
    console.error(error);
    reply(`Error: ${error.message}`);
  }
});

cmd({
  pattern: "text",
  desc: "Convert text to speech with different voices.",
  category: "fun",
  react: "ðŸ”Š",
  filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    // Ensure there is text
    if (!q) {
await conn.sendMessage(m.chat, {
      text: "Please provide text for conversion! Usage: `.tts <text>`",
      contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363399999197102@newsletter',
                        newsletterName: '••®Njabulo Jb',
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
                    displayName: "NנɐႦυℓσ נႦ verified",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=254700000000:+254 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });
    }

    // Select voice language based on user input or default to a male voice
    let voiceLanguage = 'en-US'; // Default language is American English with a male voice
    let selectedVoice = 'male';  // Default voice type (we assume it's male by default)

    // Check if user wants a different language or voice
    if (args[0] === "male") {
      voiceLanguage = 'en-US'; // Use American male voice
    } else if (args[0] === "female") {
      voiceLanguage = 'en-GB'; // Use British female voice
      selectedVoice = 'female';
    } else if (args[0] === "loud") {
      voiceLanguage = 'en-US'; // Default male voice, but let's interpret "loud" as normal speech speed.
    } else if (args[0] === "deep") {
      voiceLanguage = 'en-US'; // Deep male voice (still has limitations with `google-tts-api`)
    } else {
      voiceLanguage = 'en-US'; // Default fallback
    }

    // Generate the URL for the TTS audio
    const url = googleTTS.getAudioUrl(q, {
      lang: voiceLanguage,  // Choose language based on selected voice
      slow: false,  // Normal speed for the speech
      host: 'https://translate.google.com'
    });

    // Send the audio message to the user
    await conn.sendMessage(from, { 
      audio: { url: url }, 
      mimetype: 'audio/mpeg', 
      ptt: true,
      contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363399999197102@newsletter',
                        newsletterName: '••®Njabulo Jb',
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
                    displayName: "NנɐႦυℓσ נႦ verified",
                    vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Njabulo-Jb;BOT;;;\nFN:Njabulo-Jb\nitem1.TEL;waid=254700000000:+254 700 000000\nitem1.X-ABLabel:Bot\nEND:VCARD`
                }
            }
        } });

  } catch (error) {
    console.error(error);
    reply(`Error: ${error.message}`);
  }
});
  

