import { db } from "../db/mongo";
import { ObjectId } from "mongodb";

export async function load({ cookies }) {
    if (!cookies.get('sessionId')) {
        return
    }

    const userEmail = new ObjectId(cookies.get('sessionId'))
    const user = await db.collection("Sample").findOne({ _id: userEmail })
    if (user !== null) {
        const userDetails = JSON.stringify(user)
        return {
            userDetails
        };
    }
    else {
        return { success: false }
    }
}