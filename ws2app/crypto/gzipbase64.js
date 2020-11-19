let pako = require('pako');

var data = "H4sIAAAAAAAAA1XMsQ7CIBSF4d3HODM2QKUoo/oG1tlcuSQ2ChiLg2n67lI3t3OSL/8Ef6OUwgMOxAwBH7nuMvj7cjIHOCnAVAhuAsX8TgVONZuwlkbg+Rp8JVbprpGtwPiJ17zU9v3hfDr2NVLG6o22ZqvVzrSdnf/Z5efm1RcFWn52jAAAAA==="
data = "H4sIAAAAAAAAA6tWSkosUrIyNjDQUUrOTVGyUkrOSCwqUQLy8lNSlayAwimJJYlKVtHRBnoG5pZGOmDK0NQCwjAygDIMzMx0jMz0LI3MTXQMTY3MzS2MTAwMYmN1lApSizLzgSabGBuBbCmuzE3KzwFa5BriEe8U4qxUywUAs8uPeoUAAAA="
var b64 = new Buffer(data, 'base64')
var json = pako.inflate(new Uint8Array(b64), {to: 'string'});
var sss = decodeURIComponent(json)

console.log("sss: " + sss)