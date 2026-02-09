import { useForm } from "react-hook-form"
import { type contactSchemaType, contactSchema } from "../../../schemas/contact-schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Button } from "../ui/button"

type Input = {
    label: string,
    placeholder: string,
    name: "name" | "email" | "company" | "phone" | "subject" | "message"
    type: string,
}


const inputs: Input[] = [
    {
        label: "Full Name",
        placeholder: "example",
        name: "name",
        type: "text",
    },
    {
        label: "Email Address",
        placeholder: "example@example.com",
        name: "email",
        type: "email",
    },
    {
        label: "Company Name",
        placeholder: "Your Gym Name",
        name: "company",
        type: "text",
    },
    {
        label: "Phone Number",
        placeholder: "00 000 000",
        name: "phone",
        type: "text",
    },
    {
        label: "Subject",
        placeholder: "example",
        name: "subject",
        type: "text",
    },
    {
        label: "Message",
        placeholder: "Tell us how we can help you...",
        name: "message",
        type: "text",
    },
]




function ContactForm() {

    const form = useForm<contactSchemaType>({
        defaultValues: {
            name: "",
            email: "",
            company: "",
            phone: "",
            subject: "",
            message: ""
        },
        resolver: zodResolver(contactSchema)
    })

    const { control, handleSubmit } = form

    const handle = (data: contactSchemaType) => {
        console.log(data);
    }

    return (

        <div className="p-7 lg:col-span-2 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 w-full">
            <Form {...form}>
                <form action="" onSubmit={handleSubmit(handle)} noValidate className="flex flex-col space-y-6">
                    <h1 className="text-2xl font-bold">Send us a Message</h1>
                    {
                        inputs.map((input, id) => (
                            <div key={id}>
                                <FormField
                                    control={control}
                                    name={input.name}
                                    render={({ field }) => (
                                        <FormItem>
                                            <div className="flex justify-between w-full">
                                                <FormLabel>{input.label}</FormLabel>
                                                <FormMessage />
                                            </div>
                                            <FormControl>
                                                <Input
                                                    {...field}
                                                    type={input.type}
                                                    placeholder={input.placeholder}
                                                    className=" border-2 border-white/10"
                                                />
                                            </FormControl>
                                        </FormItem>
                                    )}
                                />
                            </div>
                        ))
                    }
                    <Button type="submit" className=" py-8 bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/50 group">
                        <p className=" capitalize ">send message</p>
                        <Send className="group-hover:-translate-y-1 group-hover:translate-x-1 duration-300 transition-all" />
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default ContactForm