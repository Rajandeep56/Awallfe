
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CreatePost = ({ onCreatePost }) => {
  const categories = [
    'Secret Confessions',
    'Anonymous Sharing',
    'Confessional Stories',
    'Guilty Pleasures',
    'Regrets and Reflections',
    'Forgiveness and Redemption',
    'Romantic Confessions',
    'Travel Adventures',
    'Philosophical Musings',
    'Tech Confessions',
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePostClick = () => {
    if (selectedCategory && title && description) {
      const newPost = {
        category: selectedCategory,
        title,
        content: description,
      };

      axios.post('http://localhost:8000/add', newPost)
        .then(response => {
          onCreatePost(response.data.newPost);
          setSelectedCategory(categories[0]);
          setTitle('');
          setDescription('');
          alert('Post added successfully!');
        })
        .catch(error => {
          console.error('Error adding post:', error);
          alert('Error adding post. Please try again.');
        });
    } else {
      alert('Please fill in all the fields');
    }
  };

  const handleDeleteClick = () => {
    setSelectedCategory(categories[0]);
    setTitle('');
    setDescription('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="bg-black border-t-4 border-blue-500 p-4 rounded-md w-3/4">
        <h2 className="text-white text-2xl font-bold mb-4">Create a Confession</h2>

        <div className="mb-4">
          <label htmlFor="category" className="text-white">Category:</label>
          <select
            id="category"
            onChange={handleCategoryChange}
            value={selectedCategory}
            className="px-4 py-2 border border-gray-800 rounded bg-gray-800 text-white focus:outline-none focus:border-blue-500"
          >
            {categories.map((categoryOption) => (
              <option key={categoryOption} value={categoryOption}>
                {categoryOption}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="title" className="text-white">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            className="w-full px-4 py-2 border border-gray-800 rounded bg-gray-800 text-white focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="description" className="text-white">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={handleDescriptionChange}
            className="w-full px-4 py-2 border border-gray-800 rounded bg-gray-800 text-white focus:outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex justify-between items-center mb-4">
          <button
            onClick={handlePostClick}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2 hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
          >
            Post
          </button>
          <Link to="/" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 focus:outline-none focus:bg-red-700">
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
