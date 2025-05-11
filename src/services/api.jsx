import axios from 'axios';

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:3000/blog/v1/posts",
    timeout: 3000,
    httpsAgent: false
});

export const getPost = async () => {
    try {
        return await apiClient.get("/");
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getByCourse = async (course) => {
    try {
        return await apiClient.get(`/course/${course}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const getById = async (id) => {
    try {
        return await apiClient.get(`/post/${id}`);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}

export const commentPost = async (id, comment) => {
    try {
        return await apiClient.put(`/comment/${id}`, comment);
    } catch (e) {
        return {
            error: true,
            e
        }
    }
}