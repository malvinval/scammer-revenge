const fs = require('fs');
const axios = require('axios');
async function sendMessages(urls, customText) {
  try {
    console.log(`Sending: "${customText}"`);
    const requests = urls.map((url, index) =>
      axios
        .get(`${url}${encodeURIComponent(customText)}`)
        .then((response) => {
          if (response.status === 200) {
            return `Link ${index + 1}: OK`;
          } else {
            return `Link ${index + 1}: Unexpected status code: ${response.status}`;
          }
        })
        .catch((error) => {
          return `Link ${index + 1}: API down! ${error.message}`;
        })
    );

    const results = await Promise.allSettled(requests);
    results.forEach((result) => {
      console.log(result.value);
    });

    console.log('='.repeat(30));
  } catch (error) {
    console.error('Error:', error.message);
  }
}

async function main() {
  try {
    while (true) {
      const urls = fs
        .readFileSync('urls.txt', 'utf8')
        .trim()
        .split('\n');
      const customText = 'Bismillah Mati'; //ADD YOUR CUSTOM TEXT HERE
      await sendMessages(urls, customText);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

main();