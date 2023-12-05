import api from "./main";

export async function createPost(text: string, location: string, image: string, authorId: string) {
    try {
        const response = await api.post("/posts", {
            text: text,
            location: location,
            image: image,
            authorId: authorId
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function getAllPosts() {
    try {
        const response = await api.get("/posts");
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function deletePost({id} : {id: string}) {
    try {
        const response = await api.delete("/posts/" + id);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function updatePost({id, text, location, image} : {id: string, text: string, location: string, image: string}) {
    try {
        const response = await api.put("/posts/" + id, {
            text: text,
            location: location,
            image: image
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function likePost(id: string, authorId: string) {
    try {
        const response = await api.post("/posts/like/" + id, {
            authorId: authorId
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}



export async function getPosts() {
    try {
        const response = await fetch(`https://social-compass-server.onrender.com/posts`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDE3NzE3OTEsInN1YiI6IjU2N2FlMGYzLTk5MWUtNDhiNS1hYTRkLTkwMzdlMTQ4ZTczNiJ9.FUaKwdbdvhO5Mg2PA1p6MV4LRbwKEJviyNKtmpSrLQY'
            },
        });

        return await response.json();
    } catch (e: any) {
        throw new Error(e.statusText);
    }
}
