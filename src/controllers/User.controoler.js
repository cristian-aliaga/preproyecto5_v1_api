const bcrypt = require('bcrypt')
const User = require('../models/User.model')

const signUp = async (req, res) => {
    try {
        const { mail, password } = req.body
        const existingUser = await User.findOne({ mail })
        if (existingUser) {
            return res.json({
                message: "El usuario ya existe"
            })
        }
        const user = new User(req.body)
        user.hashPassword(password)
        const resp = await user.save()
        return res.json({
            message: "Usuario creado exitosamente",
            detail: user.onSignUpGenerateJWT()
        })
    } catch (error) {
        return res.json({
            message: 'error',
            detail: error.message
        })
    }
}

const loginUser = async (req, res) => {
    try {
        const { mail, password } = req.body
        const userFound = await User.findOne({ mail })
        if (!userFound) {
            return res.json({
                message: "Usuario no encontrado",
            })
        }
        const isCorrectPassword = await bcrypt.compareSync(password, userFound.password)
        if (!isCorrectPassword) {
            return res.json({
                message: "Error en Password",
            })
        }
        return res.json({
            message: "Password OK",
            detail: { user: userFound, token: userFound.generateJWT() }
        })
    } catch (error) {
        return res.json({
            message: "Error Password",
            detail: error.message
        })
    }
}

const getUsers = async (req, res) => {
    try {
        const resp = await User.find()
        return res.json({
            message: "Usuario:",
            detail: resp
        })
    } catch (error) {
        return res.json({
            message: 'error',
            detail: error.message
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const newData = req.body
        const resp = await User.findByIdAndUpdate(
            newData.userId,
            { $set: newData },
            { new: true }
        )
        return res.json({
            message: 'Usuarios actualizado extirosamente',
            detail: resp
        })
    } catch (error) {
        return res.json({
            message: 'error',
            detail: error.message
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const resp = await User.findByIdAndDelete(req.body.userId)
        return res.json({
            message: 'Usuarios Eliminado',
            detail: resp
        })
    } catch (error) {
        return res.json({
            message: 'error',
            detail: error.message
        })
    }
}

module.exports = { signUp, getUsers, updateUser, deleteUser, loginUser }