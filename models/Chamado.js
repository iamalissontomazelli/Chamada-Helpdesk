const mongoose = require('mongoose');

const ChamadoSchema = new mongoose.Schema({
    titulo: String,
    descricao: String,
    status: { type: String, default: 'aberto' },
    dataCriacao: { type: Date, default: Date.now },
    responsavel: String
});

module.exports = mongoose.model('Chamado', ChamadoSchema);
