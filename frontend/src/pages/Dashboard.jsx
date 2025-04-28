import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 

function Dashboard() {
  const navigate = useNavigate(); 

  // Logout function
  const handleLogout = () => {
    navigate('/login'); 
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-6">
        <h1 className="text-2xl font-bold mb-8 text-purple-600">Dashboard</h1>

        <nav className="flex flex-col gap-4">
          <button className="text-left p-3 rounded-lg hover:bg-purple-100 font-semibold text-gray-700">
            Overview
          </button>
          <button className="text-left p-3 rounded-lg hover:bg-purple-100 font-semibold text-gray-700">
            Pending Projects
          </button>
          <button className="text-left p-3 rounded-lg hover:bg-purple-100 font-semibold text-gray-700">
            Attendance
          </button>
          <button className="text-left p-3 rounded-lg hover:bg-purple-100 font-semibold text-gray-700">
            To-Do List
          </button>
          <button className="text-left p-3 rounded-lg hover:bg-purple-100 font-semibold text-gray-700">
            Revenue
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Welcome Back!</h2>
          <div className="flex items-center gap-4">
            <img
              src="https://i.pravatar.cc/40"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
            <button 
              onClick={handleLogout} 
              className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-xl font-semibold"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">

          {/* Attendance Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col"
          >
            <h3 className="text-xl font-bold text-gray-700 mb-4">Attendance</h3>
            <p className="text-gray-500 mb-2">Days Present: <span className="font-semibold text-green-500">22</span></p>
            <p className="text-gray-500">Days Absent: <span className="font-semibold text-red-500">2</span></p>
          </motion.div>

          {/* Revenue Card */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col"
          >
            <h3 className="text-xl font-bold text-gray-700 mb-4">Revenue</h3>
            <p className="text-gray-500 mb-2">This Month: <span className="font-semibold text-green-600">$5,400</span></p>
            <p className="text-gray-500">Target: <span className="font-semibold">$10,000</span></p>
          </motion.div>

          {/* To-Do List */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="bg-white p-6 rounded-2xl shadow-lg flex flex-col"
          >
            <h3 className="text-xl font-bold text-gray-700 mb-4">To-Do List</h3>
            <ul className="list-disc pl-5 text-gray-600">
              <li>Finish project proposal</li>
              <li>Update website design</li>
              <li>Prepare client meeting</li>
            </ul>
          </motion.div>

        </div>

        {/* Pending Projects Section */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">Pending Projects</h3>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl hover:bg-gray-100">
              <span className="font-semibold text-gray-700">E-commerce Website</span>
              <span className="text-sm text-purple-500 font-bold">In Progress</span>
            </div>

            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl hover:bg-gray-100">
              <span className="font-semibold text-gray-700">Mobile App Redesign</span>
              <span className="text-sm text-purple-500 font-bold">Pending</span>
            </div>

            <div className="flex justify-between items-center bg-gray-50 p-4 rounded-xl hover:bg-gray-100">
              <span className="font-semibold text-gray-700">SEO Optimization</span>
              <span className="text-sm text-purple-500 font-bold">Completed</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
