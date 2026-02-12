"use client";
import { Dumbbell } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { LogInIcon, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { Session } from 'next-auth';
import { SignOutAction } from '../../../server-actions/signOutAction';

type Links = {
    name: string;
    href: string;
    id: number;
}

const links: Links[] = [
    {
        name: "Features",
        href: "/features",
        id: 1
    },
    {
        name: "Pricing",
        href: "/pricing",
        id: 2
    },
    {
        name: "About",
        href: "/about",
        id: 3
    },
    {
        name: "Contact",
        href: "/contact",
        id: 4
    }
]

function Nav({
    user,
}: {
    user: Session | null
}) {

    const path = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isUserLogin = !!user

    const handle = () => {
        SignOutAction()
        setIsMenuOpen(false)
    }
    return (
        <>
            <nav className='fixed top-0 left-0 w-screen h-15 bg-gray-950/50 border-b border-white/10 backdrop-blur-xl flex justify-between items-center z-50 px-10  lg:px-30'>
                <div className='flex space-x-2 md:w-35'>
                    <Dumbbell size={28} className='text-green-400' />
                    <Link href={"/"} className=' capitalize text-white text-xl font-semibold'>fitFlow pro</Link>
                </div>
                <div className='hidden sm:block'>
                    <ul className='flex space-x-5 md:space-x-10 text-white/80'>
                        {
                            links.map(ele => (
                                <Link href={ele.href} key={ele.id} className={` hover:text-white transition cursor-pointer ${path === ele.href ? 'text-white' : ''}`}>{ele.name}</Link>
                            ))
                        }
                    </ul>
                </div>
                <div className=' items-center space-x-2 cursor-pointer hover:text-white transition hidden sm:flex md:w-35'>
                    <LogInIcon className='text-green-400' size={20} />
                    {
                        isUserLogin ? (
                            <p onClick={SignOutAction} className='text-white/80 capitalize'>Sign out</p>
                        ) : (
                            <Link href={"/auth/signIn"} className='text-white/80 capitalize'>Sign in</Link>
                        )
                    }
                </div>
            </nav>
            <MoreVertical className=' block sm:hidden text-white cursor-pointer fixed top-4 right-4 z-70 bg-transparent' size={24} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            <div className='block sm:hidden w-full h-full fixed top-0 left-0 z-60 bg-gray-950/50 backdrop-blur-xl transition-all duration-300 ease-in-out' style={{ clipPath: isMenuOpen ? 'circle(150% at 90% -10%)' : 'circle(0% at 90% -10%)' }}>
                <div className='flex flex-col justify-start h-full mt-15 p-10 text-xl'>
                    <ul className='flex space-x-6 text-white/80 flex-col justify-center space-y-15'>
                        {
                            links.map(ele => (
                                <Link
                                    href={ele.href}
                                    key={ele.id}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={` hover:text-white transition cursor-pointer ${path === ele.href ? 'text-white' : ''}`}
                                >{ele.name}</Link>
                            ))
                        }
                        {
                            isUserLogin ? (
                                <p onClick={handle} className='text-white/80 capitalize'>Sign out</p>
                            ) : (
                                <Link
                                    onClick={() => setIsMenuOpen(false)}
                                    href={"/auth/signIn"}
                                    className='text-white/80 capitalize'
                                >Sign in</Link>
                            )
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav