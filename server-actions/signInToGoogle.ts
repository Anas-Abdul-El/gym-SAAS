"use server"
import { signIn } from "@/lib/auth"

export const googleSignIn = async () => {
    await signIn("google", { redirectTo: "/" })
}