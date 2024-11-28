import { createJornalista, deleteJornalista, findAllJornalistas, findJornalistaByEmail, findJornalistaById, updateJornalista } from '../repositories/jornalista.repositories' // Importa os métodos do repositório

export const createJornalistaService = async (data: { Nome: string; Email: string; Senha: string }) => {
  const jornalista = await findJornalistaByEmail(data.Email) // Busca um jornalista pelo e-mail

  if (jornalista) {
    throw new Error('Jornalista já existe') // Se o jornalista já existir, lança um erro
  }

  return createJornalista(data) // Cria um novo jornalista
}

export const findAllJornalistasService = async () => {
  return findAllJornalistas() // Busca todos os jornalistas
}

export const updateJornalistaService = async (ID: number, Data: { Nome: string; Email: string; Senha: string }) => {
  const jornalista = await findJornalistaById(ID) // Busca um jornalista pelo id

  if (!jornalista) {
    throw new Error('Jornalista não encontrado') // Se o jornalista não existir, lança um erro
  }

  return updateJornalista(ID, Data) // Atualiza um jornalista
}

export const deleteJornalistaService = async (ID: number) => {
  const jornalista = await findJornalistaById(ID) // Busca um jornalista pelo id

  if (!jornalista) {
    throw new Error('Jornalista não encontrado') // Se o jornalista não existir, lança um erro
  }

  return deleteJornalista(ID) // Deleta um jornalista
}