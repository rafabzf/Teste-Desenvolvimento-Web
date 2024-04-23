const express = require('express');
const app = express();

app.use(express.json());
const port = 3000;

app.post('/primos', (req, res) => {
    //função primos

    res.json({resultado});
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});