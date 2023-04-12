import axios from "axios";

export const api = axios.create({
 //baseURL: "https://dev.codeleap.co.uk/careers/?limit=10",
 baseURL: "https://dev.codeleap.co.uk",
});

export const createPost = (post) => api.post("https://dev.codeleap.co.uk/careers/?limit=10",post);
export const editPost = (post) => api.patch(`careers/${post.id}/`, {
 title: post.title,
 content: post.content,
});
export const removePost = (id) => api.delete(`https://dev.codeleap.co.uk/careers/${id}`);