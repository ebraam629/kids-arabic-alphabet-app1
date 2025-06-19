const Letter = require('../models/letterArModel');

exports.getAllLetters = async (req, res) => {
  try {
    const letters = await Letter.find();
    res.json(letters);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getLetterById = async (req, res) => {
  try {
    const letter = await Letter.findById(req.params.id);
    if (!letter) return res.status(404).json({ message: 'الحرف غير موجود' });
    res.json(letter);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createLetter = async (req, res) => {
  const newLetter = new Letter(req.body);
  try {
    const savedLetter = await newLetter.save();
    res.status(201).json(savedLetter);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateLetter = async (req, res) => {
  try {
    const updated = await Letter.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'الحرف غير موجود' });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deleteLetter = async (req, res) => {
  try {
    const deleted = await Letter.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'الحرف غير موجود' });
    res.json({ message: 'تم الحذف بنجاح' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
