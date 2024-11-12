import React, { useState } from 'react';
import axios from 'axios';

function Input() {
  const [studentId, setStudentId] = useState();
  const [studentData, setStudentData] = useState(null);

  // Fetch data from API based on the studentId input
  const fetchStudentData = async () => {
    try {
        console.log("clicked the button");
      const response = await axios.get(`http://localhost:5000/api/input?studentId=${studentId}`);
      console.log(response)
      setStudentData(response.data); // Set the fetched data to display in the table
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      {/* Input and Button */}
      <div className="relative flex justify-between items-center mx-auto max-w-lg w-full rounded-md border border-gray-600 bg-gray-100 px-3 py-2 text-sm shadow-sm focus-within:ring-1 focus-within:ring-indigo-600 focus-within:border-indigo-600 mt-10">
        <label htmlFor="search-field" className="sr-only">Search</label>
        <input
          type="text"
          name="search-field"
          id="search-field"
          className="block w-full rounded-md border-0 bg-transparent py-0 focus:ring-0 focus:border-0 focus:outline-none text-gray-400"
          placeholder="Enter the studentID for details"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />
        <button
          type="button"
          onClick={fetchStudentData}
          className="relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span>Find</span>
          <svg className="ml-2 -mr-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>

      {/* Table to display fetched student data */}
      {studentData && (
        <div className="flex justify-center mt-8">
          <table className="w-1/2 bg-white border border-gray-300 rounded-md shadow-md">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium">Field</th>
                <th className="px-6 py-3 border-b border-gray-300 text-left text-sm font-medium">Value</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="px-6 py-4 border-b border-gray-300 text-sm">Student ID</td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm">{studentData.StudentID}</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="px-6 py-4 border-b border-gray-300 text-sm">Admission No</td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm">{studentData.AdmnNo || '-'}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 border-b border-gray-300 text-sm">Name</td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm">{studentData.Name}</td>
              </tr>
              <tr className="bg-gray-100">
                <td className="px-6 py-4 border-b border-gray-300 text-sm">Class</td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm">{studentData.Class}</td>
              </tr>
              <tr>
                <td className="px-6 py-4 border-b border-gray-300 text-sm">Section</td>
                <td className="px-6 py-4 border-b border-gray-300 text-sm">{studentData.Section}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Input;
