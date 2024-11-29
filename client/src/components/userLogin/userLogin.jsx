import React, { useState } from "react";
import "./userLogin.css";
import axios from "axios";

const FlipCard = (props) => {
  const [isRegister, setIsRegister] = useState(false);
  const [registerData, setRegisterData] = useState({
    employee_id: "",
    role: "",
    phone: "",
    password: "",
  });

  const [loginData, setLoginData] = useState({
    employee_id: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const toggleForm = () => setIsRegister(!isRegister);

  const handleLoginChange = (event) => {
    const { name, value } = event.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegisterChange = (event) => {
    const { name, value } = event.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/signin", loginData);
      const { token, role, employee_id } = response.data;

      localStorage.setItem('token', token);
      props.setIsAuthenticated(token);
      localStorage.setItem('role', role);
      localStorage.setItem('employee_id', employee_id);
    } catch (error) {
      alert(`Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3000/signup", registerData);
      const { token, role, employee_id } = response.data;

      localStorage.setItem('token', token);
      props.setIsAuthenticated(token);
      localStorage.setItem('role', role);
      localStorage.setItem('employee_id', employee_id);
    } catch (error) {
      alert(`Error: ${error.response?.data?.message || error.message}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="card">
      {isRegister ? (
        <div className="form-container">
          <h2>Register</h2>
          <form onSubmit={handleSignup}>
            <input 
              onChange={handleRegisterChange} 
              name="employee_id" 
              type="text" 
              placeholder="Employee ID" 
              required 
            />
            <select 
              onChange={handleRegisterChange} 
              name="role" 
              required
            >
              <option value="" disabled>Role</option>
              <option value="Guard">Guard</option>
              <option value="Manager">Manager</option>
              <option value="Authority">Authority</option>
            </select>

            <input 
              onChange={handleRegisterChange} 
              name="phone" 
              type="text" 
              placeholder="Phone" 
              required 
            />
            <input 
              onChange={handleRegisterChange} 
              name="password" 
              type="password" 
              placeholder="Password" 
              required 
            />
            <button type="submit">
              {loading ? "Loading..." : "Register"}
            </button>
            <p>
              Have an account? <span onClick={toggleForm}>Login</span>
            </p>
          </form>
        </div>
      ) : (
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleSignin}>
            <input 
              onChange={handleLoginChange} 
              name="employee_id" 
              type="text" 
              placeholder="Employee ID" 
              required 
            />
            <input 
              onChange={handleLoginChange} 
              name="password" 
              type="password" 
              placeholder="Password" 
              required 
            />
            <button type="submit">
              {loading ? "Loading..." : "Login"}
            </button>
            <p>
              No account? <span onClick={toggleForm}>Register</span>
            </p>
          </form>
        </div>
      )}
    </div>
  );
};

export default FlipCard;