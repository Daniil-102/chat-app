import User from '../models/user.model.js'

export const getUsersForSidebar = async (req, res) => {
    try {
        const me = req.user._id

        const usersWithoutMe = await User.find({_id: { $ne: me}}).select('-password')

        res.status(200).json(usersWithoutMe)

    } catch (err) {
        console.log(err.message)
        res.status(500).json({error: 'Internal server error'})
    }
}