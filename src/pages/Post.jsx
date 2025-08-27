import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { usePosts } from "../hooks/usePosts.jsx";

function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedBody, setEditedBody] = useState("");
  const { editPost } = usePosts();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`).then((res) => {
      setPost(res.data);
      setEditedTitle(res.data.title);
      setEditedBody(res.data.body);
    });
  }, [id]);

  const handleEdit = async () => {
    const updated = {
      ...post,
      title: editedTitle,
      body: editedBody,
    };
    await editPost(id, updated);
    navigate("/");
  };

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2>Edit Post</h2>
      <input
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <textarea
        value={editedBody}
        onChange={(e) => setEditedBody(e.target.value)}
      />
      <button onClick={handleEdit}>Save Changes</button>
    </div>
  );
}

export default Post;
