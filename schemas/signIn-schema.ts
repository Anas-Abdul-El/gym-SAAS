import z from "zod";

export const signInSchema = z.object({
    email: z.string().email({
        message: "this is not an email exp"
    }),
    password: z.string().min(1, {
        message: "password is required"
    })
})

export type SignInSchemaType = z.infer<typeof signInSchema>