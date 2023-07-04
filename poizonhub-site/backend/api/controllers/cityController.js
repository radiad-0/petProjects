import {db} from "../../db.js";

export const cityController = {
    getCities: async function(request, response) {
        try {
            const cities = await db.query('SELECT * FROM cities')
            response.json(cities.rows)
        } catch (error) {
            console.error(error)
            response.status(500).json({message: "Internal Server Error"})
        }
    }
}
