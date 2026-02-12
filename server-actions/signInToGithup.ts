"use server"
import { signIn } from "@/lib/auth"

export const githubSignIn = async () => {
    await signIn("github", { redirectTo: "/" })
}