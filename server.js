
const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = 3000;
const OPENAI_API_KEY = 'TU_API_KEY_AQUI';

app.use(bodyParser.json());

app.post('/api/chat', async (req, res) => {
  const { pregunta } = req.body;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-4',
      messages: [{ role: 'user', content: pregunta }],
      max_tokens: 300,
      temperature: 0.2
    })
  });

  const data = await response.json();
  res.json({ respuesta: data.choices[0]?.message?.content || 'No hay respuesta' });
});

app.listen(PORT, () => console.log(`Servidor escuchando en puerto ${PORT}`));
