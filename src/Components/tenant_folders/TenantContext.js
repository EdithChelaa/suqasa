import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls

const TenantContext = createContext();

const TenantProvider = ({ children }) => {
  const [tenantData, setTenantData] = useState(null);
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    const fetchTenantData = async () => {
      try {
        const response = await axios.get('/api/tenants/me'); // Replace with your API endpoint
        setTenantData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchTenantData();
  }, []);

  return (
    <TenantContext.Provider value={{ tenantData, error, setTenantData }}>
      {children}
    </TenantContext.Provider>
  );
};

export { TenantContext, TenantProvider };