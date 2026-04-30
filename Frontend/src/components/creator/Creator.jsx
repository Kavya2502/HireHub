import React from 'react'
import Navbar from '../components_lite/Navbar'
import ankit from './Kavya.jpg';

const Creator = () => {
  return (
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Developers and Designers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Developer 1 - Kavya Rani */}
          <a href="https://github.com/Kavya2502" target="_blank" rel="noopener noreferrer" className="block text-center">
            <img src={ankit} alt="Kavya Rani" className="mx-auto rounded-lg shadow-md" />
            <h3 className="text-lg font-semibold text-gray-700 mt-2">Kavya Rani</h3>
            <p className="text-gray-600 text-sm">Registration No: 21110125035</p>
            <p className="text-gray-600 text-sm">Full Stack Developer</p>
          </a>
        </div>
      </div>
  )
}

export default Creator