const jwt = require('jsonwebtoken')

const validatePassword = (password, confirmPassword) => {
    let error = {}
    let regexExpression = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})")
    if (password.length < 8) {
        error.passwordLength = "Password must be longer than 7"
    }
    if (password !== confirmPassword) {
        error.passwordMissMatch = "Password must match"
    }
    if (!regexExpression.test(password)) {
        error.passwordStrength = "Password must have numeric, lowercase, uppercase"
    }
    return error
}

const createToken = (payload) => {
    const token = jwt.sign(
        payload,
        "soEpICVeRYsEcurE", // secret key
        {
            expiresIn: 60 * 60 * 24 * 30 // 1 month
        }
    )
    return token
}

const createPayload = (user) => {
    return { 
        name: user.name, 
        id: user.id, 
        username: user.username
    }
}

module.exports = {
    validatePassword,
    createToken,
    createPayload
}