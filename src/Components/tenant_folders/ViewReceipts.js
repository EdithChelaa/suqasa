import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls

const downloadReceipt = async (receiptId) => {
    try {
      const response = await axios.get(`/api/receipts/${receiptId}/download`);
      // Handle the downloaded receipt data (e.g., display a link, trigger a download)
      console.log('Receipt downloaded:', response.data); // Example logging
    } catch (error) {
      console.error('Error downloading receipt:', error);
    }
  };
  

function ViewReceipts({ paymentId }) {
  const [receipt, setReceipt] = useState(null);

  useEffect(() => {
    const fetchReceipt = async () => {
      try {
        const response = await axios.get(`/api/payments/${paymentId}/receipt`);
        setReceipt(response.data);
      } catch (error) {
        console.error('Error fetching receipt:', error);
      }
    };

    if (paymentId) {
      fetchReceipt();
    }
  }, [paymentId]);

  return (
    <div>
      {receipt ? (
        <div>
          <h2>Receipt for Payment #{paymentId}</h2>
          {/* Display receipt details (landlord info, tenant info, property details, payment details) */}
          <button onClick={() => downloadReceipt(receipt.id)}>Download PDF</button>
        </div>
      ) : (
        <p>Loading receipt...</p>
      )}
    </div>
  );
}

export default ViewReceipts;