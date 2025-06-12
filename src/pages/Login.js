import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';
import { jwtDecode } from 'jwt-decode';

export default function Login() {
  const { setUser } = useAuth();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data));
      setUser(res.data);      
      navigate('/');
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input type="email" name="email" onChange={handleChange} value={formData.email} placeholder="Email" className="w-full mb-4 px-4 py-2 border rounded-md" required />
        <input type="password" name="password" onChange={handleChange} value={formData.password} placeholder="Password" className="w-full mb-6 px-4 py-2 border rounded-md" required />
        <button type="submit" className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Sign In</button>
      </form>
    </div>
  );
}
