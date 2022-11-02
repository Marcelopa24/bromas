const { count } = require("../models/user.model");
const Chiste = require("../models/user.model");

module.exports.muestraChistes = (req, res) => {
    Chiste.find()
    .then(todosChistes => res.json({chistes: todosChistes}))
    .catch(err => res.json({message: "Algo no esta bien", error: err}))
};

module.exports.muestraUnChiste = (req, res) => {
    Chiste.findOne({_id: req.params.id})
    .then(unChiste => res.json({chiste: unChiste}))
    .catch(err => res.json({message: "Algo no esta bien", error: err}))
};

module.exports.randomChiste = (req, res) => {
    Chiste.aggregate([{ $sample: { size: 1 } }])
        .then((randonchiste) => res.json({ chiste: randonchiste }))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
}

module.exports.creaUnChiste = (req, res) => {
    Chiste.create(req.body)
    .then(nuevoChiste => res.json({chiste: nuevoChiste}))
    .catch(err => res.json({message: "Algo no esta bien", error: err}))
};

module.exports.actualizaChiste = (req, res) => {
    Chiste.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then(chisteActualizado => res.json({chiste: chisteActualizado}))
    .catch(err => res.json({message: "Algo no esta bien", error: err}))
};

module.exports.borraChiste = (req, res) => {
    Chiste.deleteOne({_id: req.params.id})
    .then(result => res.json({result: result}))
    .catch(err => res.json({message: "Algo no esta bien", error: err}))
};
