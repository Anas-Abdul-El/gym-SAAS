import z from "zod";

export const contactSchema = z.object({
    name: z.string().min(1, {
        message: "Name is required"
    }),

    email: z.string().email({
        message: "Not an email address exp"
    }),

    company: z.string().min(1, {
        message: "Company is required"
    }),

    phone: z.string().min(1, {
        message: "Phone is required"
    }),

    subject: z.string().min(1, {
        message: "Subject is required"
    }),

    message: z.string().min(1, {
        message: "Msg is required"
    }),
})

export type contactSchemaType = z.infer<typeof contactSchema>