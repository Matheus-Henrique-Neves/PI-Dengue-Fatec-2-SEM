import { Router } from 'express' // Importa o Router do Express
import { authenticateUser, createUser, deleteUser, findAllUsers, updateUser } from '../controllers/user.controller' // Importa os métodos do controlador
import { validate } from '../middlewares/user.middleware' // Importa o middleware de validação
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto' // Importa o DTO de usuário
import { auth } from '../middlewares/auth.middleware'
import asyncHandler from '../middlewares/asyncHeadler.middleware'

const router = Router() // Cria uma instância do Router
//Todas as rotas foram verificadas e estão funcionando corretamente
//Corigidas por: Matheus Henrique
router.post('/',asyncHandler(validate(CreateUserDto)), asyncHandler(createUser)) // Define a rota para criar um usuário
router.get('/',asyncHandler(auth) ,asyncHandler(findAllUsers)) // Define a rota para buscar todos os usuários
router.patch('/:id',asyncHandler(auth) , asyncHandler(validate(UpdateUserDto)), asyncHandler(updateUser)) // Define a rota para atualizar um usuário
router.delete('/:id',asyncHandler(auth) , asyncHandler(deleteUser)) // Define a rota para deletar um usuário
router.post('/authenticate', asyncHandler(authenticateUser)) // Define a rota para autenticar um usuário



export default router // Exporta o router