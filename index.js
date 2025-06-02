// Constantes iniciais 
const express = require('express');
const mongoose = require('mongoose'); 
const chamadosRoutes = require('./routes/chamados'); 

const app = express(); 
const PORT = 3000; 

app.use(express.json()); 
app.use('/chamados', chamadosRoutes); 

// Conexão com MongoDB 
mongoose.connect('mongodb://localhost:27017/helpdesk',{
useNewUrlParser: true,
useUnifiedTopology: true,
}).then(() => {
    console.log('Conectado ao MongoDB'); 
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
}).catch(err => console.log('Erro na conexão', err)); 

