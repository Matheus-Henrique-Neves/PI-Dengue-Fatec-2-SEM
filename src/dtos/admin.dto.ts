import { IsEmail, IsNotEmpty, IsString, MinLength, IsOptional } from 'class-validator' // Importa os decoradores de validação

export class CreateAdminDto {
  @IsString()
  @IsNotEmpty()
  Nome!: string

  @IsEmail()
  @IsNotEmpty()
  Email!: string

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  Senha!: string
}

export class UpdateAdminDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  Nome?: string

  @IsOptional()
  @IsEmail()
  Email?: string

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  Senha?: string
}