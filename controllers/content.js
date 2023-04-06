const db = require('../models');
const Content = db.contents;

exports.create = async (req, res) => {
    try {
        const data = await Content.create(req.body)
        res.json({
            message: "content creates sucessfully",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}

exports.getAll = async (req, res) => {
    try {
        const content = await Content.findAll()

        res.json({
            message: "Content retrieved successfully",
            data: content
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        });
    }
}

exports.update = async (req, res) => {
    const id = req.params.id
    try {
        const content = await Content.findByPk(id, { rejectOnEmpty: true })
        content.update(req.body, {
            where: { id }
        })
        res.json({
            message: "Content updated successfully.",
            data: content,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz.",
            data: null,
        });
    }
}

exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const content = await Content.findByPk(id, { rejectOnEmpty: true })

        content.destroy()

        res.json({
            message: `Content deleted successfully`,
            data: content
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occured while retrieving quiz",
            data: null
        });
    }
}

exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const content = await Content.findByPk(id, { rejectOnEmpty: true })
        res.json({
            message: `Content retrieved successfully with id=${id}`,
            data: content
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
            data: null
        });
    }
}