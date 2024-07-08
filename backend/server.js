const express = require('express');
const { sequelize } = require('./models');

const app = express();
const port = 4000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

sequelize.authenticate()
.then(() => {
    console.log('Conexão com o banco de dados foi bem-sucedida.');
    return sequelize.sync(); // Sincroniza os modelos com o banco de dados
})
.then(() => {
    console.log('Modelos sincronizados com o banco de dados.');
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
})
.catch(err => {
    console.error('Não foi possível conectar ao banco de dados:', err);
});
