const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/add', (req, res) => {
    const { a, b } = req.query;
    if (!a || !b || isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid input' });
    }
    const sum = parseFloat(a) + parseFloat(b);
    res.json({ result: sum });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
}

module.exports = app; // Exporte o app para testes
