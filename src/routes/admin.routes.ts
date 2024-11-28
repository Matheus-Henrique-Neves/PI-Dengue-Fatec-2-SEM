import { Router } from 'express' // Importa o Router do Express
import { createAdmin, deleteAdmin, findAllAdmins, updateAdmin } from '../controllers/admin.controller' // Importa os métodos do controlador
import { validate } from '../middlewares/user.middleware' // Importa o middleware de validação
import { CreateAdminDto, UpdateAdminDto } from '../dtos/admin.dto' // Importa o DTO de admin
import asyncHandler from '../middlewares/asyncHeadler.middleware'

const router = Router() // Cria uma instância do Router
//Todas as rotas foram verificadas e estão funcionando corretamente
//Corigidas por: Matheus Henrique
router.post('/', asyncHandler(validate(CreateAdminDto)), asyncHandler(createAdmin)) // Define a rota para criar um admin
router.get('/', asyncHandler(findAllAdmins)) // Define a rota para buscar todos os admins
router.patch('/:id', asyncHandler(validate(UpdateAdminDto)), asyncHandler(updateAdmin)) // Define a rota para atualizar um admin
router.delete('/:id', asyncHandler(deleteAdmin)) // Define a rota para deletar um admin

export default router // Exporta o router