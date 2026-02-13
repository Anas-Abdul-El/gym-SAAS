"use client"
import { Mail, Phone, MapPin, Clock, MessageSquare, Headphones, Globe } from "lucide-react"
import ContactForm from "./Contact-form";
import { Button } from "../ui/button";
import { redirect } from "next/navigation";

const contactMethods = [
    {
        icon: Mail,
        title: 'Email Us',
        description: 'Our team will respond within 24 hours',
        contact: 'support@fitflowpro.com',
        color: 'from-green-500/20 to-emerald-500/20',
        borderColor: 'border-green-500/20',
        iconColor: 'text-green-400'
    },
    {
        icon: Phone,
        title: 'Call Us',
        description: 'Mon-Fri from 8am to 6pm EST',
        contact: '+1 (555) 123-4567',
        color: 'from-blue-500/20 to-cyan-500/20',
        borderColor: 'border-blue-500/20',
        iconColor: 'text-blue-400'
    },
    {
        icon: MapPin,
        title: 'Visit Us',
        description: 'Come say hello at our office',
        contact: '123 Fitness Street, San Francisco, CA 94102',
        color: 'from-purple-500/20 to-pink-500/20',
        borderColor: 'border-purple-500/20',
        iconColor: 'text-purple-400'
    },
    {
        icon: Clock,
        title: 'Business Hours',
        description: 'We are available',
        contact: 'Monday - Friday: 8am - 6pm EST',
        color: 'from-amber-500/20 to-orange-500/20',
        borderColor: 'border-amber-500/20',
        iconColor: 'text-amber-400'
    }
];

const help = [
    {
        header: "Sales Inquiry",
        des: "Learn more about our plans and pricing",
        icon: MessageSquare
    },
    {
        header: "Technical Support",
        des: "Get help with your account or features",
        icon: Headphones
    },
    {
        header: "artnerships",
        des: "Explore partnership opportunities",
        icon: Globe
    },
]

const questions = [
    {
        question: "What is your response time?",
        answar: "We typically respond to all inquiries within 24 hours during business days. For urgent technical issues, our support team is available 24/7."
    },
    {
        question: "Do you offer phone support?",
        answar: "Yes! Phone support is available Monday-Friday from 8am to 6pm EST. Enterprise customers have access to priority phone support 24/7."
    },
    {
        question: "Can I schedule a demo?",
        answar: "Absolutely! You can schedule a personalized demo with our team. Just mention it in your message or call us directly."
    },
    {
        question: "Do you provide onboarding assistance?",
        answar: "Yes, all new customers receive complimentary onboarding assistance. Our team will help you get set up and train your staff."
    },
]

function ContactWr() {
    return (
        <div className='w-full h-fit flex flex-col justify-end p-6 space-y-20 lg:w-9/10 mx-auto'>
            <div className='flex flex-col justify-center items-center w-full h-fit space-y-6 mt-30 text-center'>
                <div className="h-fit w-fit inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm">
                    <MessageSquare className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-300">We're Here to Help</span>
                </div>
                <h1 className='text-5xl md:text-6xl lg:text-7xl capitalize text-white flex flex-col space-y-5 font-bold leading-tight'>
                    Get in Touch
                    <span className='block bg-linear-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent'>With Our Team</span>
                </h1>
                <p className='text-gray-400 text-center '>
                    Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>
            </div>
            <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    contactMethods.map((ele, id) => (
                        <div key={id} className={`bg-linear-to-r ${ele.color} border-2 ${ele.borderColor} w-full flex flex-col p-4 space-y-6 rounded-xl transition-all hover:scale-105 duration-300`}>
                            <div className={`h-fit p-3 bg-linear-to-r ${ele.color} ${ele.borderColor} border-2 w-fit rounded-xl`} >
                                <ele.icon size={24} className={`${ele.iconColor} `} />
                            </div>
                            <div className="flex flex-col space-y-1">
                                <h3 className="text-white text-2xl font-semibold">{ele.title}</h3>
                                <p className="text-gray-400 h-7">{ele.description}</p>
                            </div>
                            <p className={ele.iconColor + " mb-3"}>{ele.contact}</p>
                        </div>
                    ))
                }
            </div>
            <div className='w-full grid lg:grid-cols-3 grid-cols-1 space-y-2 gap-13  text-white'>
                <ContactForm />
                <div className="lg:col-span-1 flex flex-col space-y-6">
                    <div className="w-full h-fit flex flex-col justify-center space-y-7 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-7">
                        <h1 className="text-2xl font-bold">How Can We Help?</h1>
                        <div>
                            {
                                help.map((ele, id) => (
                                    <div key={id} className="flex space-x-5 mb-8">
                                        <div className="p-3 w-fit h-fit bg-green-600/10 rounded-sm border-green-400/10 border-2">
                                            {<ele.icon size={20} className="text-green-400" />}
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <h2>{ele.header}</h2>
                                            <p className="text-gray-400">{ele.des}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="w-full h-fit flex flex-col justify-center space-y-10 bg-green-600/10 backdrop-blur-xl border border-white/10 rounded-2xl p-7">
                        <h1 className="text-2xl font-bold">How Can We Help?</h1>
                        <div className="w-full flex justify-between ">
                            <p className="text-gray-400">Avg. Response Time</p>
                            <p className="text-white ">&lt; 2 hours</p>
                        </div>
                        <div className="w-full flex justify-between ">
                            <p className="text-gray-400">Customer Satisfaction</p>
                            <p className="text-white "> 98%</p>
                        </div>
                        <div className="w-full flex justify-between ">
                            <p className="text-gray-400">Support Availability</p>
                            <p className="text-white "> 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col space-y-10">
                <div className='w-full text-center'>
                    <h2 className='w-full text-white text-4xl sm:text-5xl font-bold mb-4'>Common Questions</h2>
                    <p className='text-gray-400 sm:text-xl w-full'>Quick answers to questions you may have</p>
                </div>
                <div className="w-full flex flex-col space-y-5">
                    {
                        questions.map((ele, id) => (
                            <div key={id} className="flex flex-col space-y-3 p-7 bg-gray-600/20 w-full md:w-6/10 mx-auto rounded-2xl border border-white/10">
                                <h2 className="text-white font-semibold text-xl">
                                    {ele.question}
                                </h2>
                                <p className="text-gray-400">
                                    {ele.answar}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='bg-linear-to-r from-green-500/20 to-emerald-500/20 w-full rounded-2xl flex flex-col justify-center items-center text-center p-20 my-30 space-y-8  mx-auto'>
                <div className='w-full flex flex-col space-y-5'>
                    <h1 className=' capitalize text-white font-bold text-4xl md:text-5xl lg:6xl '>Ready to Get Started?</h1>
                    <p className='text-gray-300'>
                        Join 10,000+ gyms using FitFlow Pro. Start your free trial today, no credit card required.
                    </p>
                </div>
                <div className='w-full flex flex-col md:flex-row gap-5 justify-center items-center h-fit'>
                    <Button
                        onClick={() => redirect("/project")}
                        className=' capitalize px-8 py-6 bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg shadow-green-500/50'
                    >
                        <p>start free trail</p>
                    </Button>
                    <Button
                        onClick={() => redirect("/pricing")}
                        className=' capitalize text-white px-8 py-6 border border-[rgb(255,255,255,0.3)] bg-[rgb(255,255,255,0.1)] hover:bg-[rgb(255,255,255,0.2)]'
                    >
                        <p>View Pricing</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ContactWr