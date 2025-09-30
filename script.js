const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const path = require('path');
const { getJson } = require("serpapi");
app.use(cors());
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.get('/teams', async (req, res) => {
  try {
    const data = await getJson({
      engine: "google",
      api_key: "42031a69d250ede8ac5f156c3b5a75376cacfb4e8c5fb3d96d4f0788b74124ff",
      q: "Jogos atlético mg",
      location: "Brazil" 
    });

    res.json(data.sports_results || data); 
  } catch (error) {
    console.error("Erro ao buscar jogos:", error);
    res.status(500).json({ error: error.message });
  }
});


app.listen(3000);
