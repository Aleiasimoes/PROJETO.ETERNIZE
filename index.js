const express = require('express');
const app = express();
const PORT = 3000;

// Rota inicial
app.get('/', (req, res) => {
  res.send('Oiee!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
