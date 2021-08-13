const imageProvider = require("./providers/imageProvider");

//log image bytes
new imageProvider(".jpg", "ass", "none", 1).fetchByteArray().then(console.log);


