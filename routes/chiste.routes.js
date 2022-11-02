const ChistesController = require("../controllers/chiste.controller");

module.exports = app => {
    app.get("/api/jokes/", ChistesController.muestraChistes);
    app.get("/api/jokes/random", ChistesController.randomChiste);
    app.get("/api/jokes/:id", ChistesController.muestraUnChiste);
    app.post("/api/jokes/new", ChistesController.creaUnChiste);
    app.put("/api/jokes/update/:id", ChistesController.actualizaChiste);
    app.delete("/api/jokes/delete/:id", ChistesController.borraChiste);
};