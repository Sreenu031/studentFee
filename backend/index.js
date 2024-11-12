// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT =  5000; // You can change the port as needed

app.use(cors()); // Enable CORS for all routes

app.use(express.static(path.join(__dirname, 'client/build')));

// Handle all requests and serve the React index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.get('/api/fee-transactions', async (req, res) => {
    try {
        const response = await axios.get('https://indianservers.com/erpsandbox/getAllFeeTransactions.php');
        const data = response.data; // Assuming the API returns the data in the expected format
        res.json(data); // Send the data back to the client
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error fetching Datta' });
    }
});

app.get('/api/input', async (req, res) => {
  try {
    
    const { studentId } = req.query;  // Extract studentId from the query parameters
    
    // Check if studentId is provided
    if (!studentId) {
      return res.status(400).json({ message: 'Student ID is required' });
    }

    // Make a request to the external API using the studentId
    const response = await axios.get(`https://indianservers.com/erpsandbox/getStudDetails.php?studentId=${studentId}`);
    
    // Log the data in the console
    console.log('Received data from external API:', response.data);

    // Send the fetched data back to the React app
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching student data:', error);
    res.status(500).json({ message: 'Error fetching data' });
  }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});