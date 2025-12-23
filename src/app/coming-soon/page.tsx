'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ComingSoonPage() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })

    useEffect(() => {
        // Set target date (30 days from now)
        const targetDate = new Date()
        targetDate.setDate(targetDate.getDate() + 30)

        const interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = targetDate.getTime() - now

            setTimeLeft({
                days: Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((distance % (1000 * 60)) / 1000),
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    // Floating particles animation
    const particles = Array.from({ length: 20 }, (_, i) => i)

    return (
        <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
            {/* Animated background particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle}
                    className="absolute rounded-full bg-white/10 backdrop-blur-sm"
                    style={{
                        width: Math.random() * 100 + 20,
                        height: Math.random() * 100 + 20,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, Math.random() * 100 - 50],
                        x: [0, Math.random() * 100 - 50],
                        scale: [1, Math.random() + 0.5, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                    }}
                />
            ))}

            {/* Gradient orbs */}
            <motion.div
                className="absolute -left-20 top-20 h-96 w-96 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 opacity-20 blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />
            <motion.div
                className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    rotate: [360, 180, 0],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            {/* Main content */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
                {/* Logo/Title animation */}
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="mb-8 text-center"
                >
                    <motion.h1
                        className="mb-4 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-7xl font-bold text-transparent md:text-9xl"
                        animate={{
                            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                        style={{
                            backgroundSize: '200% 200%',
                        }}
                    >
                        Storyism
                    </motion.h1>
                </motion.div>

                {/* Coming Soon text with glitch effect */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mb-12 text-center"
                >
                    <motion.h2
                        className="mb-4 text-4xl font-bold text-white md:text-6xl"
                        animate={{
                            textShadow: [
                                '0 0 10px rgba(255,255,255,0.5)',
                                '0 0 20px rgba(255,255,255,0.8)',
                                '0 0 10px rgba(255,255,255,0.5)',
                            ],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        Coming Soon
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="text-xl text-gray-300 md:text-2xl"
                    >
                        Something amazing is on the way
                    </motion.p>
                </motion.div>

                {/* Countdown timer */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mb-12 grid grid-cols-4 gap-4 md:gap-8"
                >
                    {[
                        { label: 'Days', value: timeLeft.days },
                        { label: 'Hours', value: timeLeft.hours },
                        { label: 'Minutes', value: timeLeft.minutes },
                        { label: 'Seconds', value: timeLeft.seconds },
                    ].map((item, index) => (
                        <motion.div
                            key={item.label}
                            className="relative"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + index * 0.1, type: 'spring' }}
                            whileHover={{ scale: 1.1 }}
                        >
                            <motion.div
                                className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-lg md:p-8"
                                animate={{
                                    boxShadow: [
                                        '0 0 20px rgba(255,255,255,0.1)',
                                        '0 0 40px rgba(255,255,255,0.2)',
                                        '0 0 20px rgba(255,255,255,0.1)',
                                    ],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: 'easeInOut',
                                }}
                            >
                                <motion.div
                                    key={item.value}
                                    initial={{ scale: 1.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-4xl font-bold text-white md:text-6xl"
                                >
                                    {String(item.value).padStart(2, '0')}
                                </motion.div>
                                <div className="mt-2 text-sm text-gray-400 md:text-base">
                                    {item.label}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Animated notification signup */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="w-full max-w-md"
                >
                    <motion.div
                        className="rounded-2xl border border-white/20 bg-white/5 p-6 backdrop-blur-lg"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        <h3 className="mb-4 text-center text-xl font-semibold text-white">
                            Get Notified When We Launch
                        </h3>
                        <div className="flex gap-2">
                            <motion.input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-sm focus:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50"
                                whileFocus={{ scale: 1.02 }}
                            />
                            <motion.button
                                className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-semibold text-white"
                                whileHover={{
                                    scale: 1.05,
                                    boxShadow: '0 0 25px rgba(168, 85, 247, 0.6)',
                                }}
                                whileTap={{ scale: 0.95 }}
                                animate={{
                                    boxShadow: [
                                        '0 0 15px rgba(168, 85, 247, 0.3)',
                                        '0 0 25px rgba(168, 85, 247, 0.5)',
                                        '0 0 15px rgba(168, 85, 247, 0.3)',
                                    ],
                                }}
                                transition={{
                                    boxShadow: {
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    },
                                }}
                            >
                                Notify Me
                            </motion.button>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Social media icons with bounce animation */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-12 flex gap-6"
                >
                    {['Twitter', 'Discord', 'GitHub'].map((social, index) => (
                        <motion.a
                            key={social}
                            href="#"
                            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white backdrop-blur-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.6 + index * 0.1 }}
                            whileHover={{
                                scale: 1.2,
                                rotate: 360,
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                            }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <span className="text-xs font-semibold">
                                {social.charAt(0)}
                            </span>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Animated progress bar */}
                <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: '100%' }}
                    transition={{ delay: 1.8, duration: 1 }}
                    className="mt-16 w-full max-w-md"
                >
                    <div className="mb-2 flex justify-between text-sm text-gray-400">
                        <span>Development Progress</span>
                        <motion.span
                            key={Math.floor(Date.now() / 1000)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                        >
                            85%
                        </motion.span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.div
                            className="h-full rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
                            initial={{ width: 0 }}
                            animate={{ width: '85%' }}
                            transition={{ delay: 2, duration: 2, ease: 'easeOut' }}
                        />
                    </div>
                </motion.div>
            </div>

            {/* Animated shooting stars */}
            {[...Array(3)].map((_, i) => (
                <motion.div
                    key={`star-${i}`}
                    className="absolute h-1 w-20 rounded-full bg-gradient-to-r from-transparent via-white to-transparent"
                    style={{
                        top: `${Math.random() * 50}%`,
                        left: '-100px',
                    }}
                    animate={{
                        x: ['0vw', '120vw'],
                        opacity: [0, 1, 0],
                    }}
                    transition={{
                        duration: 2,
                        delay: i * 3,
                        repeat: Infinity,
                        repeatDelay: 5,
                        ease: 'easeOut',
                    }}
                />
            ))}
        </div>
    )
}
