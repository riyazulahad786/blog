"use client";

import Link from "next/link";

export default function Home() {
 
  return (
    <div>
      <h1>Blog Posts</h1>
       <Link href="/posts">Click Here to Check Blogs</Link>
    </div>
  );
}
