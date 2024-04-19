import React, { useState } from 'react';

function Landlord() {
  const [landlordFormData, setLandlordFormData] = useState({
    landlordUsername: '',
    landlordPassword: '',
  });

  const handleLandlordChange = (e) => {
    setLandlordFormData({ ...landlordFormData, [e.target.name]: e.target.value });
  };

  const handleLandlordSubmit = async (e) => {
    e.preventDefault();

    // Implement landlord login logic here (potentially using axios)
    try {
      const response = await axios.post(
        'http://localhost:5000/landlord-login',
        landlordFormData
      );
      console.log(response.data);

      // Handle successful login (e.g., redirect to landlord dashboard)
      // This example redirects to a placeholder URL for demonstration
      window.location.href = '/landlord-dashboard'; // Replace with actual redirect logic
    } catch (error) {
      console.error('Landlord login failed:', error);

      // Handle login errors (e.g., display error message)
      // You can use state or a separate variable to store an error message
      // and conditionally render it below the form.
    }
  };

  return (
    <div className="landlord-container">
      <h2>Landlord Login</h2>
      <form onSubmit={handleLandlordSubmit}>
        <div className="input">
          <label>Username:</label>
          <input
            type="text"
            name="landlordUsername"
            value={landlordFormData.landlordUsername}
            onChange={handleLandlordChange}
            required
          />
        </div>
        <div className="input">
          <label>Password:</label>
          <input
            type="password"
            name="landlordPassword"
            value={landlordFormData.landlordPassword}
            onChange={handleLandlordChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {/* Placeholder for error message (optional) */}
      {/* <div className="error-message">Error message goes here</div> */}
    </div>
  );
}

export default Landlord;

