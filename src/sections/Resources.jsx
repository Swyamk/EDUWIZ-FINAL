import React, { useState } from 'react';
import backgroundImage from '../assets/images/background.jpg'; // Import your background image

const Resource = () => {
  const [selectedSemester, setSelectedSemester] = useState('one');

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const addResource = (title, description) => {
    return (
      <div className="text-left border border-gray-300 rounded p-4 mb-4 bg-white bg-opacity-75">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  };

  const getResourcesForSemester = () => {
    switch (selectedSemester) {
      case 'one':
        return (
          <>
            {addResource('Computational Thinking and Programming', 'Description for Resource 1')}
            {addResource('Previous Year Papers', 'Description for Resource 1')}
            {addResource('Database Management Systems', 'Description for Resource 2')}
          </>
        );
      case 'two':
        return (
          <>
            {addResource('Computer Architecture and Organization', 'Description for Resource 1')}
            {addResource('Question Bank for Data Structures', 'Description for Resource 1')}
            {addResource('Object Oriented Programming and Systems', 'Description for Resource 2')}
          </>
        );
      case 'three':
        return (
          <>
            {addResource('Theory of Computation', 'Description for Resource 1')}
            {addResource('Dynamic Programming', 'Description for Resource 2')}
            {addResource('Theory of Automata', 'Description for Resource 1')}
          </>
        );
      case 'four':
        return (
          <>
            {addResource('Discrete Mathematics', 'Description for Resource 1')}
            {addResource('Theory of Computation', 'Description for Resource 1')}
            {addResource('Compiler Design', 'Description for Resource 2')}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-black bg-opacity-50 min-h-screen p-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-6">Select a Semester</h1>
        <select
          id="semesterSelect"
          onChange={handleSemesterChange}
          value={selectedSemester}
          className="block w-1/2 p-2 border border-gray-300 rounded mb-6"
        >
          <option value="one">First Semester</option>
          <option value="two">Second Semester</option>
          <option value="three">Third Semester</option>
          <option value="four">Fourth Semester</option>
        </select>
        <div id="resourcesList" className="w-full max-w-4xl">
          {getResourcesForSemester()}
        </div>
      </div>
    </div>
  );
};

export default Resource;
