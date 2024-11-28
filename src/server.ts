import express from 'express';
import axios from 'axios';
import cors from 'cors';
import routes from './routes';

const app = express();// Criando uma nova aplicação Express
const PORT = 3000 // Define a porta do servidor
app.use(express.json()) // Habilita o uso de JSON nas requisições
app.use(cors());// Permitindo todas as solicitações CORS

// Rota que irá lidar com a solicitação


app.use('/apiserver', routes); // Define o prefixo para as rotas

app.get('/apidengue/', async (req, res) => {
    try {
        // Fazendo a solicitação para a API
        const apiRes = await axios.get('https://info.dengue.mat.br/api/alertcity/?geocode=3520509&disease=dengue&format=json&ew_start=16&ey_start=2023&ew_end=17&ey_end=2024');

        // Enviando a resposta da API de volta ao cliente
        res.json(apiRes.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Ocorreu um erro ao acessar a API');
    }
});// Iniciando o servidor na porta 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}, acesse http://localhost:${PORT}/apiserver`));

