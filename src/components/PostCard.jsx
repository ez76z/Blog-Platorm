// src/components/PostCard.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PostCard.css";

function PostCard({ post, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(post.title);
  const [editBody, setEditBody] = useState(post.body);

  const handleSave = () => {
    onEdit(post.id, editTitle, editBody);
    setIsEditing(false);
  };

  return (
    <div className="post-card">
      {isEditing ? (
        <>
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <textarea
            rows={4}
            value={editBody}
            onChange={(e) => setEditBody(e.target.value)}
          />
          <div className="card-actions">
            <button onClick={handleSave}>💾 Save</button>
            <button onClick={() => setIsEditing(false)}>❌ Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <div className="card-actions">
            <Link to={`/posts/${post.id}`} className="read-more">Read More</Link>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>✏️ Edit</button>
            <button className="delete-btn" onClick={() => onDelete(post.id)}>🗑 Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

export default PostCard;
