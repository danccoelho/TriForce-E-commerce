const express = require('express');
const cors = require('cors');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const supabaseUrl = 'https://ydsdbsellhxobduillkk.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlkc2Ric2VsbGh4b2JkdWlsbGtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3NzU0NzgsImV4cCI6MjA1NzM1MTQ3OH0.jc6qWqF7zNtsihvm62yFBoTOvtN8KxEQ9c8bF1r0q8Y';
const supabase = createClient(supabaseUrl, supabaseKey);

app.post('/api/Cadastro', async (req, res) => {
  console.log('Recebido no backend:', req.body);
  const { nome, sobrenome, email, senha } = req.body;

  if (!nome || !sobrenome || !email || !senha) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    const { data, error } = await supabase
      .from('cliente')
      .insert([{ nome, sobrenome, email, senha }]);

    if (error) {
      console.error('Erro ao inserir no Supabase:', error.message, error.details);
      return res.status(500).json({ message: 'Erro ao cadastrar cliente.', error });
    }

    console.log('Cliente cadastrado com sucesso:', data);
    return res.status(200).json({ message: 'Cliente cadastrado com sucesso!', data });
  } catch (err) {
    console.error('Erro inesperado no servidor:', err);
    return res.status(500).json({ message: 'Erro inesperado no servidor.', error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});