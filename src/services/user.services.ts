import { CreateUserDto } from '../dtos/user.dto'
import { createUser, deleteUser, findAllUsers, findUserByEmail, findUserById, updateUser } from '../repositories/user.repositories' // Importa os métodos do repositório

import bcrypt from 'bcrypt'

export const createUserService = async (data: CreateUserDto) => {
  const user = await findUserByEmail(data.Email) // Busca um usuário pelo e-mail

  if (user) {
    throw new Error('Usuário já existe') // Se o usuário já existir, lança um erro
  }

  const Senha = await bcrypt.hash(data.Senha, 10) // Criptografa a senha e escolhe o número de rounds, quanto maior o número, mais seguro é o hash (mas também mais lento)
  
  return createUser({ ...data, Senha }) // Aqui devemos passar a senha criptografada, estamos usando os 3 pontos para copiar todas as propriedades de data e adicionar a senha criptografada (é uma forma de fazer um merge de objetos, isso leva o nome de spread operator)
}

export const findAllUsersService = async () => {
  return findAllUsers() // Busca todos os usuários
}
export const updateUserService = async (ID: number, Data: { Nome: string; Email: string; Senha: string }) => {
    const user = await findUserById(ID) // Busca um usuário pelo id
  
    if (!user) {
      throw new Error('Usuário não encontrado') // Se o usuário não existir, lança um erro
    }
  
    return updateUser(ID, { Nome: Data.Nome, Email: Data.Email, Senha: Data.Senha }) // Atualiza um usuário
  }
  export const deleteUserService = async (ID: number) => {
    const user = await findUserById(ID) // Busca um usuário pelo id
  
    if (!user) {
      throw new Error('Usuário não encontrado') // Se o usuário não existir, lança um erro
    }
  
    return deleteUser(ID) // Deleta um usuário
  }

  import * as jose from 'jose'

export const authenticateUserService = async (Email: string, Senha: string) => {
  const user = await findUserByEmail(Email) // Busca um usuário pelo e-mail

  if (!user) {
    throw new Error('Usuário não encontrado') // Se o usuário não existir, lança um erro
  }

  const isValid = await bcrypt.compare(Senha, user.Senha) // Compara a senha criptografada com a senha informada

  if (!isValid) {
    throw new Error('Senha inválida') // Se a senha for inválida, lança um erro
  }

  const payload = { ID: user.ID, Email: user.Email } // Cria um payload com o id e o e-mail do usuário
  const secret = new TextEncoder().encode(process.env.JWT_SECRET) // Pega a chave secreta do JWT do arquivo .env - essa chave é usada para assinar o token e não deve ser exposta
  const alg = 'HS256' // Define o algoritmo de criptografia

  const token = await new jose.SignJWT(payload)
    .setProtectedHeader({ alg })
    .setIssuedAt() // Define a data de emissão do token
    .setIssuer('http://localhost:3000') // Define o emissor do token
    .setSubject('users') // Define o assunto do token
    .setExpirationTime('1h') // Define o tempo de expiração do token
    .sign(secret) // Assina o token com a chave secreta


  return token // Retorna o token
}



