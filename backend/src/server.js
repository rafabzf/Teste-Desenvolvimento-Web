const express = require('express');
const app = express();

app.use(express.json());
const port = 3000;

app.post('/primos', (req, res) => {
    const { number } = req.body;
    const primeNumbers = calculatePrimeNumber(parseInt(number));
    res.json({resultado: primeNumbers.length});
});

const calculatePrimeNumber = (number) => {
    const numList = [];
    for (let index = 2; i < number; index++) {
        if (isPrimeNumber(index)) {
            numList.push(index);
        }
    }
    return numList;
};

const isPrimeNumber = (num) => {
    if (num <= 1) {
        return false;
    }
    for (let index = 2; index < num; index++) {
        if (num % index === 0) {
            return false;
        }
    }
    return true;
};

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});