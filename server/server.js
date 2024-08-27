const express = require('express');
const app = express();
const port = 3000; // You can choose any port

// Basic route
app.get('/', (req, res) => {
  res.send('Hello');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
