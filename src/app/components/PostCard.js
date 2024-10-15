import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <div className="post-card" style={{ border: '1px solid #ccc', margin: '10px 0', padding: '10px' }}>
      <h2>{post.title}</h2>
      <p>{post.body.slice(0, 100)}...</p>
      <Link href={`/posts/${post.id}`}>Read more</Link>
    </div>
  );
}
