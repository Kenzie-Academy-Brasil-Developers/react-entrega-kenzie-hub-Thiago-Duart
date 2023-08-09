import { z } from "zod";

export const validate = z
  .object({
    name: z.string().nonempty("Nome é obrigatorio"),
    email: z
      .string()
      .nonempty("E-mail é obrigatorio")
      .email("digite um e-mail válido"),
    password: z
      .string()
      .nonempty("Senha é obrigatoria")
      .min(8, "É necessário pelo menos oito caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário pelomenos uma letra Maiuscula")
      .regex(/(?=.*?[a-z])/, "É necessário pelomenos uma letra Minuscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelomenos uma letra um numero"),
    confirm_password: z.string().nonempty("Confirmação de senha obrigatorio"),
    bio: z.string().nonempty("bio e Obrigatoria"),
    contact: z.string().nonempty("O numero de contato e obrigatorio"),
    course_module: z.string().nonempty("Modulo Obrigatorio"),
  })
  .refine((validate) => validate.password === validate.confirm_password, {
    message: "As senhas não são iguais",
    path: ["confirm_password"],
  });
