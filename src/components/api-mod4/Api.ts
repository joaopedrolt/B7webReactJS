import { Posts } from "../../types/Posts";

const BASE = 'https://jsonplaceholder.typicode.com';

export const api = {
    getPosts: async (): Promise<Posts[]> => {
        let response = await fetch(BASE + '/posts');
        return await response.json();
    },
    addNewPosts: async (title: string, body: string, userId: number) => {
        if (title && body) {
            let response = await fetch(BASE + '/posts', {
                method: 'POST',
                body: JSON.stringify({ title, body, userId }),
                headers: { 'Content-Type': 'application/json' }
            })
            return await response.json();
        }
    }
}