const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const path = require('path');
app.use(cors());
app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.get('/areas', async (req, res) => {
  try {
    const response = await axios.get('http://api.football-data.org/v4/areas/', {
      headers: {
        'X-Auth-Token': '6d67e83fb5f9427185b8a31be079b511'
      }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
});
app.get('/teams', async (req, res) => {
  try {
    const response = await axios.get('http://api.football-data.org/v4/teams/1766/matches', {
      headers: {
        'X-Auth-Token': '6d67e83fb5f9427185b8a31be079b511'
      },
      params:{
        status: "SCHEDULED"
      }
    });
    console.log(response.data)
    res.json(response.data);

    
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
});


app.listen(3000);
