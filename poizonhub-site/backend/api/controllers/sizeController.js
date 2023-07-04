import {db} from "../../db.js";

export const sizeController = {
    getSizes: async function(request, response) {
        try {
            const sizes = await db.query('SELECT * FROM sizes')
            response.json(sizes.rows)
        } catch (error) {
            console.error(error)
            response.status(500).json({message: "Internal Server Error"})
        }
    }
}