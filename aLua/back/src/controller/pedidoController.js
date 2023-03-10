const con = require('../dao/lanche.js');
const pedi = require('../model/pedidoModel.js');

const listarAll = (req, res) => {
    con.query(pedi.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const criarPedido = (req, res) => {
    con.query(pedi.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    listarAll,
    criarPedido
}