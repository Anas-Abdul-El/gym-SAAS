import { ArrowRight, Zap, Check, X } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

const plans = [
    {
        header: "starter",
        p: "Perfect for small gyms and personal trainers",
        price: 49,
        button: "start free trail",
        color: 'from-gray-500/20 to-slate-500/20',
        borderColor: 'border-gray-500/20',
        accentColor: 'text-gray-400',
        buttonClass: 'border border-white/20 hover:bg-white/5',
        check: [
            "Up to 50 members",
            "Class scheduling",
            "Basic analytics",
            "Mobile app access",
            "Email support",
        ],
        uncheck: [
            "Payment processing",
            "Advanced analytics",
            "Custom branding",
            "API access",
            "Priority support",
        ]
    },
    {
        header: "professional",
        p: "For growing fitness businesses",
        price: 149,
        button: "start free trail",
        color: 'from-green-500/20 to-emerald-500/20',
        borderColor: 'border-green-500/20',
        accentColor: 'text-green-400',
        buttonClass: 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg shadow-green-500/50',
        check: [
            "Up to 500 members",
            "Class scheduling",
            "Basic analytics",
            "Mobile app access",
            "Email support",
            "Payment processing",
            "Advanced analytics",
            "Custom branding",
        ],
        uncheck: [
            "API access",
            "Priority support",
        ]
    },
    {
        header: "Enterprise",
        p: "For large gym chains and franchises",
        price: "custom",
        button: "contact sales",
        color: 'from-purple-500/20 to-pink-500/20',
        borderColor: 'border-purple-500/20',
        accentColor: 'text-purple-400',
        buttonClass: 'border border-white/20 hover:bg-white/5',
        check: [
            "Up to 500 members",
            "Class scheduling",
            "Basic analytics",
            "Mobile app access",
            "Email support",
            "Payment processing",
            "Advanced analytics",
            "Custom branding",
            "API access",
            "Priority support",
        ]
    }
]

const faqs = [
    {
        question: 'Can I switch plans later?',
        answer: 'Yes! You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
    },
    {
        question: 'Is there a free trial?',
        answer: 'Absolutely! We offer a 14-day free trial on all plans. No credit card required to get started.'
    },
    {
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards, debit cards, and PayPal. Enterprise customers can also pay via wire transfer.'
    },
    {
        question: 'Do you offer discounts for annual billing?',
        answer: 'Yes! Save 20% when you choose annual billing. Contact our sales team for custom enterprise pricing.'
    }
];

function PricingWr() {

    return (
        <div className='w-full h-full p-4 pt-35'>
            <div className='flex flex-col justify-center items-center w-full h-fit space-y-6'>
                <div className="h-fit w-fit inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 backdrop-blur-sm">
                    <Zap className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-300">Simple, Transparent Pricing</span>
                </div>
                <h1 className='text-5xl md:text-6xl lg:text-7xl capitalize text-white flex flex-col space-y-5 font-bold leading-tight'>
                    choose your
                    <span className='block bg-linear-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent'>perfect plan</span>
                </h1>
                <p className='text-gray-400 text-center '>
                    Start free and scale as you grow. All plans include core features with no hidden fees.
                </p>
            </div>
            <div className='py-20 w-full flex-col sm:flex-row flex space-x-6 space-y-5'>
                {
                    plans.map((plan, index) => (
                        <div className={` ${plan.borderColor} ${plan.color} text-gray-400 border-2 w-full sm:w-[35%] h-fit bg-linear-to-r rounded-4xl p-7 flex-col space-y-5 my-5 scale-3d ${index === 1 && "scale-107"}`} key={index}>
                            <div className='w-full flex flex-col space-y-2'>
                                <h3 className={`font-bold capitalize text-xl ${plan.accentColor}`} >{plan.header}</h3>
                                <p className='text-sm'>{plan.p}</p>
                            </div>
                            <div>
                                <p className='text-sm '>
                                    $
                                    <span className='text-white text-4xl font-bold'> {plan.price} </span>
                                    /month
                                </p>
                            </div>
                            <Button className={`${plan.buttonClass} w-full py-6 capitalize bg-transparent hover:bg-[rgb(255,255,255,0.2)] font-semibold  bg-linear-to-r`}>
                                <p>{plan.button}</p>
                                <ArrowRight />
                            </Button>
                            <div className='w-full h-fit'>
                                {
                                    plan.check.map((pl, index) => (
                                        <div className='w-full flex space-x-2 text-white my-5' key={index}>
                                            <Check color='green' />
                                            <p>{pl}</p>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='w-full h-fit'>
                                {
                                    plan.uncheck && plan.uncheck.map((pl, index) => (
                                        <div className='w-full flex space-x-2 my-5 text-gray-600' key={index}>
                                            <X />
                                            <p>{pl}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='w-full h-fit mt-15 flex flex-col space-y-5 justify-center items-center text-white'>
                <div className='h-fit w-9/10 text-center flex flex-col space-y-4'>
                    <h2 className=' capitalize text-4xl md:text-5xl lg:text-6xl font-bold'>frequently asked questions</h2>
                    <p className='text-gray-400'>Got questions? We've got answers.</p>
                </div>
            </div>
            <div className='w-full h-fit flex-col flex justify-center items-center space-y-15 mt-30'>
                {
                    faqs.map((faq, index) => (
                        <div className='w-8/10 md:w-7/10 h-fit flex flex-col space-y-3' key={index}>
                            <h1 className='text-white text-xl'>{faq.question}</h1>
                            <p className='text-gray-400'>{faq.answer}</p>
                        </div>
                    ))
                }
            </div>

            <div className='bg-linear-to-r from-green-500/20 to-emerald-500/20 w-full rounded-2xl flex flex-col justify-center items-center text-center p-20 my-30 space-y-8'>
                <div className='w-full flex flex-col space-y-5'>
                    <h1 className=' capitalize text-white font-bold text-4xl md:text-5xl lg:6xl '>stil have questions?</h1>
                    <p className='text-gray-400'>Our team is here to help. Schedule a demo to see FitFlow Pro in action.</p>
                </div>
                <div className='w-full flex flex-col md:flex-row gap-5 justify-center items-center h-fit'>
                    <Button className=' capitalize px-8 py-6 bg-linear-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg shadow-green-500/50'>
                        <p>schedule a demo</p>
                    </Button>
                    <Button className=' capitalize text-white px-8 py-6 border border-[rgb(255,255,255,0.3)] bg-[rgb(255,255,255,0.1)] hover:bg-[rgb(255,255,255,0.2)]'>
                        <p>contact sales</p>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PricingWr