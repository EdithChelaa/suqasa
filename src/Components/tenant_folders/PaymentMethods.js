import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls

function PaymentMethods() {
  const [paymentMethods, setPaymentMethods] = useState([]);
  const tenantId = localStorage.getItem('tenantId'); // Assuming tenant ID is stored in localStorage

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      try {
        const response = await axios.get(`/api/tenants/${tenantId}/payment-methods`);
        setPaymentMethods(response.data.map((method) => ({
          id: method.id,
          lastFourDigits: method.lastFourDigits, // Mask full card details
          type: method.type, // Visa, Mastercard, etc.
        })));
      } catch (error) {
        console.error('Error fetching payment methods:', error);
      }
    };

    fetchPaymentMethods();
  }, []);

  return (
    <div>
      <h2>Payment Methods</h2>
      <ul>
        {paymentMethods.map((method) => (
          <li key={method.id}>
            {method.type} ending in **** {method.lastFourDigits}
            {/* Options for editing or deleting methods can be added here, but ensure proper security measures are implemented  */}
          </li>
        ))}
        {/* Optionally, add a button to link to a secure payment gateway for adding new methods */}
      </ul>
    </div>
  );
}

export default PaymentMethods;
