import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-300 to-blue-300">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-80 text-center">
        <h2 className="text-2xl font-bold mb-4">Create Account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input className="p-3 mb-3 rounded bg-gray-100" type="text" name="username" placeholder="Username" onChange={handleChange} required />
          <input className="p-3 mb-3 rounded bg-gray-100" type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input className="p-3 mb-5 rounded bg-gray-100" type="password" name="password" placeholder="Password" onChange={handleChange} required />
          <button className="bg-green-500 text-white p-3 rounded font-semibold">Signup</button>
        </form>
        <p className="mt-3 text-sm">Already have an account? <Link to="/login" className="text-blue-500 font-medium">Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;