"use server"
import { signIn } from "@/lib/auth";
import { signInSchema, type SignInSchemaType } from "../schemas/signIn-schema";
import { AuthError } from "next-auth";

export const signInAction = async (data: SignInSchemaType) => {

    const validatedData = signInSchema.safeParse(data)

    if (!validatedData.success) return { error: "invalid credanials" }
    const { email, password } = validatedData.data

    try {
        await signIn("credentials", {
            email,
            password,
            redirectTo: "/"
        })
    } catch (error) {
        if (error instanceof AuthError) return { error: "Email or Password is Wrong" }

        throw error
    }

}