const express = require('express');
const router = express.Router();

// Category routes
router.get('/', (req, res) => {
    res.json({ message: 'Category routes working!' });
});

module.exports = router;
