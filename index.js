 var XMLHttpRequest = require('xhr2');

token = "hi"
const request = new XMLHttpRequest();
      request.open("POST", process.env.webhookurl);

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: "DiscordWebhook1",
        avatar_url: "",
        content: token
      }

      request.send(JSON.stringify(params));
