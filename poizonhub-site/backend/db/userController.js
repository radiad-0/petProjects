import {User} from "./models/User.js";

export const userController = {
    createUser: async function(user) {
        try {
            if (user.chat_id === undefined) {
                console.error("The required parameter 'chat_id' is missing")
            } else {
                const newUser = await User.create(user)
                return newUser.dataValues
            }
        } catch (error) {
            console.error(error.message)
        }
    },

    getUsers: async function() {
        const userList = []
        try {
            const users = await User.findAll()
            users.forEach(user => userList.push(user.dataValues))
        } catch (error) {
            console.error(error)
        }
        return userList
    }
}