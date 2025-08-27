const API_URL = 'http://localhost:3000/posts';

// Get all posts
export const fetchPosts = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw Error('Failed to fetch posts');
  return await response.json();
};

// Add a post
export const addPost = async (newPost) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPost),
  });
  if (!response.ok) throw Error('Failed to add post');
  return await response.json();
};

// Delete a post
export const deletePost = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) throw Error('Failed to delete post');
};

// Edit a post
export const updatePost = async (id, updatedPost) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedPost),
  });
  if (!response.ok) throw Error('Failed to update post');
  return await response.json();
};
