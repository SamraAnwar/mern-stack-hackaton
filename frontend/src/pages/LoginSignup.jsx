import { useState } from "react";
import { useNavigate } from "react-router-dom"; // navigate hook
import { motion } from "framer-motion";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate(); // Navigation setup

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = (e) => {
    e.preventDefault(); // Stop page reload
    // Normally yahan API call hoti, abhi sidha dashboard par bhej dete hain
    navigate('/dashboard');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 rounded-2xl shadow-2xl w-96"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <input 
              type="text" 
              placeholder="Username" 
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          )}
          <input 
            type="email" 
            placeholder="Email" 
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-500 text-white p-3 rounded-xl mt-4 font-semibold hover:bg-purple-600 transition"
            type="submit"
          >
            {isLogin ? "Login" : "Sign Up"}
          </motion.button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button onClick={toggleForm} className="text-purple-600 font-semibold hover:underline">
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
