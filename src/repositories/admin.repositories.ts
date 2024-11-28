import Admin from '../entities/admin.entities' // Importa o modelo de admin

export const createAdmin = async (data: { Nome: string, Email: string, Senha: string }) => {
  return Admin.create({ data }) // Cria um novo admin
}

export const findAllAdmins = async () => {
  return Admin.findMany() // Busca todos os admins
}

export const findAdminByEmail = async (Email: string) => {
  return Admin.findFirst({ where: { Email } }) // Busca um admin pelo e-mail
}

export const updateAdmin = async (ID: number, data: { Nome: string, Email: string, Senha: string }) => {
  return Admin.update({ where: { ID }, data }) // Atualiza um admin
}

export const deleteAdmin = async (ID: number) => {
  return Admin.delete({ where: { ID } }) // Deleta um admin
}

export const findAdminById = async (ID: number) => {
  return Admin.findFirst({ where: { ID } }) // Busca um admin pelo id
}