import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // Import useHistory hook
import axios from 'axios';

function Tenant() {
    const [tenantFormData, setTenantFormData] = useState({
      tenantUsername: '',
      tenantPassword: ''
    });

    const history = useHistory(); // Initialize useHistory hook

    const handleTenantChange = (e) => {
      setTenantFormData({ ...tenantFormData, [e.target.name]: e.target.value });
    };

    const handleTenantSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          'http://localhost:5000/tenant-login',
          tenantFormData
        );
        console.log(response.data);
        // Check if login was successful
        if (response.data.success) {
          // Redirect to TenantDashboard on successful login
          history.push('/tenant-dashboard');
        } else {
          // Handle unsuccessful login (e.g., display error message)
          console.error('Tenant login failed:', response.data.message);
        }
      } catch (error) {
        console.error('Tenant login failed:', error);
        // Handle login errors (e.g., display error message)
      }
    };

    return (
      <div className="tenant-container">
        <h2>Tenant Login</h2>
        <form onSubmit={handleTenantSubmit}>
          <div className="input">
            <label>Username:</label>
            <input
              type="text"
              name="tenantUsername"
              value={tenantFormData.tenantUsername}
              onChange={handleTenantChange}
              required
            />
          </div>
          <div className="input">
            <label>Password:</label>
            <input
              type="password"
              name="tenantPassword"
              value={tenantFormData.tenantPassword}
              onChange={handleTenantChange}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
}

export default Tenant;
