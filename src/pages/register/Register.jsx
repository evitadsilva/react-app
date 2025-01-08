import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';
import "./register.css";

const Register = () => {
  const { loading, dispatch } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simple form validation
    let errors = {}; // Initialize errors object

    if (!formData.username.trim()) {
      errors.username = 'Username is required';
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } 
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email address';
    }
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } 
    else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        dispatch({ type: "REGISTER_START" });
        const res = await axios.post("/auth/register", formData);
        dispatch({ type: "REGISTER_SUCCESS", payload: res.data });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        navigate("/login");
        alert('Registration successful');
      } catch (err) {
        dispatch({ type: "REGISTER_FAILURE", payload: err.response.data });
        alert('Registration failed');
      }
    }
  };

  return (
    <div className='register_container'>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <div className="error">{errors.username}</div>}
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div className="error">{errors.password}</div>}
        </div>
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="comfirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
        </div>
        <button disabled={loading} type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
