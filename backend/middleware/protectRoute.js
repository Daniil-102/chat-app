import jwt from 'jsonwebtoken'
import User from '../models/user.model.js'

const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt

        if (!token) {
            return res.status(401).json({error: 'Unautorized'})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (!decoded) {
            return res.status(401).json({error: 'Unautorized - Invalid Token'})
        }

        const user = await User.findById(decoded.userId).select('-password')

        req.user = user

        next()
    } catch (err) {
        res.status(500).json({error: 'Internal server error'})
    }
}

export default protectRoute