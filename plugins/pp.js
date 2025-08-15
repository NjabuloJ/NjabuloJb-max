const axios = require('axios');
const { cmd } = require('../command');

cmd({
    pattern: "movie",
    desc: "Fetch detailed information about a movie.",
    category: "utility",
    react: "🎬",
    filename: __filename
},
async (conn, mek, m, { from, reply, sender, args }) => {
    try {
        const movieName = args.length > 0 ? args.join(' ') : m.text.replace(/^[\.\#\$\!]?movie\s?/i, '').trim();
        
        if (!movieName) {
            return reply("📽️ Please provide the name of the movie.\nExample: .movie Iron Man");
        }

        const apiUrl = `https://apis.davidcyriltech.my.id/imdb?query=${encodeURIComponent(movieName)}`;
        const response = await axios.get(apiUrl);

        if (response.status !== 200 || !response.data || !response.data.movie) {
            return reply("🚫 Movie not found or API error. Please check the name and try again.");
        }

        const movie = response.data.movie;
        
        const dec = `
🎬 *${movie.title}* (${movie.year}) ${movie.rated || ''}

⭐ *IMDb:* ${movie.imdbRating || 'N/A'} | 🍅 *Rotten Tomatoes:* ${movie.ratings && movie.ratings.find(r => r.source === 'Rotten Tomatoes')?.value || 'N/A'} | 💰 *Box Office:* ${movie.boxoffice || 'N/A'}

📅 *Released:* ${new Date(movie.released).toLocaleDateString()}
⏳ *Runtime:* ${movie.runtime}
🎭 *Genre:* ${movie.genres}

📝 *Plot:* ${movie.plot}

🎥 *Director:* ${movie.director}
✍️ *Writer:* ${movie.writer}
🌟 *Actors:* ${movie.actors}

🌍 *Country:* ${movie.country}
🗣️ *Language:* ${movie.languages}
🏆 *Awards:* ${movie.awards || 'None'}
`;

        await conn.sendMessage(
            from,
            {
                document: { url: "https://example.com" }, 
                mimetype: "text/plain",
                fileName: `${movie.title}.txt`,
                caption: "Movie Details",
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363417599637828@newsletter',
                        newsletterName: 'CRISS AI',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        await conn.sendMessage(from, { text: dec });

    } catch (e) {
        console.error('Movie command error:', e);
        reply(`❌ Error: ${e.message}`);
    }
});
