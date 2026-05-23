import React from 'react'
import PortfolioData from '../Data/PortfolioData'
import { motion } from 'framer-motion'

function Hero() {

    // Animation Variants
    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 60,
        },

        show: {
            opacity: 1,
            y: 0,

            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    }

    const staggerContainer = {
        hidden: {},

        show: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    return (
        <>
            <section
                id='home'
                className="relative min-h-screen overflow-hidden bg-[#05010f] text-white"
            >

                {/* Background Glow Effects */}
                <motion.div
                    animate={{
                        y: [0, -20, 0],
                    }}

                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}

                    className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-purple-600/30 blur-[140px] rounded-full"
                ></motion.div>

                <motion.div
                    animate={{
                        y: [0, 20, 0],
                    }}

                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}

                    className="absolute bottom-[-150px] right-[-120px] w-[350px] h-[350px] bg-cyan-400/20 blur-[160px] rounded-full"
                ></motion.div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

                {/* Main Container */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="show"
                    className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20"
                >

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Content */}
                        <motion.div
                            variants={fadeUp}
                        >

                            {/* Small Badge */}
                            <motion.div
                                variants={fadeUp}
                                whileHover={{
                                    scale: 1.03,
                                }}

                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8"
                            >

                                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

                                <p className="text-sm text-gray-300 tracking-wide">
                                    Available for Freelance Projects
                                </p>

                            </motion.div>

                            {/* Heading */}
                            <motion.h1
                                variants={fadeUp}
                                className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
                            >

                                Building

                                <motion.span
                                    initial={{
                                        opacity: 0,
                                        y: 80,
                                    }}

                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                    }}

                                    transition={{
                                        duration: 1,
                                        delay: 0.3,
                                    }}

                                    className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent"
                                >
                                    {" "}
                                    modern digital
                                </motion.span>

                                <br />

                                experiences through code.

                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                variants={fadeUp}
                                className="mt-8 text-gray-400 text-lg leading-relaxed max-w-xl"
                            >
                                {PortfolioData.herosection.paragraph}
                            </motion.p>

                            {/* Buttons */}
                            <motion.div
                                variants={fadeUp}
                                className="flex flex-wrap gap-5 mt-10"
                            >

                                {/* Primary Button */}
                                <motion.button
                                    whileHover={{
                                        scale: 1.05,
                                        y: -2,
                                    }}

                                    whileTap={{
                                        scale: 0.95,
                                    }}

                                    className="relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 text-black font-bold shadow-2xl shadow-purple-500/20 cursor-pointer"
                                >

                                    <a
                                        href="#projects"
                                        className="text-black font-bold"
                                    >
                                        View Projects
                                    </a>

                                </motion.button>

                                {/* Secondary Button */}
                                <motion.button
                                    whileHover={{
                                        scale: 1.05,
                                        y: -2,
                                    }}

                                    whileTap={{
                                        scale: 0.95,
                                    }}

                                    className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 cursor-pointer"
                                >
                                    Download Resume
                                </motion.button>

                            </motion.div>

                            {/* Social Links */}
                            <motion.div
                                variants={fadeUp}
                                className="flex items-center gap-5 mt-12"
                            >

                                {["Linkedin", "Github"].map((item) => (

                                    <motion.a
                                        key={item}
                                        href={PortfolioData.herosection.links[item.toLowerCase()]}

                                        whileHover={{
                                            y: -3,
                                            scale: 1.05,
                                        }}

                                        className="text-gray-400 hover:text-cyan-400 transition duration-300"
                                    >
                                        {item}
                                    </motion.a>

                                ))}

                            </motion.div>
                        </motion.div>

                        {/* Right Side */}
                        <motion.div
                            variants={fadeUp}
                            className="relative flex justify-center"
                        >

                            {/* Glow Ring */}
                            <motion.div
                                animate={{
                                    rotate: 360,
                                }}

                                transition={{
                                    duration: 20,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}

                                className="absolute w-[420px] h-[420px] rounded-full border border-purple-500/20"
                            ></motion.div>

                            <div className="absolute w-[320px] h-[320px] rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-400/20 blur-3xl"></div>

                            {/* Main Card */}
                            <motion.div
                                whileHover={{
                                    y: -10,
                                }}

                                transition={{
                                    duration: 0.4,
                                }}

                                className="relative group"
                            >

                                <div className="absolute "></div>

                                <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 overflow-hidden">

                                    {/* Top Bar */}
                                    <div className="flex items-center justify-between mb-8">

                                        <div>
                                            <h3 className="text-xl font-semibold">
                                                Developer Workspace
                                            </h3>

                                            <p className="text-sm text-gray-400 mt-1">
                                                Full Stack & AI Development
                                            </p>
                                        </div>

                                        <motion.div
                                            animate={{
                                                y: [0, -6, 0],
                                            }}

                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                            }}

                                            className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-black font-black text-lg shadow-lg shadow-purple-500/30"
                                        >
                                            S
                                        </motion.div>

                                    </div>

                                    {/* Fake Code UI */}
                                    <motion.div
                                        variants={staggerContainer}
                                        initial="hidden"
                                        whileInView="show"
                                        viewport={{ once: true }}

                                        className="space-y-4"
                                    >

                                        <motion.div
                                            variants={fadeUp}
                                            className="p-4 rounded-2xl bg-black/40 border border-white/5"
                                        >

                                            <p className="text-purple-300 text-sm">
                                                const developer = &#123;
                                            </p>

                                            <p className="text-cyan-300 text-sm ml-4">
                                                name: &quot;{PortfolioData.herosection.name}&quot;,
                                            </p>

                                            <p className="text-cyan-300 text-sm ml-4">
                                                role: &quot;{PortfolioData.herosection.role}&quot;,
                                            </p>

                                            <p className="text-cyan-300 text-sm ml-4">
                                                stack: [{PortfolioData.herosection.stack.join(", ")}],
                                            </p>

                                            <p className="text-purple-300 text-sm">
                                                &#125;
                                            </p>

                                        </motion.div>

                                        {/* Floating Cards */}
                                        <div className="grid grid-cols-2 gap-4">

                                            {[{
                                                value: PortfolioData.herosection.projectsBuilt,
                                                label: "Projects Built",
                                            },

                                            {
                                                value: PortfolioData.herosection.modernFrontend,
                                                label: "Modern Frontend",
                                            }].map((card, index) => (

                                                <motion.div
                                                    key={index}

                                                    variants={fadeUp}

                                                    whileHover={{
                                                        y: -8,
                                                        scale: 1.03,
                                                    }}

                                                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5"
                                                >

                                                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                                        {card.value}
                                                    </p>

                                                    <p className="text-gray-400 text-sm mt-1">
                                                        {card.label}
                                                    </p>

                                                </motion.div>

                                            ))}

                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}

export default Hero