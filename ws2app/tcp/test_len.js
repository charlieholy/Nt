var as =
{"cmd":"chart",
    "symbol":"BTC_USDT",
    "period":1,              // 1 5 60 ...分别代表多少分种间隔的k线
    "bar":30
}
var sas = JSON.stringify(as)
console.log("sas: " + sas)
console.log("as len: " + sas.length)