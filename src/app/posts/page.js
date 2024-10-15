// app/posts/page.js
"use client";
import { useContext } from 'react';
import { PostContext } from '../context/PostContext'; 
import PostCard from '../components/PostCard'; 

export default function Home() {
  const { posts } = useContext(PostContext);
  
  if (!posts) return <div>Loading...</div>;

  return (
    <div>
      <h1>Blog Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}
