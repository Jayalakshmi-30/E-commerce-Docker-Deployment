const express = require('express');
const router = express.Router();

// Product routes
router.get('/', (req, res) => {
    res.json({ message: 'Product routes working!' });
});

module.exports = router;
