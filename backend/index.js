// backend/index.js
import express from 'express';
//import connectToDatabase from './connectToDatabase';

const app = express();
const port = 8001;

app.use(express.json());

// Connect to MongoDB
//connectToDatabase().then(()=>{
  // Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

