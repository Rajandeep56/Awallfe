import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white font-sans">
      <div className="w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 p-8 border border-gray-800 rounded-md shadow-md flex">
        <div className="w-1/2 pr-4">
          <h2 className="text-3xl font-bold mb-6">About</h2>
          <p className="text-gray-400 leading-7 mb-6">
            It's your space for confessions, venting, and unbiased opinions. No ties, just your unfiltered voice on an open wall.
            Join the conversation, speak out, and connect anonymously.
          </p>
          <h3 className="text-2xl font-bold mt-6 mb-4">Problem</h3>
          <p className="text-gray-400 leading-7 mb-6">
            In a world where our true thoughts often get lost in the noise of social media, there's a real need for something more.
            Current platforms don't quite cut it – they miss the mark on letting us share not just our challenges but also our creative
            sparks and random musings. We're missing a space that truly gets us, where we can connect authentically and share every
            part of who we are. The problem? We don't have that one place that seamlessly fits every aspect of our expression –
            whether it's tough moments, bursts of creativity, or just the joy of sharing our passing thoughts in the moment.
          </p>
        </div>

        <div className="w-1/2 pl-4">
          <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
          <h3 className="text-2xl font-bold mt-6 mb-4">Implementation</h3>
          <p className="text-gray-400 leading-7 mb-6">
            React, Express, Json/DB [will decide on content], Tailwind CSS
          </p>
          <h3 className="text-2xl font-bold mt-6 mb-4">Endpoints</h3>
          <ul className="list-disc text-gray-400 leading-7 mb-6 pl-6">
            <li>POST /add</li>
            <li>POST /:postId/comments/add</li>
            <li>POST /:id/like</li>
            <li>GET /</li>
            <li>GET /:id</li>
          </ul>
          <h3 className="text-2xl font-bold mt-6 mb-4">Auth</h3>
          <p className="text-gray-400 leading-7 mb-6">
            JWT
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
