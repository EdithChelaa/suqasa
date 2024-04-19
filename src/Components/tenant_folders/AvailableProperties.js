import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls

function AvailableProperties() {
  const [properties, setProperties] = useState([]);
  const tenantId = localStorage.getItem('tenantId'); // Assuming tenant ID is stored in localStorage

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('/api/properties/available'); // Replace with your endpoint
        setProperties(response.data);
      } catch (error) {
        console.error('Error fetching properties:', error);
      }
    };

    fetchProperties();
  }, []);

  const handleExpressInterest = async (propertyId) => {
    try {
      const response = await axios.post('/api/tenants/interest', {
        tenantId,
        propertyId,
      });
      console.log('Interest expressed:', response.data);
    } catch (error) {
      console.error('Error expressing interest:', error);
    }
  };

  const handleRequestViewing = async (propertyId) => {
    try {
      const response = await axios.post('/api/viewings/request', {
        tenantId,
        propertyId,
      });
      console.log('Viewing requested:', response.data);
    } catch (error) {
      console.error('Error requesting viewing:', error);
    }
  };

  return (
    <div>
      <h2>Available Properties</h2>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p>
              Price: ${property.price} {/* Replace with appropriate price format */}
            </p>
            {property.tenantId === tenantId ? (
              <p>Currently Rented</p>
            ) : (
              <>
                <button onClick={() => handleExpressInterest(property.id)}>
                  Express Interest
                </button>
                <button onClick={() => handleRequestViewing(property.id)}>
                  Request Viewing
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AvailableProperties;