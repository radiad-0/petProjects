import {db} from "../../db.js";

export const regionController = {
    getRegions: async function(request, response) {
        try {
            const regions = await db.query('SELECT * FROM regions')
            response.json(regions.rows)
        } catch (error) {
            console.error(error)
            response.status(500).json({message: "Internal Server Error"})
        }
    }
}