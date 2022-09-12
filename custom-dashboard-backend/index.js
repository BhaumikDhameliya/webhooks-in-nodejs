require('dotenv').config();
const express = require('express');
const authMiddleware = require('./middleware/authMiddleware');
const app = express();
app.use(express.json());

const messages = [];


app.post('/git-info', authMiddleware, (req, res) => {
    const data = req.body;
    messages.push(data);
    res.sendStatus(200);
});

app.get('/', (req, res) => {
    return res.json(messages);
});

const PORT = process.env.PORT || 5601;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
