"use client"; 
import { useContext } from 'react';
import { PostContext } from '../../context/PostContext'; 
import CommentSection from '@/app/components/CommentSection';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function PostDetail({ params }) {
  const { id } = params; 
  const { posts } = useContext(PostContext);

  const post = posts.find((post) => post.id.toString() === id); 

  if (!post) {
    return notFound();
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>{post.title}</h1>
      <p><strong>User ID:</strong> {post.userId}</p>
      <p>{post.body.replace(/\n/g, ' ')}</p>
      <div style={{ marginTop: '20px' }}>
        <CommentSection />
      </div>
      <Link href="/posts">Go back</Link>
    </div>
  );
}
