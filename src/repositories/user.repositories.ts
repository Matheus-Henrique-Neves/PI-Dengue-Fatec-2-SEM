import { CreateUserDto } from '../dtos/user.dto'
import User from '../entities/user.entities' // Importa o modelo de usuário

export const createUser = async (data: CreateUserDto) => {
  const newUser = await User.create({ data }) // Cria um novo usuário
  return { ...newUser, Senha: undefined } // Remove a senha do usuário antes de retornar
}

export const findAllUsers = async () => {
  return User.findMany() // Busca todos os usuários
}

export const findUserByEmail = async (Email: string) => {
  return User.findFirst({ where: { Email } }) // Busca um usuário pelo e-mail
}
export const updateUser = async (ID: number, data: { Nome: string, Email: string, Senha: string }) => {
    return User.update({ where: { ID }, data }) // Atualiza um usuário
  }
  
  export const deleteUser = async (ID: number) => {
    return User.delete({ where: { ID } }) // Deleta um usuário
  }
  
  export const findUserById = async (ID: number) => {
    return User.findFirst({ where: { ID } }) // Busca um usuário pelo id
  }  