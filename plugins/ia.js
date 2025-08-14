const { cmd } = require("../command");
const axios = require("axios");

cmd({
  pattern: "imgs",
  alias: ["images", "googleimages", "searchimgs"],
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
      const buttonMessage = {
        image: { url: imageUrl },
        caption: `📷 Result for: ${query}\n> Powered by ʜᴜɴᴛᴇʀ xᴍᴅ`,
        footer: 'Search results',
        buttons: [
          {
            buttonId: `more_images_${query}`,
            buttonText: { displayText: 'More Images' },
            type: 1
          },
          {
            buttonId: 'new_search',
            buttonText: { displayText: 'New Search' },
            type: 1
          }
        ],
        headerType: 4
      };

      await conn.sendMessage(from, buttonMessage, { quoted: mek });
      // Add delay between sends to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 1000));
    }

    // Handle button interactions
    conn.on('message', async (m) => {
      if (m.type === 'buttonresponse' && m.message.buttonsResponseMessage) {
        const buttonId = m.message.buttonsResponseMessage.selectedButtonId;
        if (buttonId.startsWith('more_images_')) {
          const query = buttonId.split('_').slice(1).join('_');
          await reply(`🔍 Searching more images for "${query}"...`);
          const url = `https://apis.davidcyriltech.my.id/googleimage?query=${encodeURIComponent(query)}`;
          const response = await axios.get(url);
          const results = response.data.results;
          const selectedImages = results
            .sort(() => 0.5 - Math.random())
            .slice(0, 5);
          for (const imageUrl of selectedImages) {
            const buttonMessage = {
              image: { url: imageUrl },
              caption: `📷 More results for: ${query}\n> Powered by ʜᴜɴᴛᴇʀ xᴍᴅ`,
              footer: 'Search results',
              buttons: [
                {
                  buttonId: `more_images_${query}`,
                  buttonText: { displayText: 'More Images' },
                  type: 1
                },
                {
                  buttonId: 'new_search',
                  buttonText: { displayText: 'New Search' },
                  type: 1
                }
              ],
              headerType: 4
            };
            await conn.sendMessage(from, buttonMessage, { quoted: m });
            await new Promise(resolve => setTimeout(resolve, 1000));
          }
        } else if (buttonId === 'new_search') {
          reply('Enter your new search query:');
          // You might want to implement a state machine or a separate command handler for this
          // For simplicity, let's assume the next message will be the new query
          conn.once('message', async (newMek) => {
            const newQuery = newMek.message.conversation;
            // Call the img command handler again with the new query
            // This part depends on your command handler structure
          });
        }
      }
    });
  } catch (error) {
    console.error('Image Search Error:', error);
    reply(`❌ Error: ${error.message || "Failed to fetch images"}`);
  }
});
