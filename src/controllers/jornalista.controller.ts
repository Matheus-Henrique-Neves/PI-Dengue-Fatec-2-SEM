import { Request, Response } from 'express' // Importa os tipos do Express
import { createJornalistaService, deleteJornalistaService, findAllJornalistasService, updateJornalistaService } from '../services/jornalista.services' // Importa os métodos do serviço

export const createJornalista = async (req: Request, res: Response) => {
  try {
    const jornalista = await createJornalistaService(req.body) // Cria um novo jornalista
    return res.status(201).json(jornalista) // Retorna o jornalista criado
  } catch (error) {
    if ((error as Error).message === 'Usuário já existe') return res.status(400).json({ "message": "usuario ja existe"  }) // Retorna um erro  
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}

export const findAllJornalistas = async (req: Request, res: Response) => {
  const jornalistas = await findAllJornalistasService() // Busca todos os jornalistas
  return res.status(200).json(jornalistas) // Retorna os jornalistas
}

export const updateJornalista = async (req: Request, res: Response) => {
  try {
    const jornalista = await updateJornalistaService(Number(req.params.id), req.body) // Atualiza um jornalista
    return res.status(200).json(jornalista) // Retorna o jornalista atualizado
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}

export const deleteJornalista = async (req: Request, res: Response) => {
  try {
    await deleteJornalistaService(Number(req.params.id)) // Deleta um jornalista
    return res.status(204).send() // Retorna uma resposta vazia
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}