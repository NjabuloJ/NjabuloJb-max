const { cmd } = require("../command");
const axios = require("axios");
const config = require('../config');


cmd({
    pattern: "imgi",
    alias: ["imagei", "googleimagei", "seiarchimg"],
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

        let currentImage = 0;

        const sendImage = async () => {
            const imageUrl = selectedImages[currentImage];
            let buttons = [
                {
                    "buttonId": "prev_image",
                    "buttonText": {
                        "displayText": "Previous"
                    },
                    "type": 1
                },
                {
                    "buttonId": "next_image",
                    "buttonText": {
                        "displayText": "Next"
                    },
                    "type": 1
                },
                {
                    "buttonId": "more_images",
                    "buttonText": {
                        "displayText": "More Images"
                    },
                    "type": 1
                }
            ];

            let buttonMessage = {
                image: { url: imageUrl },
                caption: `📷 Result for: ${query} (${currentImage + 1}/${selectedImages.length})\n> Powered by ʜᴜɴᴛᴇʀ xᴍᴅ`,
                footer: 'Image Search',
                buttons: buttons,
                headerType: 4
            };

            await conn.sendMessage(from, buttonMessage, { quoted: mek });
        };

        await sendImage();

        // Store the image data for button clicks
        conn.imageData = conn.imageData || {};
        conn.imageData[from] = {
            query,
            selectedImages,
            currentImage,
            sendImage
        };
    } catch (error) {
        console.error('Image Search Error:', error);
        reply(`❌ Error: ${error.message || "Failed to fetch images"}`);
    }
});

// Handle button clicks
cmd({
    pattern: "(prev_image|next_image|more_images)",
    alias: [],
    react: "",
    desc: "Handle image search button clicks",
    category: "fun",
    filename: __filename
}, async (conn, mek, m, { reply, args, from, command }) => {
    if (!conn.imageData || !conn.imageData[from]) return;

    const { query, selectedImages, currentImage, sendImage } = conn.imageData[from];

    switch (command) {
        case "prev_image":
            if (currentImage > 0) {
                conn.imageData[from].currentImage--;
                await sendImage();
            } else {
                reply("You're already at the first image.");
            }
            break;
        case "next_image":
            if (currentImage < selectedImages.length - 1) {
                conn.imageData[from].currentImage++;
                await sendImage();
            } else {
                reply("You're already at the last image.");
            }
            break;
        case "more_images":
            // Logic for more images
            reply("More images button clicked!");
            break;
    }
});
