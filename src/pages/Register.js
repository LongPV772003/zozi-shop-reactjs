import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Register() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', formData);
      navigate('/login');
    } catch (error) {
      alert('Registration failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <input type="text" name="name" onChange={handleChange} value={formData.name} placeholder="Name" className="w-full mb-4 px-4 py-2 border rounded-md" required />
        <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Email" className="w-full mb-4 px-4 py-2 border rounded-md" required />
        <input type="password" name="password" onChange={handleChange} value={formData.password} placeholder="Password" className="w-full mb-6 px-4 py-2 border rounded-md" required />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Sign Up</button>
      </form>
    </div>
  );
}