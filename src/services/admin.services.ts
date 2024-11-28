import { createAdmin, deleteAdmin, findAllAdmins, findAdminByEmail, findAdminById, updateAdmin } from '../repositories/admin.repositories' // Importa os métodos do repositório

export const createAdminService = async (data: { Nome: string; Email: string; Senha: string }) => {
  const admin = await findAdminByEmail(data.Email) // Busca um admin pelo e-mail

  if (admin) {
    throw new Error('Admin já existe') // Se o admin já existir, lança um erro
  }

  return createAdmin(data) // Cria um novo admin
}

export const findAllAdminsService = async () => {
  return findAllAdmins() // Busca todos os admins
}

export const updateAdminService = async (ID: number, Data: { Nome: string; Email: string; Senha: string }) => {
  const admin = await findAdminById(ID) // Busca um admin pelo id

  if (!admin) {
    throw new Error('Admin não encontrado') // Se o admin não existir, lança um erro
  }

  return updateAdmin(ID, Data) // Atualiza um admin
}

export const deleteAdminService = async (ID: number) => {
  const admin = await findAdminById(ID) // Busca um admin pelo id

  if (!admin) {
    throw new Error('Admin não encontrado') // Se o admin não existir, lança um erro
  }

  return deleteAdmin(ID) // Deleta um admin
}