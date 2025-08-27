import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePosts } from "../hooks/usePosts";

function AddPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { addPost } = usePosts();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, body };
    await addPost(newPost);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post Title"
        required
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post Body"
        required
      />
      <button type="submit">Add Post</button>
    </form>
  );
}

export default AddPost;
