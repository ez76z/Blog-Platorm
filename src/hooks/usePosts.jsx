import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:3000/posts";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(API_URL);
      setPosts(res.data);
    } catch (err) {
      console.error("Failed to fetch posts", err);
    } finally {
      setLoading(false);
    }
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setPosts((prev) => prev.filter((post) => post.id !== id));
    } catch (err) {
      console.error("Failed to delete post", err);
    }
  };

  const addPost = async (newPost) => {
    try {
      const res = await axios.post(API_URL, newPost);
      setPosts((prev) => [...prev, res.data]);
    } catch (err) {
      console.error("Failed to add post", err);
    }
  };

  const editPost = async (id, updatedPost) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, updatedPost);
      setPosts((prev) =>
        prev.map((post) => (post.id === id ? res.data : post))
      );
    } catch (err) {
      console.error("Failed to edit post", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return { posts, loading, deletePost, addPost, editPost };
};
