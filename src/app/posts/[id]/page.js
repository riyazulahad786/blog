import CommentSection from '@/app/components/CommentSection';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function PostDetail({ params }) {
  const { id } = params; 
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!res.ok) {
    return notFound(); // This will trigger a 404 page
  }

  const post = await res.json();
  console.log(post,"id")
  return (
    <div style={{ padding: '20px' }}>
      <h1>{post.title}</h1>
      <p><strong>User ID:</strong> {post.id}</p>
      <p>{post.body.replace(/\n/g, ' ')}</p>
      <div style={{ marginTop: '20px' }}>
     <CommentSection/>
      </div>
      <Link href="/posts">Go back</Link>
    </div>
  );
}
