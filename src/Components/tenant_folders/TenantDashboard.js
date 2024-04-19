import React, { useState, useEffect, useContext } from 'react';
import { TenantContext } from './TenantContext';
import AmountPaid from './AmountPaid.js';
import ViewReceipts from './ViewReceipts.js';
import SendMessage from './SendMessage.js';
import AvailableProperties from './AvailableProperties.js';
import PaymentMethods from './PaymentMethods.js';

function TenantDashboard() {
  const { tenantData, error, setTenantData } = useContext(TenantContext);
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [selectedReceiptId, setSelectedReceiptId] = useState(null);

  useEffect(() => {
    if (error) {
      // Handle error (e.g., display error message)
      console.error('Error fetching tenant data:', error);
      setTenantData(null); // Reset data in case of error
    }
  }, [error]); // Re-run effect if error changes

  return (
    <div>
      {error ? (
        <p>Error loading data. Please try again later.</p>
      ) : tenantData ? (
        <>
          <h1>Welcome, {tenantData.name}!</h1>
          <div className="dashboard-content">
            <AmountPaid payments={tenantData.payments} />
            <SendMessage propertyId={selectedProperty?.id} />
            {selectedReceiptId && <ViewReceipts receiptId={selectedReceiptId} />}
            <AvailableProperties />
            <PaymentMethods />
          </div>
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default TenantDashboard;