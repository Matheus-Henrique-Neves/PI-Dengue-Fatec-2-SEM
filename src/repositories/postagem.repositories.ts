import Postagens from '../entities/postegens.entities' // Importa o modelo de postagens

export const createPostagem = async (data: { Titulo: string, Texto: string, Img: Buffer, Data: Date, Visibilidade?: boolean, fk_Usuario_ID?: number }) => {
  return Postagens.create({ data }) // Cria uma nova postagem
}

export const findAllPostagens = async () => {
  return Postagens.findMany() // Busca todas as postagens
}

export const findPostagemById = async (ID: number) => {
  return Postagens.findFirst({ where: { ID } }) // Busca uma postagem pelo id
}

export const updatePostagem = async (ID: number, data: { Titulo?: string, Texto?: string, Img?: Buffer, Data?: Date, Visibilidade?: boolean, fk_Usuario_ID?: number }) => {
  return Postagens.update({ where: { ID }, data }) // Atualiza uma postagem
}

export const deletePostagem = async (ID: number) => {
  return Postagens.delete({ where: { ID } }) // Deleta uma postagem
}

export const findPostagemWithAuthorById = async (ID: number) => {
  return Postagens.findFirst({
    where: { ID },
    include: { jornalista: true } // Inclui o jornalista que escreveu a postagem
  }) // Busca uma postagem pelo id e inclui o jornalista
}