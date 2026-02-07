
import { ArrowRight, Dumbbell, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';

type Feathers = {
    icon: React.ElementType,
    title: string,
    description: string
}

const features: Array<Feathers> = [
    {
        icon: Users,
        title: 'Member Management',
        description: 'Track memberships, attendance, and progress all in one place'
    },
    {
        icon: Dumbbell,
        title: 'Class Scheduling',
        description: 'Automated booking system for classes and personal training'
    },
    {
        icon: TrendingUp,
        title: 'Business Analytics',
        description: 'Real-time insights to grow your fitness business faster'
    }
]

export default function HomeWr() {
    return (
        <main className="relative z-10 text-white">
            <div className="max-w-7xl mx-auto px-6 pt-20 pb-32 md:pt-32 md:pb-48">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm">
                            <Dumbbell className="w-4 h-4 text-green-400" />
                            <span className="text-sm text-green-300">All-in-One Gym Management</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white">
                            Transform Your
                            <span className="block bg-linear-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                Fitness Business
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 leading-relaxed">
                            Streamline memberships, automate bookings, and grow your gym with our intelligent platform. Built for modern fitness centers and personal trainers.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="group px-8 py-4 bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/50">
                                Start Free Trial
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="px-8 py-4 border border-white/20 hover:bg-white/5 rounded-lg backdrop-blur-sm transition-all">
                                Watch Demo
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-6 pt-8">
                            <div>
                                <div className="text-3xl font-bold text-white">10K+</div>
                                <div className="text-sm text-gray-400">Gyms Managed</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">500K+</div>
                                <div className="text-sm text-gray-400">Members</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">4.8/5</div>
                                <div className="text-sm text-gray-400">Rating</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Visual */}
                    <div className="relative">
                        {/* Floating card with blur */}
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 backdrop-blur-xl bg-linear-to-br from-gray-900/90 to-gray-950/90 p-1 shadow-2xl">
                            <div className="rounded-xl overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1766287453739-c3ffc3f37d05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBmaXRuZXNzJTIwdHJhaW5pbmclMjB3b3Jrb3V0fGVufDF8fHx8MTc3MDMwNTk2NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                    alt="Gym Dashboard Preview"
                                    className="w-full h-auto"
                                    width={500}
                                    height={500}
                                />
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-6 -right-6 px-6 py-3 rounded-xl bg-green-500/10 backdrop-blur-xl border border-green-500/20 shadow-xl">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-green-400">128 Active Now</span>
                            </div>
                        </div>

                        <div className="absolute -bottom-6 -left-6 px-6 py-4 rounded-xl bg-green-500/10 backdrop-blur-xl border border-green-500/20 shadow-xl">
                            <div className="flex items-center gap-3">
                                <TrendingUp className="w-6 h-6 text-green-400" />
                                <div>
                                    <div className="text-sm font-semibold text-white">Revenue Growth</div>
                                    <div className="text-xs text-gray-400">+34% this month</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Feature Cards */}
            <div className="max-w-7xl mx-auto px-6 pb-20">
                <div className="grid md:grid-cols-3 gap-6">
                    {
                        features.map((feature, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 transition-all group"
                            >
                                <feature.icon className="w-10 h-10 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-400">{feature.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </main>
    );
}