"use client"
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type SignUpSchemaType, signUpSchema } from '../../../../schemas/signUp-schema'
import { Input } from '@/components/ui/input'
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    Chrome,
    Github,
    User,
    Building
} from 'lucide-react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { ReactElement, useState, useTransition } from 'react'
import Link from 'next/link'
import { githubSignIn } from '../../../../server-actions/signInToGithup'
import { googleSignIn } from '../../../../server-actions/signInToGoogle'
import { signUpAction } from '../../../../server-actions/signUpAction'
import { redirect } from 'next/navigation'

type Input = {
    label: string,
    name: "name" | "email" | "company" | "password",
    placeholder: string,
    type: string,
    icon: React.ElementType,
}

const inputs: Array<Input> = [
    {
        label: "full name",
        name: "name",
        placeholder: "John Doe",
        type: "text",
        icon: User,
    },
    {
        label: "email address",
        name: "email",
        placeholder: "you@example.com",
        type: "email",
        icon: Mail,
    },
    {
        label: "company name",
        name: "company",
        placeholder: "Your Gym Name",
        type: "text",
        icon: Building,
    },
]


function SignUpWr() {

    const [isPending, setTransition] = useTransition()
    const [error, setError] = useState<string>("")
    const [view, setView] = useState(false)

    const form = useForm<SignUpSchemaType>({
        defaultValues: {
            email: "",
            password: "",
            name: "",
            company: "",
        },
        resolver: zodResolver(signUpSchema)
    })

    const handleGithub = () => {
        githubSignIn()
    }

    const handleGoogle = () => {
        googleSignIn()
    }

    const submit = (data: SignUpSchemaType) => {

        setTransition(() => {
            signUpAction(data)
                .then(res => {
                    if (res?.error) {
                        setError(res.error)
                    }
                    else {
                        redirect("/auth/signIn")
                    }
                })
        })

    }

    const { control, handleSubmit } = form

    return (
        <div className='w-full h-full flex flex-col items-center p-4 sm:p-0'>
            <div className='flex flex-col sm:w-110 w-full bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 shadow-2xl rounded-2xl space-y-7 my-30 '>
                <div className='flex flex-col justify-center items-center space-y-3'>
                    <h1 className='text-white font-bold text-4xl'>Welcome Back</h1>
                    <p className='text-gray-400'>start your free trial with FitFlow Pro</p>
                </div>
                <div className='flex flex-col space-y-2 h-fit'>
                    <Button onClick={handleGoogle} className='bg-white/5 border-2 border-white/9 hover:bg-white/10'>
                        <Chrome size={24} className='' />
                        <p> Continue with Google</p>
                    </Button>
                    <Button onClick={handleGithub} className='bg-white/5 border-2 border-white/9 hover:bg-white/10'>
                        <Github />
                        <p> Continue with Github</p>
                    </Button>
                </div>
                <div className='w-full my-4'>
                    <div className='bg-white/10 w-full h-px'></div>
                    <div className='bg-black w-fit px-3 relative -top-3 mx-auto'>
                        <p className='text-gray-400 text-sm'>Or continue with email</p>
                    </div>
                </div>

                <Form {...form}>
                    <form
                        action=""
                        noValidate
                        onSubmit={handleSubmit(submit)}
                        className='text-white flex flex-col'
                    >

                        {
                            inputs.map((ele, id) => (
                                <FormField
                                    key={id}
                                    name={ele.name}
                                    control={control}
                                    render={({ field }) => (
                                        <FormItem className='h-23 flex flex-col'>
                                            <div className=' flex justify-between items-end w-full h-5'>
                                                <FormLabel>{ele.label}</FormLabel>
                                                <FormMessage />
                                            </div>
                                            <div className='relative w-full'>
                                                <ele.icon size={21} className={`absolute  text-gray-500 top-3 left-3`} />
                                                <FormControl>
                                                    <Input
                                                        placeholder={ele.placeholder}
                                                        type={ele.type}
                                                        autoComplete='password'
                                                        className='pl-12 pr-4 py-5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all'
                                                        {...field}
                                                    />
                                                </FormControl>
                                            </div>
                                        </FormItem>
                                    )}
                                />
                            ))
                        }

                        <FormField
                            name='password'
                            control={control}
                            render={({ field }) => (
                                <FormItem className='h-23 flex flex-col'>
                                    <div className=' flex justify-between items-end w-full h-5'>
                                        <FormLabel>Password</FormLabel>
                                        <FormMessage />
                                    </div>
                                    <div className='relative w-full'>
                                        <Lock size={21} className='absolute top-3 left-3 text-gray-500' />
                                        {
                                            view ? (
                                                <EyeOff size={21} className='absolute bottom-3 left-8/9 text-gray-500 cursor-pointer' onClick={() => setView(false)} />
                                            ) : (
                                                <Eye size={21} className='absolute bottom-3 left-8/9 text-gray-500 cursor-pointer' onClick={() => setView(true)} />
                                            )
                                        }
                                        <FormControl>
                                            <Input
                                                placeholder='Enter your password'
                                                type={view ? "text" : "password"}
                                                autoComplete='password'
                                                className='pl-12 pr-4 py-5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all'
                                                {...field}
                                            />
                                        </FormControl>
                                    </div>
                                </FormItem>
                            )}
                        />

                        {
                            error && (
                                <p className='py-2 px-4 w-full text-red-400 border border-destructive/20 from-destructive/10 to-destructive/30 font-bold rounded-sm bg-radial '>
                                    {error}
                                </p>
                            )
                        }

                        <Button
                            disabled={isPending}
                            type='submit'
                            className='flex justify-center items-center py-5 bg-linear-to-r shadow-lg shadow-green-500/50 group from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-lg transition-all my-5'>
                            <p className='text-xl'>Sign In</p>
                        </Button>
                    </form>
                </Form>

                <div className='sm:w-4/5 mx-auto flex space-x-1'>
                    <p className='text-gray-400'>Don't have an account? </p>
                    <Link className='text-green-400 font-semibold' href={"/auth/signIn"}>Sign up for free</Link>
                </div>
            </div>
        </div>
    )
}

export default SignUpWr