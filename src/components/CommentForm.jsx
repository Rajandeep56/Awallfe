import React, { useState } from 'react';

const CommentForm = ({ postId, onAddComment }) => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleAddComment = () => {
    if (comment.trim() !== '') {
      onAddComment({
        postId,
        content: comment,
      });
      setComment('');
    }
  };

  return (
    <div>
      <textarea
        rows="4"
        placeholder="Add your comment..."
        value={comment}
        onChange={handleCommentChange}
        className="w-full p-2 border border-gray-400 rounded-md focus:outline-none"
      ></textarea>
      <button
        onClick={handleAddComment}
        className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
      >
        Add Comment
      </button>
    </div>
  );
};

export default CommentForm;
