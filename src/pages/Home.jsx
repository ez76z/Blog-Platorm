import React from "react";
import { usePosts } from "../hooks/usePosts";
import PostCard from "../components/PostCard";
import Spinner from "../components/Spinner";

function Home() {
  const { posts, loading, deletePost } = usePosts();

  if (loading) return <Spinner />;

  return (
    <div className="home">
      <h1>All Blog Posts</h1>
      <div className="posts">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} onDelete={deletePost} />
        ))}
      </div>
    </div>
  );
}

export default Home;
 