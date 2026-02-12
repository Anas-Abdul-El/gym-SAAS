"use server"
import { signOut } from "@/lib/auth"

export const SignOutAction = async () => {
    await signOut({ redirectTo: "/" })
}