import { db } from '../../db/mongo';
import bcrypt from 'bcryptjs';
import { User } from '../../db/UserSchema'
import { isLoggedIn } from '$lib/stores/UserStore';

export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData()
        const user = await db
            .collection("Sample")
            .findOne({ email: data.get('email') });
        if (!user) {
            return {
                success: false
            };
        } else if (!(await bcrypt.compare(data.get('password'), user.password))) {
            return {
                success: false
            };
        } else {
            cookies.set('sessionId', user._id)
            return {
                success: true,
            };
        }
    },
    register: async ({ request, cookies }) => {
        const data = await request.formData()
        const user = await db
            .collection("Sample")
            .findOne({ email: data.get('email') });
        if (user) {
            return {
                success: false,
            };
        }
        const newUser = new User({
            username: data.get('username'),
            email: data.get('email'),
            password: await bcrypt.hash(data.get('password'), 10)
        });
        await db.collection("Sample").insertOne(newUser);
        cookies.set('sessionId', newUser._id)
        return {
            success: true
        };
    },
    logout: async ({ cookies }) => {
        cookies.delete('sessionId');
        return {
            success: true
        }
    }
};