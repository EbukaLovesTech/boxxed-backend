require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(express.json());

const STRAPI_URL = process.env.STRAPI_URL;

// Fetch blog posts
app.get('/api/boxxeds', async (req, res) => {
  try {
    const response = await axios.get(`${STRAPI_URL}/api/boxxeds`);
    res.json(response.data);
  } catch (error) {
    console.error("Strapi Fetch Error:", error.response?.data || error.message);
    res.status(500).json({ error: 'Error fetching posts' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
