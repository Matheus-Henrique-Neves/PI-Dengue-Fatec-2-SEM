import { Request, Response } from 'express' // Importa os tipos do Express
import { createPostagemService, deletePostagemService, findAllPostagensService, findPostagemByIdService, updatePostagemService, findPostagemWithAuthorByIdService } from '../services/postagem.services' // Importa os métodos do serviço

export const createPostagem = async (req: Request, res: Response) => {
  try {
    const postagem = await createPostagemService(req.body) // Cria uma nova postagem
    return res.status(201).json(postagem) // Retorna a postagem criada
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}

export const findAllPostagens = async (req: Request, res: Response) => {
  const postagens = await findAllPostagensService() // Busca todas as postagens
  return res.status(200).json(postagens) // Retorna as postagens
}

export const findPostagemById = async (req: Request, res: Response) => {
  try {
    const postagem = await findPostagemByIdService(Number(req.params.id)) // Busca uma postagem pelo id
    return res.status(200).json(postagem) // Retorna a postagem
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}

export const updatePostagem = async (req: Request, res: Response) => {
  try {
    const postagem = await updatePostagemService(Number(req.params.id), req.body) // Atualiza uma postagem
    return res.status(200).json(postagem) // Retorna a postagem atualizada
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}

export const deletePostagem = async (req: Request, res: Response) => {
  try {
    await deletePostagemService(Number(req.params.id)) // Deleta uma postagem
    return res.status(204).send() // Retorna uma resposta vazia
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}

export const findPostagemWithAuthorById = async (req: Request, res: Response) => {
  try {
    const postagem = await findPostagemWithAuthorByIdService(Number(req.params.id)) // Busca uma postagem pelo id e inclui o jornalista
    return res.status(200).json(postagem) // Retorna a postagem com o jornalista
  } catch (error) {
    return res.status(400).json({ message: error }) // Retorna um erro
  }
}