"use server"
import prisma from "@/lib/prisma";
import { signUpSchema, type SignUpSchemaType } from "../schemas/signUp-schema";
import bcrypt from "bcrypt"

export const signUpAction = async (data: SignUpSchemaType) => {
    const validatedData = signUpSchema.safeParse(data)

    if (!validatedData.success) return { error: "invalid credanials" }
    const { email, password, company, name } = validatedData.data

    const isUserExist = await prisma.user.findUnique({ where: { email } })

    if (isUserExist) return { error: "User exist" }

    const hashedPassword = await bcrypt.hash(password, 10)

    try {
        await prisma.user.create({
            data: {
                email,
                password: hashedPassword,
                company,
                name,
            }
        })
    } catch {
        return { error: "Something went wrong" }
    }
}