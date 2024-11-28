import { Router } from 'express' // Importa o Router do Express
import userRoutes from './user.routes' // Importa as rotas de usuário
import jornalistaRoutes from './jornalista.routes' // Importa as rotas de jornalista
import adminRoutes from './admin.routes' // Importa as rotas de admin
import postagensRoutes from './postagem.routes' // Importa as rotas de postagens

const router = Router() // Cria uma instância do Router

router.use('/users', userRoutes) // Define o prefixo para as rotas de usuário
router.use('/jornalistas', jornalistaRoutes) // Define o prefixo para as rotas de jornalista
router.use('/admins', adminRoutes) // Define o prefixo para as rotas de admin
router.use('/postagens', postagensRoutes) // Define o prefixo para as rotas de postagens

export default router // Exporta o router