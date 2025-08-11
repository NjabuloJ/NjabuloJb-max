const { sleep } = require('../lib/functions');
const {cmd , commands} = require('../command')

cmd({
    pattern: "color",
    desc: "Generate a random color with name and code.",
    category: "utility",
    filename: __filename,
}, 
async (conn, mek, m, { reply }) => {
    try {
        const colorNames = [
            "Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Pink", "Brown", "Black", "White", 
            "Gray", "Cyan", "Magenta", "Violet", "Indigo", "Teal", "Lavender", "Turquoise"
        ];
        
        const randomColorHex = "#" + Math.floor(Math.random()*16777215).toString(16);
        const randomColorName = colorNames[Math.floor(Math.random() * colorNames.length)];

    await conn.sendMessage(m.chat, {
      text: `🎨 *Random Color:* \nName: ${randomColorName}\nCode: ${randomColorHex}`,
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
    } catch (e) {
        console.error("Error in .randomcolor command:", e);
        reply("❌ An error occurred while generating the random color.");
    }
});

//base64 
cmd({
    pattern: "base64",
    desc: "Encode text into Base64 format.",
    category: "utility",
    filename: __filename,
}, 
async (conn, mek, m, { args, reply }) => {
    try {
        // Ensure the user provided some text
        if (!args.length) 
       await conn.sendMessage(m.chat, {
      text: "Please provide the text to encode into Base64.",
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
           
        const textToEncode = args.join(" ");
        
        // Encode the text into Base64
        const encodedText = Buffer.from(textToEncode).toString('base64');
        
        // Send the encoded Base64 text
    await conn.sendMessage(m.chat, {
      text: `🔑 *Encoded Base64 Text:* \n${encodedText}`,
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
    } catch (e) {
        console.error("Error in .base64 command:", e);
        reply("❌ An error occurred while encoding the text into Base64.");
    }
});

cmd({
    pattern: "unbase64",
    desc: "Decode Base64 encoded text.",
    category: "utility",
    filename: __filename,
}, 
async (conn, mek, m, { args, reply }) => {
    try {
        // Ensure the user provided Base64 text
        if (!args.length)
        await conn.sendMessage(m.chat, {
      text: "Please provide the Base64 encoded text to decode.",
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
    
        const base64Text = args.join(" ");
        
        // Decode the Base64 text
        const decodedText = Buffer.from(base64Text, 'base64').toString('utf-8');
        
        // Send the decoded text
    await conn.sendMessage(m.chat, {
      text: `🔓 *Decoded Text:* \n${decodedText}`,
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
    } catch (e) {
        console.error("Error in .unbase64 command:", e);
        reply("❌ An error occurred while decoding the Base64 text.");
    }
});

//time&date
cmd({
    pattern: "timenow",
    desc: "Check the current local time.",
    category: "utility",
    filename: __filename,
}, 
async (conn, mek, m, { reply }) => {
    try {
        // Get current date and time
        const now = new Date();
        
        // Get local time in Pakistan timezone (Asia/Karachi)
        const localTime = now.toLocaleTimeString("en-US", { 
            hour: "2-digit", 
            minute: "2-digit", 
            second: "2-digit", 
            hour12: true,
            timeZone: "Asia/Karachi" // Setting Pakistan's time zone explicitly
        });
        
        // Send the local time as reply
   await conn.sendMessage(m.chat, {
      text: `🕒 Current Local Time in Pakistan: ${localTime}`,
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
    } catch (e) {
        console.error("Error in .timenow command:", e);
        reply("❌ An error occurred. Please try again later.");
    }
});

cmd({
    pattern: "date",
    desc: "Check the current date.",
    category: "utility",
    filename: __filename,
}, 
async (conn, mek, m, { reply }) => {
    try {
        // Get current date
        const now = new Date();
        
        // Get the formatted date (e.g., "Monday, January 15, 2025")
        const currentDate = now.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        
        // Send the current date as reply
   await conn.sendMessage(m.chat, {
      text: `📅 Current Date: ${currentDate}`,
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
    } catch (e) {
        console.error("Error in .date command:", e);
        reply("❌ An error occurred. Please try again later.");
    }
});

//calculator 
cmd({
    pattern: "calculate",
    alias: ["calc"],
    desc: "Evaluate a mathematical expression.",
    category: "utilities",
    filename: __filename
},
async (conn, mek, m, { args, reply }) => {
    try {
        // Ensure arguments are provided
        if (!args[0]) {
        await conn.sendMessage(m.chat, {
      text: "Use this command like:\n *Example:* .calculate 5+3*2",
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

        const expression = args.join(" ").trim();

        // Validate the input to prevent unsafe operations
        if (!/^[0-9+\-*/().\s]+$/.test(expression)) {
        await conn.sendMessage(m.chat, {
      text: "Invalid expression. Only numbers and +, -, *, /, ( ) are allowed.",
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

        // Evaluate the mathematical expression
        let result;
        try {
            result = eval(expression);
        } catch (e) {
        await conn.sendMessage(m.chat, {
      text: "Error in calculation. Please check your expression.",
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

        // Reply with the result
    await conn.sendMessage(m.chat, {
      text: ` Result of "${expression}" is: ${result}`,
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
    } catch (e) {
        console.error(e);
        reply("❎ An error occurred while processing your request.");
    }
});
