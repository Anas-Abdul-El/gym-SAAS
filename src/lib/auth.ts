import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import { PrismaAdapter } from "@auth/prisma-adapter"
import Credentials from "next-auth/providers/credentials"
import prisma from "./prisma"
import bcrypt from "bcrypt"
import { signInSchema } from "../../schemas/signIn-schema"

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: "jwt",
    },
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET
        }),
        Google({
            clientId: process.env.AUTH_GOOGLE_ID,
            clientSecret: process.env.AUTH_GOOGLE_SECRET
        }),
        Credentials({
            async authorize(credentials) {
                const validatedData = signInSchema.safeParse(credentials)

                if (!validatedData.success)
                    throw new Error("Invalid_Credentials")

                const { email, password } = validatedData.data

                const user = await prisma.user.findUnique({
                    where: { email }
                })

                if (!user || !user.password)
                    throw new Error("Wrong_Credentials")

                const isPasswordTrue = await bcrypt.compare(
                    password,
                    user.password
                )

                if (!isPasswordTrue)
                    throw new Error("Wrong_Credentials")

                return user
            }
        })
    ],
    callbacks: {
        session: async ({ session, token }) => {
            if (token && token.sub)
                session.id = token.sub

            return session
        }
    }
})