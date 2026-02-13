"use client"
import {
    Users,
    Calendar,
    CreditCard,
    BarChart3,
    Smartphone,
    Bell,
    Lock,
    Zap,
    MessageSquare,
    ClipboardCheck,
    Dumbbell,
    TrendingUp
} from 'lucide-react';
import { Button } from '../ui/button';
import { redirect } from 'next/navigation';


const features = [
    {
        icon: Users,
        title: "Member Management",
        description:
            "Comprehensive member profiles with attendance tracking, membership status, and progress monitoring. Keep all member data organized in one place.",
        color: "from-green-500/20 to-emerald-500/20",
        borderColor: "border-green-500/20",
        iconColor: "text-green-400",
    },
    {
        icon: Calendar,
        title: "Class Scheduling",
        description:
            "Automated class booking system with real-time availability. Members can book, reschedule, or cancel classes from any device.",
        color: "from-blue-500/20 to-cyan-500/20",
        borderColor: "border-blue-500/20",
        iconColor: "text-blue-400",
    },
    {
        icon: CreditCard,
        title: "Payment Processing",
        description:
            "Secure payment gateway with automatic billing, invoice generation, and multiple payment methods. Track all transactions effortlessly.",
        color: "from-green-500/20 to-emerald-500/20",
        borderColor: "border-green-500/20",
        iconColor: "text-green-400",
    },
    {
        icon: BarChart3,
        title: "Advanced Analytics",
        description:
            "Real-time business insights with revenue tracking, attendance patterns, and member retention metrics. Make data-driven decisions.",
        color: "from-purple-500/20 to-pink-500/20",
        borderColor: "border-purple-500/20",
        iconColor: "text-purple-400",
    },
    {
        icon: Smartphone,
        title: "Mobile App",
        description:
            "Native mobile apps for iOS and Android. Members can access schedules, book classes, and track workouts on the go.",
        color: "from-indigo-500/20 to-blue-500/20",
        borderColor: "border-indigo-500/20",
        iconColor: "text-indigo-400",
    },
    {
        icon: Bell,
        title: "Smart Notifications",
        description:
            "Automated reminders for upcoming classes, membership renewals, and special promotions. Keep members engaged and informed.",
        color: "from-yellow-500/20 to-amber-500/20",
        borderColor: "border-yellow-500/20",
        iconColor: "text-yellow-400",
    },
    {
        icon: Lock,
        title: "Access Control",
        description:
            "Integrated door access system with member check-ins. Monitor facility usage and enhance security with digital entry.",
        color: "from-red-500/20 to-pink-500/20",
        borderColor: "border-red-500/20",
        iconColor: "text-red-400",
    },
    {
        icon: Zap,
        title: "Workflow Automation",
        description:
            "Automate repetitive tasks like membership renewals, payment reminders, and follow-ups. Save hours every week.",
        color: "from-cyan-500/20 to-teal-500/20",
        borderColor: "border-cyan-500/20",
        iconColor: "text-cyan-400",
    },
    {
        icon: MessageSquare,
        title: "Member Communication",
        description:
            "Built-in messaging system for announcements, feedback, and direct communication. Build a stronger community.",
        color: "from-pink-500/20 to-rose-500/20",
        borderColor: "border-pink-500/20",
        iconColor: "text-pink-400",
    },
    {
        icon: ClipboardCheck,
        title: "Workout Tracking",
        description:
            "Digital workout logs and progress tracking. Help members achieve their fitness goals with personalized plans.",
        color: "from-amber-500/20 to-orange-500/20",
        borderColor: "border-amber-500/20",
        iconColor: "text-amber-400",
    },
    {
        icon: Dumbbell,
        title: "Equipment Management",
        description:
            "Track equipment maintenance, repairs, and inventory. Ensure all equipment is safe and well-maintained.",
        color: "from-green-500/20 to-emerald-500/20",
        borderColor: "border-green-500/20",
        iconColor: "text-green-400",
    },
    {
        icon: TrendingUp,
        title: "Growth Tools",
        description:
            "Marketing automation, referral programs, and lead management. Grow your member base with powerful tools.",
        color: "from-emerald-500/20 to-green-500/20",
        borderColor: "border-emerald-500/20",
        iconColor: "text-emerald-400",
    },
]

function FeaturesWr() {
    return (
        <>
            <div className='w-full h-130 flex flex-col justify-end'>
                <div className='w-full h-90 flex flex-col items-center space-y-6'>
                    <div className="h-fit w-fit inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm">
                        <Zap className="w-4 h-4 text-green-400" />
                        <span className="text-sm text-green-300">All-in-One Gym Management</span>
                    </div>
                    <div className='text-center h-fit'>
                        <h1 className="text-5xl lg:text-7xl font-bold text-white">
                            Powerful Features for
                            <span className="block bg-linear-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent"> Modern Gyms</span>
                        </h1>
                    </div>
                    <div className='w-9/10'>
                        <p className='text-gray-400 text-xl text-center mt-4'>All the tools you need to run, grow, and scale your fitness business. From member management to advanced analytics, we've got you covered.</p>
                    </div>
                </div>
            </div>
            <div className='p-5 w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
                {
                    features.map((ele, index) => {
                        return (
                            <div className='w-full h-fit p-1' key={index}>
                                <div className={`w-full p-5 h-fit flex flex-col border ${ele.borderColor} ${ele.color} bg-linear-to-r rounded-lg space-y-5 px-4 group hover:scale-110 transition-transform`}>
                                    <div className='w-full h-10 '>
                                        <div className={`bg-linear-to-r w-fit h-fit p-3 rounded-lg border border-green-500/20 ${ele.color}`}>
                                            <ele.icon className={` group-hover:scale-150 transition-transform  ${ele.iconColor}`} size={24} />
                                        </div>
                                    </div>
                                    <h3 className=' text-white font-bold capitalize text-xl'>{ele.title}</h3>
                                    <p className='text-gray-400 h-20 mb-3'>{ele.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='w-full mt-25 flex justify-center'>
                <div className='w-9/10 flex justify-center items-center  space-y-6 flex-col from-emerald-500/20 to-green-500/20 bg-linear-to-r rounded-2xl p-7 py-10 mb-10'>
                    <h1 className='w-9/10 text-center text-white text-3xl font-bold'>Ready to Transform Your Gym?</h1>
                    <p className='w-9/10 text-center text-gray-400 '>Join 10,000+ gyms already using FitFlow Pro to streamline operations and grow their business.</p>
                    <Button
                        className="w-8/10 sm:w-3/10 group px-8 py-7 bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700
                         hover:to-emerald-700 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-green-500/50"
                        onClick={() => redirect("/project")}
                    >
                        Start Now
                    </Button>
                </div>
            </div>
        </>
    )
}

export default FeaturesWr