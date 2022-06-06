const connection = require('../lib/connection')
const { validatePassword, createToken, createPayload } = require('../service/user')
const bcrypt = require('bcrypt')

const login = async (req, res) => {

    try {
        const { username, password } = req.body
        
        if (!username || !password) {
            return res.status(400).json({ message: "Please complete all field" })
        }

        const [rows, fields] = await connection
            .query('SELECT * FROM user WHERE username = ?',
                [username])

        if (rows.length === 0) {
            return res.status(401).json({ message: "User not found" })
        }
        
        const payload = createPayload(rows[0])
        const token = createToken(payload)
        return res.status(200).json({
            ...payload,
            token
        })
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Something went wrong!" })
    }
}


const register = async (req, res) => {
    try {
        const { name, username, password, confirmPassword } = req.body

        if (!name || !username || !password || !confirmPassword) {
            return res.status(400).json({ message: "Please complete all field" })
        }

        const validatePass = validatePassword(password, confirmPassword)

        if (Object.keys(validatePass).length !== 0) {
            return res.status(401).send(validatePass)
        }

        const [rows, fields] = await connection
            .query('SELECT * FROM user WHERE first_name = ? AND username = ?',
                [name, username])
        
        if (rows.length > 0) {
            return res.status(401).json({ message: "User already exist!" })
        }

        const salt = await bcrypt.genSalt(10)

        const passwordHashed = await bcrypt.hash(password, salt)
        
        const [rows1, fields1] = await connection
            .query("INSERT INTO user (first_name, username, password) VALUES (?,?,?)",
                [name, username, passwordHashed])

        if (rows1.affectedRows > 0) {
            return res.status(201).json({ message: "Registered!" })
        }

        return res.status(400).json({ message: "Error while register" })
    
    } catch (e) {
        console.log(e)
        return res.status(500).json({ message: "Something went wrong!" })
    }
}


module.exports = {
    login,
    register
}