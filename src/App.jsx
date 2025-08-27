import { useEffect, useState } from 'react';
import { fetchPosts, addPost, deletePost, updatePost } from './api/posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Load posts from API
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data.reverse()); // show newest first
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  // Add post
  const handleAdd = async (newPost) => {
    const saved = await addPost(newPost);
    setPosts([saved, ...posts]);
  };

  // Delete post
  const handleDelete = async (id) => {
    await deletePost(id);
    setPosts(posts.filter((post) => post.id !== id));
  };

  // Edit post
  const handleEdit = async (id, updated) => {
    const updatedPost = await updatePost(id, updated);
    setPosts(posts.map((post) => (post.id === id ? updatedPost : post)));
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading posts.</p>}
      {/* Your post list, create form, etc */}
    </div>
  );
}

export default App;
