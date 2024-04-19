import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls

function AmountPaid({ filterOptions }) {
  const [payments, setPayments] = useState([]);
  const tenantId = localStorage.getItem('tenantId'); // Assuming tenant ID is stored in localStorage

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const response = await axios.get(`/api/tenants/${tenantId}/payments`);
        setPayments(response.data);
      } catch (error) {
        console.error('Error fetching payments:', error);
      }
    };

    fetchPayments();
  }, [tenantId]); // Fetch payments when tenantId changes

  // Apply filtering logic within the rendering
  const filteredPayments = payments.filter((payment) => {
    const paymentDate = new Date(payment.date);
    return (
      (!filterOptions.startDate || paymentDate >= filterOptions.startDate) &&
      (!filterOptions.endDate || paymentDate <= filterOptions.endDate) &&
      (filterOptions.status === 'all' || filterOptions.status === payment.status)
    );
  });

  return (
    <div>
      <h2>Amount Paid</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredPayments.map((payment) => (
            <tr key={payment.id}>
              <td>{payment.date}</td>
              <td>{payment.amount}</td>
              <td>{payment.method}</td>
              <td>{payment.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AmountPaid;
