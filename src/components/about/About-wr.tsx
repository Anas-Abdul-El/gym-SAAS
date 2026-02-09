import { Users, Target, Award, Heart, Zap, Shield } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button';

const squares = [
    {
        id: 0,
        headers: "10K+",
        p: "gyms worldwide"
    },
    {
        id: 2,
        headers: "500K+",
        p: "active members"
    },
    {
        id: 3,
        headers: "50M+",
        p: "workouts tracked"
    },
    {
        id: 4,
        headers: "99.9%",
        p: "uptime SLA"
    },
]

const values = [
    {
        icon: Target,
        title: 'Mission-Driven',
        description: 'We believe fitness should be accessible to everyone. Our mission is to empower gym owners with technology that helps them grow.',
        color: 'from-green-500/20 to-emerald-500/20',
        borderColor: 'border-green-500/20',
        iconColor: 'text-green-400'
    },
    {
        icon: Heart,
        title: 'Customer First',
        description: 'Your success is our success. We build features based on real feedback from gym owners and trainers like you.',
        color: 'from-pink-500/20 to-rose-500/20',
        borderColor: 'border-pink-500/20',
        iconColor: 'text-pink-400'
    },
    {
        icon: Zap,
        title: 'Innovation',
        description: 'We stay ahead of the curve with cutting-edge technology, from AI-powered insights to seamless integrations.',
        color: 'from-blue-500/20 to-cyan-500/20',
        borderColor: 'border-blue-500/20',
        iconColor: 'text-blue-400'
    },
    {
        icon: Shield,
        title: 'Trust & Security',
        description: 'Your data is protected with enterprise-grade security. We take privacy seriously and comply with all regulations.',
        color: 'from-green-500/20 to-emerald-500/20',
        borderColor: 'border-green-500/20',
        iconColor: 'text-green-400'
    }
];

const team = [
    {
        name: 'Sarah Chen',
        role: 'CEO & Co-Founder',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop'
    },
    {
        name: 'Michael Rodriguez',
        role: 'CTO & Co-Founder',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    },
    {
        name: 'Emily Johnson',
        role: 'Head of Product',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop'
    },
    {
        name: 'David Kim',
        role: 'Head of Engineering',
        image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop'
    }
];

