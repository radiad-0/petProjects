import {db} from "../../db.js";

export const colorController = {
    getColors: async function(request, response) {
        try {
            const colors = await db.query('SELECT * FROM colors')
            response.json(colors.rows)
        } catch (error) {
            console.error(error)
            response.status(500).json({message: "Internal Server Error"})
        }
    }
}