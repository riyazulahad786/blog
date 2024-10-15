"use client"; // Make sure this is a client component

import { useState } from "react";

export default function CommentSection() {
  const [comments, setComments] = useState([]); // State to hold comments
  const [newComment, setNewComment] = useState(""); // State for the new comment input

  const addComment = () => {
    if (newComment.trim() !== "") { // Check if the input is not empty
      setComments([...comments, newComment]); // Add new comment to the list
      setNewComment(""); // Clear the input field
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Comments</h3>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)} // Update state on input change
        placeholder="Add a comment"
        style={{ marginRight: '10px' }}
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
