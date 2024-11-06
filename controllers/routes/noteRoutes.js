// routes/noteRoutes.js
const express = require('express');
const router = express.Router();
const noteController = require('../controllers/noteController');

// Define route handlers
router.get('/', noteController.getAllNotes);   // Get all notes
router.post('/', noteController.createNote);   // Create a new note
router.put('/:id', noteController.updateNote); // Update an existing note by ID
router.delete('/:id', noteController.deleteNote); // Delete a note by ID

module.exports = router;
