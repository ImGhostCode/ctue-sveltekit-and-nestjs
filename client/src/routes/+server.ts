import { json, redirect } from "@sveltejs/kit";

export function GET(event) {
    try {
        event.cookies.delete('accessToken');
        return json({ status: 200 })
    } catch (error) {
        throw error
    }
}