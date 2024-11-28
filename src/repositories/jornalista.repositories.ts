import Jornalista from '../entities/jornalista.entities' // Importa o modelo de jornalista

export const createJornalista = async (data: { Nome: string, Email: string, Senha: string }) => {
  return Jornalista.create({ data }) // Cria um novo jornalista
}

export const findAllJornalistas = async () => {
  return Jornalista.findMany() // Busca todos os jornalistas
}

export const findJornalistaByEmail = async (Email: string) => {
  return Jornalista.findFirst({ where: { Email } }) // Busca um jornalista pelo e-mail
}

export const updateJornalista = async (ID: number, data: { Nome: string, Email: string, Senha: string }) => {
  return Jornalista.update({ where: { ID }, data }) // Atualiza um jornalista
}

export const deleteJornalista = async (ID: number) => {
  return Jornalista.delete({ where: { ID } }) // Deleta um jornalista
}

export const findJornalistaById = async (ID: number) => {
  return Jornalista.findFirst({ where: { ID } }) // Busca um jornalista pelo id
}