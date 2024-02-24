const {default: axios} = require("axios")

const url = "https://api.telegram.org/bot6861974788:AAH_AbVplVpEG3XTRhVIgbMVqIeT-_y7vPQ/sendMessage?parse_mode=markdown&chat_id=6951548817&text=test"

async function sendMessage() {
    try {
        while (true) {
            await axios.get(url)
                .then((response) => {
                    if (response.status == 200) {
                        console.log(response)
                    }
                })
        }
    } catch (error) {
        console.log("API down!")
        sendMessage();
    }
}

sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();
sendMessage();