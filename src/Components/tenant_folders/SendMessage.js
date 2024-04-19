import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for API calls

function SendMessage({ propertyId }) {
  const [message, setMessage] = useState('');
  const tenantId = localStorage.getItem('tenantId'); // Assuming tenant ID is stored in localStorage

  const sendMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/messages', {
        content: message,
        tenantId,
        propertyId,
      });
      console.log('Message sent:', response.data);
      setMessage(''); // Clear message after sending
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div>
      <h2>Send Message to Landlord</h2>
      <form onSubmit={sendMessage}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message..."
        />
        <button type="submit">Send</button>
      </form>
      {/* Add functionality to view message history (optional) */}
    </div>
  );
}

export default SendMessage;