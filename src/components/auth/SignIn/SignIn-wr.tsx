"use client"
import { Button } from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { signInSchema, type SignInSchemaType } from '../../../../schemas/signIn-schema'
import { Input } from '@/components/ui/input'
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    ArrowRight,
    Chrome,
    Github
} from 'lucide-react'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { useState } from 'react'
import Link from 'next/link'
import { githubSignIn } from '../../../../server-actions/signInToGithup'
import { googleSignIn } from '../../../../server-actions/signInToGoogle'


function SignInWr() {

    const [error, setError] = useState()
    const [view, setView] = useState(false)

    const form = useForm<SignInSchemaType>({
        defaultValues: {
            email: "",
            password: ""
        },
        resolver: zodResolver(signInSchema)
    })

    const handleGithub = () => {
        githubSignIn()
    }

    const handleGoogle = () => {
        googleSignIn()
    }

    const submit = (data: SignInSchemaType) => {
        // TODO : Server Action

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
                    <div className='bg-black w-fit px-3 relative -top-3 left-25'>
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

                        <FormField
                            control={control}
                            name='email'
                            render={({ field }) => (
                                <FormItem className='h-23 flex flex-col'>
                                    <div className=' flex justify-between items-end w-full h-5'>
                                        <FormLabel>Email Address</FormLabel>
                                        <FormMessage />
                                    </div>
                                    <Mail size={21} className='absolute top-84 left-11 sm:top-86 sm:left-13 text-gray-500' />
                                    <FormControl>
                                        <Input
                                            placeholder='example@gmail.com'
                                            autoComplete='email'
                                            type='email'
                                            className='pl-12 pr-4 py-5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500/50 transition-all'
                                            {...field}
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />

                        <FormField
                            name='password'
                            control={control}
                            render={({ field }) => (
                                <FormItem className='h-23 flex flex-col'>
                                    <div className=' flex justify-between items-end w-full h-5'>
                                        <FormLabel>Password</FormLabel>
                                        <FormMessage />
                                    </div>
                                    <Lock size={21} className='absolute top-107 left-11 sm:top-109 sm:left-13 text-gray-500' />
                                    {
                                        view ? (
                                            <EyeOff size={21} className='absolute top-107 left-81 sm:top-109 sm:left-91 text-gray-500 cursor-pointer' onClick={() => setView(false)} />
                                        ) : (
                                            <Eye size={21} className='absolute top-107 left-81 sm:top-109 sm:left-91 text-gray-500 cursor-pointer' onClick={() => setView(true)} />
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
                                </FormItem>
                            )}
                        />

                        <Button type='submit' className='flex justify-center items-center py-5 bg-linear-to-r shadow-lg shadow-green-500/50 group from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-lg transition-all my-5'>
                            <p className='text-xl'>Sign In</p>
                        </Button>

                    </form>
                </Form>

                <div className='sm:w-4/5 mx-auto flex space-x-1'>
                    <p className='text-gray-400'>Don't have an account? </p>
                    <Link className='text-green-400 font-semibold' href={"/auth/signUp"}>Sign up for free</Link>
                </div>
            </div>
        </div>
    )
}

export default SignInWr