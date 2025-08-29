import React, { useState } from "react";
import { usePosts } from "../hooks/usePosts";
import PostCard from "../components/PostCard";
import Spinner from "../components/Spinner";

function Home() {
  const { posts, loading, deletePost } = usePosts();
  const [search, setSearch] = useState("");

  if (loading) return <Spinner />;

  // Filter posts by title
  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  // Function to highlight matched text
  const highlightText = (text, highlight) => {
    if (!highlight) return text;
    const regex = new RegExp(`(${highlight})`, "gi");
    return text.split(regex).map((part, index) =>
      regex.test(part) ? (
        <span key={index} style={{ backgroundColor: "#fff176" }}>{part}</span>
      ) : (
        part
      )
    );
  };

  return (
    <div className="home">
      <h1>All Blog Posts</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "16px",
          borderRadius: "8px",
          border: "1px solid #cbd5e1",
          fontSize: "1rem",
        }}
      />

      <div className="post-list">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <PostCard
              key={post.id}
              post={{
                ...post,
                title: highlightText(post.title, search), // highlighted title
              }}
              onDelete={deletePost}
            />
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
}

export default Home;
