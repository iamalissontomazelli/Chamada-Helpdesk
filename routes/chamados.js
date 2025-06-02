const express = require('express');
const router = express.Router();
const Chamado = require('../models/Chamado');

// Rota de teste
router.get('/', async (req, res) => {
    const chamado = await Chamado.find();
    res.json(chamados);
});

module.exports = router;
