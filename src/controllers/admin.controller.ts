import { Request, Response } from 'express' // Importa os tipos do Express
import { createAdminService, deleteAdminService, findAllAdminsService, updateAdminService } from '../services/admin.services' // Importa os métodos do serviço

export const createAdmin = async (req: Request, res: Response) => {
  try {
    const admin = await createAdminService(req.body) // Cria um novo admin
    return res.status(201).json(admin) // Retorna o admin criado
  } catch (error) {
    if ((error as Error).message === 'Usuário já existe') return res.status(400).json({ "message": "usuario ja existe"  }) // Retorna um erro  
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}

export const findAllAdmins = async (req: Request, res: Response) => {
  const admins = await findAllAdminsService() // Busca todos os admins
  return res.status(200).json(admins) // Retorna os admins
}

export const updateAdmin = async (req: Request, res: Response) => {
  try {
    const admin = await updateAdminService(Number(req.params.id), req.body) // Atualiza um admin
    return res.status(200).json(admin) // Retorna o admin atualizado
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}

export const deleteAdmin = async (req: Request, res: Response) => {
  try {
    await deleteAdminService(Number(req.params.id)) // Deleta um admin
    return res.status(200).json({mensagem:"admin deletado"}) // Retorna uma resposta vazia
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}