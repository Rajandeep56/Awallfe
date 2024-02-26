import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [randomImage, setRandomImage] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://source.unsplash.com/featured/?community')
      .then(response => {
        const imageUrl = response.request.responseURL;
        setRandomImage(imageUrl);
      })
      .catch(error => console.error('Error fetching image:', error));

    axios.get('http://localhost:8000/')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const categories = ['All', ...new Set(posts.map(post => post.category))];

  const filteredPosts = selectedCategory === 'All'
    ? posts
    : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="bg-black border-t-4 border-blue-500 p-4 flex flex-col min-h-screen font-sans">
      {randomImage && (
        <div className="mb-4">
          <img src={randomImage} alt="Random Confession" className="rounded" style={{ width: '100%', maxHeight: '400px', objectFit: 'cover' }} />
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-start mb-4">
        <div className="md:w-1/4 mb-4 mr-4">
          <label htmlFor="category" className="text-white mb-2">Filter by Category</label>
          <div className="flex flex-col space-y-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-2 py-1 bg-gray-800 text-white border border-transparent hover:border-blue-500 focus:outline-none focus:border-blue-500 ${selectedCategory === category ? 'bg-blue-500' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full md:w-3/4">
          {filteredPosts.map(post => (
           <div key={post.postId} className="bg-gray-800 p-4 rounded transition-transform transform hover:scale-105 focus:scale-105">
           <h3 className="text-white text-lg font-bold mb-2">
             <Link to={`/post/${post.postId}`} className="text-blue-500 hover:underline">{post.title}</Link>
           </h3>
           <p className="text-gray-400">{post.content}</p>
           <div className="flex justify-between mt-4">
             <div className="text-gray-500">Likes: {post.likes}</div>
             <div className="text-gray-500">Comments: {post.comments.length}</div>
           </div>
         </div>
         
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
