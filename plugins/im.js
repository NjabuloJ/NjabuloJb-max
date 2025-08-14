const { cmd } = require("../command");
const axios = require("axios");

cmd({
    pattern: "imgi",
    alias: ["imagei", "googleimagei", "searchimgi"],
    react: "🦋",
    desc: "Search and download Google images",
    category: "fun",
    use: ".img <keywords>",
    filename: __filename
}, async (conn, mek, m, { reply, args, from }) => {
    try {
        const query = args.join(" ");
        if (!query) {
            return reply("🖼️ Please provide a search query\nExample: .img cute cats");
        }

        await reply(`🔍 Searching images for "${query}"...`);

        const url = `https://apis.davidcyriltech.my.id/googleimage?query=${encodeURIComponent(query)}`;
        const response = await axios.get(url);

        // Validate response
        if (!response.data?.success || !response.data.results?.length) {
            return reply("❌ No images found. Try different keywords");
        }

        const results = response.data.results;
        // Get 5 random images
        const selectedImages = results
            .sort(() => 0.5 - Math.random())
            .slice(0, 5);

        for (const imageUrl of selectedImages) {
            const buttons = [
                { buttonId: `img_${query}_next`, buttonText: { displayText: 'Next Image' }, type: 1 },
                { buttonId: `img_${query}_prev`, buttonText: { displayText: 'Previous Image' }, type: 1 },
                { buttonId: `img_${query}_more`, buttonText: { displayText: 'More Images' }, type: 1 }
            ];

            const buttonMessage = {
                image: { url: imageUrl },
                caption: `📷 Result for: ${query}\n> Powered by ʜᴜɴᴛᴇʀ xᴍᴅ`,
                footer: 'Image Search',
                buttons: buttons,
                headerType: 4
            };

            await conn.sendMessage(from, buttonMessage, { quoted: mek });
            // Add delay between sends to avoid rate limiting
            await new Promise(resolve => setTimeout(resolve, 1000));
        }

    } catch (error) {
        console.error('Image Search Error:', error);
        reply(`❌ Error: ${error.message || "Failed to fetch images"}`);
    }
});
