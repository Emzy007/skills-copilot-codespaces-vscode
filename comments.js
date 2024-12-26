// Create web server with Express.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
// Run the server
// $ node comments.js
// Server is running on port 3000
// Open your browser and navigate to http://localhost:3000
// You should see Hello World! on the page