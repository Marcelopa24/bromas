const express = require("express");
const app = express();

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

const misrutas = require("./routes/chiste.routes");
misrutas(app);

app.listen(8000, ()=>console.log("server run"))