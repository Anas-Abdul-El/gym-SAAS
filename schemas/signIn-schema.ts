import z from "zod";

export const signInSchema = z.object({
    email: z.string().email({
        message: "This is not an email exp"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    })
})

export type SignInSchemaType = z.infer<typeof signInSchema>