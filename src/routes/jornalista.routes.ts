import { Router } from 'express' // Importa o Router do Express
import { createJornalista, deleteJornalista, findAllJornalistas, updateJornalista } from '../controllers/jornalista.controller' // Importa os métodos do controlador
import { validate } from '../middlewares/user.middleware' // Importa o middleware de validação
import { CreateUserDto } from '../dtos/user.dto' // Importa o DTO de usuário (pode ser reutilizado para jornalista)
import asyncHandler from '../middlewares/asyncHeadler.middleware'

const router = Router() // Cria uma instância do Router

router.post('/', asyncHandler(validate(CreateUserDto)), asyncHandler(createJornalista)) // Define a rota para criar um jornalista
router.get('/', asyncHandler(findAllJornalistas)) // Define a rota para buscar todos os jornalistas
router.patch('/:id', asyncHandler(validate(CreateUserDto)), asyncHandler(updateJornalista)) // Define a rota para atualizar um jornalista
router.delete('/:id', asyncHandler(deleteJornalista)) // Define a rota para deletar um jornalista

export default router // Exporta o router