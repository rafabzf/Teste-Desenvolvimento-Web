const express = require('express');
const app = express();

app.use(express.json());
const port = 3001;

app.post('/primos', (req, res) => {
    const { number } = req.body;
    const primeNumbers = calculatePrimeNumbers(parseInt(number));
    res.json({ result: primeNumbers.length });
});

const calculatePrimeNumbers = (number) => {
    const numList = [];
    for (let index = 2; index < number; index++) {
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