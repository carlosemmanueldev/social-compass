import api from "./main";

export async function createComment(content: string, authorId: string, postId: string) {
    try {
        const response = await api.post("/comments", {
            content: content,
            authorId: authorId,
            postId: postId,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function updateComment({id, content} : {id: string, content: string}) {
    try {
        const response = await api.put("/comments/" + id, {
            content: content
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

export async function deleteComment({id} : {id: string}) {
    try {
        const response = await api.delete("/comments/" + id);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}