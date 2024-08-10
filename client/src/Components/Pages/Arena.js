
import React, { useState } from 'react';
import { AiFillLike, AiFillDislike, AiFillStar } from 'react-icons/ai';
import { BsCheck2Circle } from 'react-icons/bs';
import { TiStarOutline } from 'react-icons/ti';
import Editor from '@monaco-editor/react';

const ProblemDescription = () => {
  const [theme, setTheme] = useState('dark'); // State for theme toggle
  const [code, setCode] = useState(''); // State for code in the editor
  const [output, setOutput] = useState(''); // State for output after running code

  // Hardcoded problem data
  const problem = {
    id: '1',
    title: 'Two Sum',
    problemStatement: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    examples: [
      {
        id: '1',
        inputText: '[2, 7, 11, 15], 9',
        outputText: '[0, 1]',
        explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].'
      },
    ],
    constraints: "The input array is non-empty and contains at most 10^4 elements."
  };

  const loading = false;
  const currentProblem = problem;
  const problemDifficultyClass = 'bg-olive text-olive';
  const solved = true; // Hardcoded solved state
  const liked = false;
  const disliked = false;
  const starred = true;

  const handleLike = () => {
    // Logic for like button
  };

  const handleDislike = () => {
    // Logic for dislike button
  };

  const handleStar = () => {
    // Logic for star button
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const compileAndRun = async () => {
    const response = await fetch('http://localhost:5000/compile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ code }),
    });
    const data = await response.text();
    setOutput(data);
  };

  return (
    <div className={`flex flex-col h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <div className='flex flex-1 overflow-hidden'>
        {/* Problem Section */}
        <div className='p-4 w-1/2 overflow-y-auto'>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className='absolute top-4 right-4 p-2 rounded bg-blue-500 text-white'
          >
            Toggle Theme
          </button>

          {/* Problem heading */}
          <div className='w-full'>
            <div className='text-2xl font-semibold mb-4'>
              {currentProblem.title}
            </div>
            {!loading && currentProblem && (
              <div className='flex items-center mb-4'>
                <div
                  className={`${problemDifficultyClass} inline-block rounded-full bg-opacity-20 px-3 py-1 text-xs font-medium capitalize`}
                >
                  Easy
                </div>
                {solved && (
                  <div className='ml-4 text-green-500'>
                    <BsCheck2Circle />
                  </div>
                )}
                <div
                  className='flex items-center cursor-pointer hover:bg-gray-700 space-x-1 rounded p-2 ml-4 text-lg transition-colors duration-200'
                  onClick={handleLike}
                >
                  <AiFillLike className={liked ? 'text-blue-500' : ''} />
                  <span className='text-xs'>0</span>
                </div>
                <div
                  className='flex items-center cursor-pointer hover:bg-gray-700 space-x-1 rounded p-2 ml-4 text-lg transition-colors duration-200'
                  onClick={handleDislike}
                >
                  <AiFillDislike className={disliked ? 'text-blue-500' : ''} />
                  <span className='text-xs'>0</span>
                </div>
                <div
                  className='cursor-pointer hover:bg-gray-700 rounded p-2 ml-4 text-xl transition-colors duration-200'
                  onClick={handleStar}
                >
                  {starred ? <AiFillStar /> : <TiStarOutline />}
                </div>
              </div>
            )}

            {/* Problem Statement */}
            <div className={`mb-4 p-4 rounded ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
              {currentProblem.problemStatement}
            </div>

            {/* Examples */}
            <div className='mb-4'>
              {currentProblem.examples.map((example, index) => (
                <div key={example.id} className='mb-4'>
                  <p className='font-medium'>Example {index + 1}:</p>
                  <pre className={`p-4 rounded ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
                    <strong>Input: </strong> {example.inputText}
                    <br />
                    <strong>Output:</strong> {example.outputText}
                    <br />
                    {example.explanation && (
                      <>
                        <strong>Explanation:</strong> {example.explanation}
                      </>
                    )}
                  </pre>
                </div>
              ))}
            </div>

            {/* Constraints */}
            <div className={`p-4 rounded ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-200'}`}>
              <strong>Constraints:</strong>
              <p className='ml-5 mt-2'>{currentProblem.constraints}</p>
            </div>
          </div>
        </div>

        {/* Code Editor Section */}
        <div className='flex flex-col w-1/2 h-full'>
          <Editor
            height="calc(100% - 60px)" // Adjusted height
            language="cpp"
            value={code}
            onChange={(newCode) => setCode(newCode)}
            theme={theme === 'dark' ? 'vs-dark' : 'light'}
            className="flex-1"
          />
          <button
            onClick={compileAndRun}
            className='mt-4 p-2 bg-blue-500 text-white rounded self-center'
          >
            Compile & Run
          </button>
          <pre className={`mt-4 p-2 rounded h-40 overflow-auto ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
            {output}
          </pre>
        </div>
      </div>
    // </div>
  );
};

export default ProblemDescription;