function AboutWr() {
    return (
        <div className='w-full h-fit flex flex-col justify-end p-6 space-y-20 lg:w-8/10 mx-auto'>
            <div className='w-full h-90 flex flex-col items-center space-y-6 mt-23 mb-170 sm:mb-80'>
                <div className="h-fit w-fit inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm">
                    <Users className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-300">Our Story</span>
                </div>
                <div className='text-center h-fit w-8/10'>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                        Empowering Fitness
                        <span className="block bg-linear-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent"> Around the World</span>
                    </h1>
                </div>
                <div className='w-9/10'>
                    <p className='text-gray-400 text-xl text-center mt-4'>We're on a mission to help gym owners focus on what matters most—helping people achieve their fitness goals. Founded by fitness enthusiasts and tech innovators.</p>
                </div>

                <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-6 h-60 md:h-45 mt-15 mx-auto'>
                    {
                        squares.map(sqr => (
                            <div key={sqr.id} className='w-full h-full border border-[rgb(255,255,255,0.2)] rounded-2xl flex justify-center items-center space-y-4 flex-col p-7 bg-[rgb(255,255,255,0.1)]'>
                                <h3 className='text-white text-4xl font-bold'>{sqr.headers}</h3>
                                <p className='text-gray-400 text-center text-xl'>{sqr.p}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='w-full h-fit flex flex-col md:flex-row gap-7'>
                <div className='w-full h-fit space-y-10 flex flex-col '>
                    <h1 className='text-white font-bold text-4xl '>
                        Built by Fitness Enthusiasts, for Fitness Professionals
                    </h1>
                    <div className='text-gray-400 flex flex-col space-y-5 text-xl'>
                        <p>FitFlow Pro was born from frustration. Our founders, Sarah and Michael, owned a small gym and struggled with outdated software that was expensive, clunky, and limited their growth.</p>

                        <p>They knew there had to be a better way. So they built it—a modern, intuitive platform that handles everything from member management to business analytics, all at an affordable price.</p>

                        <p>Today, FitFlow Pro powers over 10,000 gyms worldwide, helping them serve more than 500,000 members. But our mission remains the same: make gym management effortless so you can focus on transforming lives.</p>
                    </div>
                </div>
                <div className='w-full p-2 rounded-2xl sm:bg-linear-to-br from-gray-900/90 to-gray-950/90 shadow-2xl mb-10'>
                    <Image
                        src={"https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop"}
                        alt='gym'
                        height={500}
                        width={500}
                        className='w-full h-full rounded-2xl'
                    />
                    <div className="h-fit w-fit inline-flex items-center gap-2 p-4 px-6 rounded-2xl bg-green-500/10 border border-green-500/20 backdrop-blur-sm relative -top-10 -left-12">
                        <Award size={30} className=" text-green-400" />
                        <div className='flex flex-col'>
                            <span className="text-sm text-white font-semibold">Award Winning</span>
                            <p className='text-gray-400 text-sm'>Best SaaS 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full text-center'>
                <h2 className='w-full text-white text-4xl sm:text-5xl font-bold mb-4'>Our Core Values</h2>
                <p className='text-gray-400 sm:text-xl w-full'>The principles that guide everything we do</p>
            </div>
            <div className='w-full h-fit grid grid-cols-1 md:grid-cols-2 gap-5 mb-30'>
                {
                    values.map((val, index) => (
                        <div className={`bg-linear-to-r w-full flex flex-col p-8 rounded-2xl space-y-5 border-2 ${val.color} ${val.borderColor} hover:scale-103 transition-all duration-300`} key={index}>
                            <div className={`p-3 ${val.color} bg-linear-to-r w-fit h-fit rounded-xl border ${val.borderColor}`}>
                                <val.icon size={30} className={val.iconColor} />
                            </div>
                            <h1 className='font-bold capitalize text-white text-2xl'>
                                {val.title}
                            </h1>
                            <p className='text-gray-400'>
                                {val.description}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className='w-full text-center'>
                <h2 className='w-full text-white text-4xl sm:text-5xl font-bold mb-4'>Meet Our Leadership</h2>
                <p className='text-gray-400 sm:text-xl w-full'>Passionate experts dedicated to your success</p>
            </div>
            <div className='w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7'>
                {
                    team.map((ele, id) => (
                        <div key={id} className='flex flex-col p-5 justify-center space-y-5 items-center bg-white/5 border-white/10 border shadow-2xl rounded-xl'>
                            <Image
                                src={ele.image}
                                alt={ele.name}
                                width={500}
                                height={500}
                                className='rounded-xl'
                            />
                            <div className='w-full h-fit flex text-center flex-col space-y-1'>
                                <h3 className='text-white text-2xl font-semibold'>{ele.name}</h3>
                                <p className='text-green-400'>{ele.role}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='bg-linear-to-r from-green-500/20 to-emerald-500/20 w-full rounded-2xl flex flex-col justify-center items-center text-center p-20 my-30 space-y-8  mx-auto'>
                <div className='w-full flex flex-col space-y-5'>
                    <h1 className=' capitalize text-white font-bold text-4xl md:text-5xl lg:6xl '>Join Us on Our Mission</h1>
                    <p className='text-gray-400'>Be part of the fitness revolution. Whether you're a gym owner or looking to join our team, we'd love to hear from you.</p>
                </div>
                <div className='w-full flex flex-col md:flex-row gap-5 justify-center items-center h-fit'>
                    <Button className=' capitalize px-8 py-6 bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg shadow-green-500/50'>
                        <p>start free trail</p>
                    </Button>
                    <Button className=' capitalize text-white px-8 py-6 border border-[rgb(255,255,255,0.3)] bg-[rgb(255,255,255,0.1)] hover:bg-[rgb(255,255,255,0.2)]'>
                        <p>we're hiring</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default AboutWr


