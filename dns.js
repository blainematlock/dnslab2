var dns = require("dns");

dns.resolveMx('matlock.email', function (err,exchange) {
    if (err){
        console.log(err.stack);
        return;
    }
    console.log(exchange);
});
console.log("program ended");