import React from 'react';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="hero bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to CodeMaster</h1>
          <p className="text-xl mb-8">Unleash Your Coding Potential</p>
          <div>
            <button className="bg-white text-green-800 font-semibold py-2 px-4 rounded mr-4">Start Coding</button>
            <button className="bg-green-700 border border-white text-white font-semibold py-2 px-4 rounded">Join a Contest</button>
          </div>
        </div>
      </div>

      {/* Coding Playground Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Coding Playground</h2>
          <p className="text-lg mb-8">Experiment with code in a real-time editor. Write, execute, and see results instantly.</p>
          <img src="https://via.placeholder.com/800x400" alt="Code Editor" className="mx-auto mb-4" />
          <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded">Explore Playground</button>
        </div>
      </div>

      {/* Coding Arena Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Coding Arena</h2>
          <p className="text-lg mb-8">Hone your skills by solving a variety of coding problems. Practice at your own pace.</p>
          <img src="https://via.placeholder.com/800x400" alt="Problem Solving" className="mx-auto mb-4" />
          <button className="bg-green-700 text-white font-semibold py-2 px-4 rounded">Practice Now</button>
        </div>
      </div>

      {/* Coding Battleground Section */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Coding Battleground</h2>
          <p className="text-lg mb-8">Compete with others in coding contests. Rise to the top of the leaderboard.</p>
          <img src="https://via.placeholder.com/800x400" alt="Contest" className="mx-auto mb-4" />
          <button className="bg-green-600 text-white font-semibold py-2 px-4 rounded">Join a Contest</button>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-4">What Our Users Say</h2>
          <p className="text-lg mb-8">Hear from our community of coders.</p>
          <div className="flex justify-center">
            <div className="max-w-md px-4">
              <p className="text-lg mb-4">"This platform has helped me improve my coding skills immensely!"</p>
              <p className="font-semibold text-green-800">- User A</p>
            </div>
            <div className="max-w-md px-4">
              <p className="text-lg mb-4">"The Coding Battleground is an amazing place to challenge yourself!"</p>
              <p className="font-semibold text-green-800">- User B</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-green-800 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h4 className="text-xl font-semibold">About CodeMaster</h4>
            <p className="text-sm">CodeMaster is an online platform designed to enhance your coding skills through interactive coding challenges and competitions.</p>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-semibold">Contact Us</h4>
            <p className="text-sm">Email: support@codemaster.com | Social: @codemaster</p>
          </div>
          <div className="mb-4">
            <h4 className="text-xl font-semibold">Useful Links</h4>
            <p className="text-sm"><a href="#playground" className="underline">Coding Playground</a> | <a href="#arena" className="underline">Coding Arena</a> | <a href="#battleground" className="underline">Coding Battleground</a></p>
          </div>
          <div>
            <p className="text-sm">&copy; 2024 CodeMaster. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
