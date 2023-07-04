import {db} from "../../db.js";

export const userController = {
    createUser: async function(request, response) {
        try {
            const {name, surname, phone, email, telegram, birthdate, gender} = request.body
            const newUser = await db.query(
                'INSERT INTO users (name, surname, phone, email, telegram, birthdate, gender) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
                [name, surname, phone, email, telegram, birthdate, gender]
            )
            response.json(newUser.rows[0])
        } catch (error) {
            console.error(error)
            response.status(500).json({message: "Internal Server Error"})
        }
    },

    getUsers: async function(request, response) {
        try {
            const users = await db.query('SELECT * FROM users')
            response.json(users.rows)
        } catch (error) {
            console.error(error)
            response.status(500).json({message: "Internal Server Error"})
        }
    },

    getUser: async function(request, response) {
        try {
            const id = request.params.id
            const users = await db.query('SELECT * FROM users WHERE id=$1', [id])
            if (users.rowCount === 0) {
                response.status(404).json({message: "User not found"})
            } else {
                response.json(users.rows[0])
            }
        } catch (error) {
            console.error(error)
            response.status(500).json({message: "Internal Server Error"})
        }
    },

    updateUser: async function(request, response) {
        try {
            const {id, name, surname, phone, email, telegram, birthdate, gender} = request.body
            const users = await db.query(
                'UPDATE users SET name=$2, surname=$3, phone=$4, email=$5, telegram=$6, birthdate=$7, gender=$8 WHERE id=$1 RETURNING *',
                [id, name, surname, phone, email, telegram, birthdate, gender]
            )
            if (users.rowCount === 0) {
                response.status(404).json({message: "User not found"})
            } else {
                response.json(users.rows[0])
            }
        } catch (error) {
            console.error(error)
            response.status(500).json({message: "Internal Server Error"})
        }
    },

    deleteUser: async function(request, response) {
        try {
            const id = request.params.id
            const users = await db.query('DELETE FROM users WHERE id=$1 RETURNING *', [id])
            if (users.rowCount === 0) {
                response.status(404).json({message: "User not found"})
            } else {
                response.json(users.rows[0])
            }
        } catch (error) {
            console.error(error)
            response.status(500).json({message: "Internal Server Error"})
        }
    }
}