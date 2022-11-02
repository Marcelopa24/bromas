const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/chistes",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(()=>console.log("MongoDB conect"))
    .catch(err => console.log ("Algo no esta bien", err));