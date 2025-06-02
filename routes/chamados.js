const express = require('express');
const router = express.Router();
const Chamado = require('../models/Chamado');

// Rota de teste para listar todos os chamados
router.get('/', async (req, res) => {
    try {
        const chamados = await Chamado.find();
        res.json(chamados);
    } catch (err) {
        console.error('Erro ao buscar chamados:', err);
        res.status(500).json({ error: 'Erro ao buscar chamados' });
    }
});

module.exports = router;

// Criar um novo chamado
router.post('/', async (req, res) => {
    try {
        const novoChamado = new Chamado({
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            responsavel: req.body.responsavel,
            status: req.body.status || 'aberto'
        });

        const chamadoSalvo = await novoChamado.save();
        res.status(201).json(chamadoSalvo);
    } catch (err) {
        console.error('Erro ao criar chamado:', err);
        res.status(500).json({ error: 'Erro ao criar chamado' });
    }
});

// Atualizar um chamado por ID
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id;

        const chamadoAtualizado = await Chamado.findByIdAndUpdate(
            id,
            req.body,
            { new: true } // Retorna o documento atualizado
        );

        if (!chamadoAtualizado) {
            return res.status(404).json({ error: 'Chamado não encontrado' });
        }

        res.json(chamadoAtualizado);
    } catch (err) {
        console.error('Erro ao atualizar chamado:', err);
        res.status(500).json({ error: 'Erro ao atualizar chamado' });
    }
});




