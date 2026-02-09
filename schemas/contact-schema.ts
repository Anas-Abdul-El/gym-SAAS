import z from "zod";

export const contactSchema = z.object({
    name: z.string({
        message: "name is required"
    }).min(1, {
        message: "Name is required"
    }),

    email: z.string({
        message: "email is required"
    }).email({
        message: "Not an email address exp"
    }),

    company: z.string({
        message: "company is required"
    }).min(1, {
        message: "company is required"
    }),

    phone: z.string({
        message: "phone is required"
    }).min(1, {
        message: "phone is required"
    }),

    subject: z.string({
        message: "subject is requird"
    }).min(1, {
        message: "subject is required"
    }),

    message: z.string({
        message: "msg is requird"
    }).min(1, {
        message: "msg is required"
    }),
})

export type contactSchemaType = z.infer<typeof contactSchema>