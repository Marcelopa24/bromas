const mongoose = require("mongoose");

const EsquemaChiste = new mongoose.Schema({
    setup: String,
    punchline: String
}, {timestamps: true, versionKey: false})

const Chiste = mongoose.model("chistes", EsquemaChiste);

module.exports = Chiste;