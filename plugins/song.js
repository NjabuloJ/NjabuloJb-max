const config = require('../config');
const { cmd } = require('../command');
const { ytsearch } = require('@dark-yasiya/yt-dl.js');


cmd({ 
    pattern: "songi", 
    alias: ["plays", "mp3s"], 
    react: "🎶", 
    desc: "Download YouTube song", 
    category: "main", 
    use: '.song <query>', 
    filename: __filename 
}, async (conn, mek, m, { from, sender, reply, q }) => { 
    try {
        if (!q) return reply("Please provide a song name or YouTube link.");

        const yt = await ytsearch(q);
        if (!yt.results.length) return reply("No results found!");
        
        const song = yt.results[0];
        const apiUrl = `https://apis.davidcyriltech.my.id/youtube/mp3?url=${encodeURIComponent(song.url)}`;
        
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (!data?.result?.downloadUrl) return reply("Download failed. Try again later.");
            
        let info = `
╭━━━━━━━━━━━━━━━━⊷
┊ ┏────────────⊷
┊ ┊▢ᴛɪᴛʟᴇ : * ${song.title}.mp3*
┊ ┊▢ᴛɪᴍᴇ: 
┊ ┊▢ ᴠɪᴇᴡs : 
┊ ┗────────────⊷
┊ ┏─────────⊷
┊ 【①】• *ᴀᴜᴅɪᴏ*
┊ 【②】• *ᴅᴏᴄᴜᴍᴇɴᴛ*
┊ 【③】• *ᴀᴜᴅɪᴏ ᴀɴᴅ ᴅᴏᴄᴜᴍᴇɴᴛ*
┊ 【④】• *ʟʏʀɪᴄs* 
┊ ┗─────────⊷
╰┬━━━━━━━━━━━━⊷⳹
┌┤ *ʀᴇᴘʟʏ ɴᴜᴍʙᴇʀ ᴄᴏᴍᴍᴀɴᴅs 1ᴛᴏ4*
┊╰─────────────⊷
*╰━━━━━━━━━━━━━━━━⊷*`;

        await conn.sendMessage(from, { 
            image: { url: song.thumbnail.replace('default.jpg', 'hqdefault.jpg')},
            caption: info
           }, { quoted: mek });
    
      await conn.sendMessage(from, {
    audio: { url: data.result.downloadUrl },
    mimetype: "audio/mpeg",
    fileName: `${song.title}.mp3`,
    contextInfo: {
        externalAdReply: {
            title: song.title.length > 25 ? `${song.title.substring(0, 22)}...` : song.title,
            body: "Follow our WhatsApp Channel",
            mediaType: 1,
            thumbnailUrl: song.thumbnail.replace('default.jpg', 'hqdefault.jpg'),
            sourceUrl: 'https://whatsapp.com/channel/0029VbAhCy8EquiTSb5pMS3t',
            mediaUrl: 'https://whatsapp.com/channel/0029VbAhCy8EquiTSb5pMS3t',
            showAdAttribution: true,
            renderLargerThumbnail: true
        }
    }
}, { quoted: mek });

    } catch (error) {
        console.error(error);
        reply("An error occurred. Please try again.");
    }
});
          
