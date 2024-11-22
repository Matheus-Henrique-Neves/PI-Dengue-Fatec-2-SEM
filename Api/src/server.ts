import express from 'express';
import axios from 'axios';
import cors from 'cors';


// Criando uma nova aplicação Express
const app = express();

// Permitindo todas as solicitações CORS
app.use(cors());

// Rota que irá lidar com a solicitação
app.get('/apidengue', async (req, res) => {
    try {
        // Fazendo a solicitação para a API
        const apiRes = await axios.get('https://info.dengue.mat.br/api/alertcity/?geocode=3520509&disease=dengue&format=json&ew_start=16&ey_start=2023&ew_end=17&ey_end=2024');

        // Enviando a resposta da API de volta ao cliente
        res.json(apiRes.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Ocorreu um erro ao acessar a API');
    }
});

//app.get('/apiserver',routes)

// Iniciando o servidor na porta 3000
app.listen(3000, () => console.log('Servidor rodando na porta 3000, acesse http://localhost:3000/apidengue'));
