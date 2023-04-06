const db = require('../models');
const Quiz = db.quizzes;

//tambah data
exports.create = async (req, res) => {

    try {
        const data = await Quiz.create(req.body)
        res.json({
            message: "quiz creates sucessfully",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}

//menampilkan data
exports.getAll = async (req, res) => {
    try {
        const quizzes = await Quiz.findAll()

        res.json({
            message: "Quizzes retrieved successfully",
            data: quizzes
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        });
    }
}

//update data
exports.update = async (req, res) => {
    const id = req.params.id
    try {
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
        quiz.update(req.body, {
            where: { id }
        })
        res.json({
            message: "Quizzes updated successfully.",
            data: quiz,
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
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })

        quiz.destroy()

        res.json({
            message: `Quiz deleted successfully`,
            data: quiz
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
        const quiz = await Quiz.findByPk(id, { rejectOnEmpty: true })
        res.json({
            message: `Quizzes retrieved successfully with id=${id}`,
            data: quiz
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
            data: null
        });
    }
}

//menampilkan quiz berdasarkan kategori
exports.getByContentId = async (req, res) => {
    const id = req.params.id
    try {
        const quizzes = await Quiz.findAll({
            where: {
                contentId: id
            }
        })
        res.json({
            message: `Quizzes retrieved successfully with contentId=${id}.`,
            data: quizzes,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occurred while retrieving quiz",
            data: null
        });
    }

}

//menampilkan data quiz berdasarkan level
exports.getByLevelId = async (req, res) => {
    const id = req.params.id
    const quizzes = await Quiz.findAll({
        where: {
            levelId: id
        }
    })
    res.json({
        message: `Quizzes retrieved successfully with levelId=${id}`,
        data: quizzes
    })
}