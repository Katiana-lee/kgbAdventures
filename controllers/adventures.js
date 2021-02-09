const Adventure = require('../models/adventure')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const getAdventures = async (req, res) => {
    try {
        const adventures = await Adventure.find()
        res.json(adventures)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getAdventure = async (req, res) => {
    try {
        const { id } = req.params
        const adventure = await Adventure.findById(id)
        if (adventure) {
            return res.json(adventure)
        }
        res.status(404).json({ message: 'Adventure not found!' })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const createAdventure = async (req, res) => {
    try {
        const adventure = await new Adventure(req.body)
        await adventure.save()
        res.status(201).json(adventure)
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
    }
}

const updateAdventure = async (req, res) => {
    const { id } = req.params
    await Adventure.findByIdAndUpdate(id, req.body, { new: true }, (error, adventure) => {
        if (error) {
            return res.status(500).json({ error: error.message })
        }
        if (!adventure) {
            return res.status(404).json({ message: 'Adventure not found!' })
        }
        res.status(200).json(adventure)
    })
}

const deleteAdventure = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Adventure.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Adventure deleted")
        }
        throw new Error("Adventure not found")
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = {
    createAdventure,
    getAdventures,
    getAdventure,
    updateAdventure,
    deleteAdventure
}
