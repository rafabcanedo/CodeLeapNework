import axios from "axios";

export const api = axios.create({
 baseURL: "https://dev.codeleap.co.uk/careers/?limit=10",
});

export const createPost = (post) => api.post("https://dev.codeleap.co.uk/careers/?limit=10",post);
export const deletePost = (postId) => api.delete();