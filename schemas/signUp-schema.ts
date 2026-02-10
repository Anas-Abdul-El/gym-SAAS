import z from "zod"

export const signUpSchema = z.object({
    email: z.string().email({
        message: "This is not an email exp"
    }),

    password: z.string().min(1, {
        message: "Password is required"
    }),

    name: z.string().min(1, {
        message: "Name is required"
    }),

    company: z.string().min(1, {
        message: "Company is required"
    }),

})

export type SignUpSchemaType = z.infer<typeof signUpSchema>