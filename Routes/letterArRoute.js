const express = require('express');
const router = express.Router();
const letterController = require('../controllers/letterArController');

router.get('/', letterController.getAllLetters);
router.get('/:id', letterController.getLetterById);
router.post('/', letterController.createLetter);
router.put('/:id', letterController.updateLetter);
router.delete('/:id', letterController.deleteLetter);

module.exports = router;
