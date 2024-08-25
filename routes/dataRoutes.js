const express = require('express');
const router = express.Router();
const { processData, getOperationCode } = require('../controllers/dataController');

router.post('/', processData);
router.get('/', getOperationCode);

module.exports = router;
