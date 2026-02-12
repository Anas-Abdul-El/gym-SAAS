import { auth } from "./lib/auth";

export async function proxy() {
    // TODO : middleware config
    const user = await auth()



    return null;
}