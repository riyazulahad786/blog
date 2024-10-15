"use client"; 

import { useState } from "react";

export default function CommentSection() {
  const [comments, setComments] = useState([]); 
  const [newComment, setNewComment] = useState(""); 

  const addComment = () => {
    if (newComment.trim() !== "") { 
      setComments([...comments, newComment]); 
      setNewComment(""); 
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Comments</h3>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)} 
        placeholder="Add a comment"
        style={{ marginRight: '10px', padding:"6px" }}
      />
      <button onClick={addComment}>Submit</button>

      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li> 
        ))}
      </ul>
    </div>
  );
}
