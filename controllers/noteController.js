// controllers/noteController.js
const Note = require('../models/note');

const getAllNotes = async (req, res) => {
    try {
        const notes = await Note.findAll();
        res.json(notes);
    } catch (error) {
        console.error('Error retrieving notes:', error);
        res.status(500).json({ error: 'Error retrieving notes' });
    }
};

const createNote = async (req, res) => {
    const { title, content } = req.body;
    
    try {
        const newNote = await Note.create({ title, content });
        res.status(201).json(newNote);
    } catch (error) {
        console.error('Error creating note:', error);
        res.status(400).json({ error: error.message || 'Error creating note' });
    }
};

const updateNote = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const note = await Note.findByPk(id);
        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }
        
        if (title !== undefined) note.title = title;
        if (content !== undefined) note.content = content;

        await note.save();
        res.json(note);
    } catch (error) {
        console.error('Error updating note:', error);
        res.status(400).json({ error: error.message || 'Error updating note' });
    }
};

const deleteNote = async (req, res) => {
    const { id } = req.params;

    try {
        const note = await Note.findByPk(id);
        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }
        
        await note.destroy();
        res.status(204).end();
    } catch (error) {
        console.error('Error deleting note:', error);
        res.status(500).json({ error: 'Error deleting note' });
    }
};

module.exports = {
    getAllNotes,
    createNote,
    updateNote,
    deleteNote,
};