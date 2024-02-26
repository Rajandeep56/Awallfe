import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentForm from './CommentForm';

const PostDetail = ({ onAddComment }) => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [borderColor, setBorderColor] = useState('silver');
  const [reaction, setReaction] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBorderColor((prevColor) => (prevColor === 'silver' ? 'goldenrod' : 'silver'));
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:8000/${postId}`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => console.error('Error fetching post details:', error));
  }, [postId]);

  const handleAddComment = (newComment) => {
    axios.post(`http://localhost:8000/${postId}/comments/add`, newComment)
      .then(response => {
        setPost((prevPost) => ({
          ...prevPost,
          comments: [...prevPost.comments, response.data.newComment],
        }));

        setReaction('Comment added successfully!');
        setTimeout(() => setReaction(null), 3000);
      })
      .catch(error => {
        console.error('Error adding comment:', error);
        setReaction('Error adding comment. Please try again.');
        setTimeout(() => setReaction(null), 3000);
      });
  };

  const handleLikeClick = () => {
    axios.post(`http://localhost:8000/${postId}/like`)
      .then(response => {
        setPost((prevPost) => ({
          ...prevPost,
          likes: response.data.newLikes,
        }));

        setReaction('Liked!');
        setTimeout(() => setReaction(null), 3000);
      })
      .catch(error => {
        console.error('Error liking post:', error);
        setReaction('Error liking post. Please try again.');
        setTimeout(() => setReaction(null), 3000);
      });
  };

  if (!post) {
    return <div className="text-white">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className={`border p-8 rounded-md mt-8 w-60vw h-70vh shadow-${borderColor}`}>
        <h3 className="text-white text-3xl font-bold mb-4">{post.title}</h3>

        <img src={post.picture} alt={post.title} className="rounded mb-4" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />

        <p className="text-gray-400 mb-4 leading-7">{post.content}</p>

        <div className="flex justify-between items-center mb-4">
          <div className="text-gray-400">
            Likes: {post.likes}
          </div>
          <button
            onClick={handleLikeClick}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Like
          </button>
        </div>

        <CommentForm postId={post.postId} onAddComment={handleAddComment} />

        {reaction && (
          <div className="mt-4 bg-green-500 text-white p-2 rounded">
            {reaction}
          </div>
        )}

        <div className="mt-4 border-t border-gray-600 pt-4">
          <h4 className="text-white text-2xl mb-4">Comments:</h4>
          <ul className="text-gray-400">
            {post.comments.map(comment => (
              <li key={comment.commentId} className="mb-2">
                <p className="font-semibold text-gray-500">User ID: {comment.userId}</p>
                <p>{comment.comment}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
