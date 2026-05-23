import React from 'react'
import { motion } from 'framer-motion'

function Skills() {

    // =========================
    // PREMIUM ANIMATION SYSTEM
    // =========================

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 100,
        },

        show: {
            opacity: 1,
            y: 0,

            transition: {
                duration: 1.3,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const staggerContainer = {
        hidden: {},

        show: {
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    return (
        <>
            <section
                id='skills'
                className="relative py-32 overflow-hidden bg-[#05010f] text-white"
            >

                {/* Background Effects */}
                <motion.div
                    animate={{
                        y: [0, -25, 0],
                    }}

                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}

                    className="absolute top-0 left-[-120px] w-[320px] h-[320px] bg-purple-600/20 blur-[140px] rounded-full"
                ></motion.div>

                <motion.div
                    animate={{
                        y: [0, 25, 0],
                    }}

                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}

                    className="absolute bottom-0 right-[-120px] w-[320px] h-[320px] bg-cyan-400/20 blur-[150px] rounded-full"
                ></motion.div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"

                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}

                    className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10"
                >

                    {/* ========================= */}
                    {/* SECTION HEADING */}
                    {/* ========================= */}

                    <motion.div
                        variants={fadeUp}
                        className="text-center mb-20"
                    >

                        <motion.p
                            variants={fadeUp}
                            className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4"
                        >
                            My Expertise
                        </motion.p>

                        <motion.h2
                            initial={{
                                opacity: 0,
                                y: 100,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}

                            transition={{
                                duration: 1.5,
                                ease: [0.22, 1, 0.36, 1],
                            }}

                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}

                            className="text-4xl md:text-5xl font-black leading-tight"
                        >

                            Skills &

                            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                                {" "}Technologies
                            </span>

                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed"
                        >
                            A modern stack focused on building scalable, performant
                            and immersive digital experiences.
                        </motion.p>
                    </motion.div>

                    {/* ========================= */}
                    {/* SKILLS GRID */}
                    {/* ========================= */}

                    <div className="grid lg:grid-cols-2 gap-8">

                        {/* ========================= */}
                        {/* FRONTEND */}
                        {/* ========================= */}

                        <motion.div
                            variants={fadeUp}

                            whileHover={{
                                y: -10,
                            }}

                            transition={{
                                duration: 0.4,
                            }}

                            className="group relative"
                        >

                            <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-30 blur-sm group-hover:opacity-70 transition duration-500"></div>

                            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden">

                                <div className="flex items-center justify-between mb-8">

                                    <div>
                                        <h3 className="text-2xl font-bold">
                                            Frontend Development
                                        </h3>

                                        <p className="text-gray-400 mt-2">
                                            Modern UI engineering & interaction design
                                        </p>
                                    </div>

                                    <motion.div
                                        animate={{
                                            y: [0, -6, 0],
                                        }}

                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}

                                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-black font-black shadow-lg shadow-purple-500/20"
                                    >
                                        FE
                                    </motion.div>

                                </div>

                                {/* Skills */}
                                <motion.div
                                    variants={staggerContainer}
                                    className="flex flex-wrap gap-4"
                                >

                                    {[
                                        "React",
                                        "JavaScript",
                                        "Tailwind CSS",
                                        "HTML5",
                                        "CSS3",
                                        "Framer Motion",
                                        "Figma",
                                        "Responsive Design",
                                    ].map((skill) => (

                                        <motion.div
                                            key={skill}

                                            variants={fadeUp}

                                            whileHover={{
                                                y: -6,
                                                scale: 1.05,
                                            }}

                                            className="px-5 py-3 rounded-2xl border border-white/10 bg-black/30 text-gray-300 hover:text-white hover:border-purple-400/40 hover:bg-white/10 transition duration-300 cursor-pointer"
                                        >
                                            {skill}
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* ========================= */}
                        {/* BACKEND */}
                        {/* ========================= */}

                        <motion.div
                            variants={fadeUp}

                            whileHover={{
                                y: -10,
                            }}

                            transition={{
                                duration: 0.4,
                            }}

                            className="group relative"
                        >

                            <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-30 blur-sm group-hover:opacity-70 transition duration-500"></div>

                            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden">

                                <div className="flex items-center justify-between mb-8">

                                    <div>
                                        <h3 className="text-2xl font-bold">
                                            Backend Development
                                        </h3>

                                        <p className="text-gray-400 mt-2">
                                            APIs, authentication & scalable architecture
                                        </p>
                                    </div>

                                    <motion.div
                                        animate={{
                                            y: [0, -6, 0],
                                        }}

                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}

                                        className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-black font-black shadow-lg shadow-purple-500/20"
                                    >
                                        BE
                                    </motion.div>

                                </div>

                                <motion.div
                                    variants={staggerContainer}
                                    className="flex flex-wrap gap-4"
                                >

                                    {[
                                        "Python",
                                        "Django",
                                        "REST API",
                                        "JWT Authentication",
                                        "PostgreSQL",
                                        "MySQL",
                                        "Firebase",
                                        "Git & GitHub",
                                    ].map((skill) => (

                                        <motion.div
                                            key={skill}

                                            variants={fadeUp}

                                            whileHover={{
                                                y: -6,
                                                scale: 1.05,
                                            }}

                                            className="px-5 py-3 rounded-2xl border border-white/10 bg-black/30 text-gray-300 hover:text-white hover:border-cyan-400/40 hover:bg-white/10 transition duration-300 cursor-pointer"
                                        >
                                            {skill}
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* ========================= */}
                        {/* AI SECTION */}
                        {/* ========================= */}

                        <motion.div
                            variants={fadeUp}

                            whileHover={{
                                y: -10,
                            }}

                            transition={{
                                duration: 0.5,
                            }}

                            className="group relative lg:col-span-2"
                        >

                            <div className="absolute "></div>

                            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 overflow-hidden">

                                <div className="grid lg:grid-cols-2 gap-14 items-center">

                                    {/* LEFT */}
                                    <motion.div
                                        variants={fadeUp}
                                        className="text-center lg:text-left"
                                    >

                                        <p className="text-cyan-400 uppercase tracking-[0.25em] text-xs sm:text-sm mb-4">
                                            AI & Future Tech
                                        </p>

                                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">

                                            Exploring the future

                                            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                                {" "}with AI.
                                            </span>

                                        </h3>

                                        <p className="mt-6 text-gray-400 leading-relaxed text-sm sm:text-base max-w-xl mx-auto lg:mx-0">
                                            Building intelligent systems and modern AI-powered
                                            experiences with scalable architecture and creative
                                            problem-solving.
                                        </p>

                                        <motion.button
                                            whileHover={{
                                                scale: 1.05,
                                                y: -2,
                                            }}

                                            whileTap={{
                                                scale: 0.95,
                                            }}

                                            className="mt-8 w-full sm:w-fit px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 text-black font-bold shadow-xl shadow-purple-500/20"
                                        >
                                            Explore Projects
                                        </motion.button>
                                    </motion.div>

                                    {/* RIGHT CARDS */}
                                    <motion.div
                                        variants={staggerContainer}
                                        className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4 lg:mt-0"
                                    >

                                        {[
                                            "Machine Learning",
                                            "AI Integration",
                                            "Prompt Engineering",
                                            "Automation",
                                        ].map((item) => (

                                            <motion.div
                                                key={item}

                                                variants={fadeUp}

                                                whileHover={{
                                                    y: -10,
                                                    scale: 1.03,
                                                }}

                                                transition={{
                                                    duration: 0.4,
                                                }}

                                                className="group/card rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl p-6 hover:border-purple-400/40 transition duration-300"
                                            >

                                                {/* Icon */}
                                                <motion.div
                                                    animate={{
                                                        y: [0, -6, 0],
                                                    }}

                                                    transition={{
                                                        duration: 4,
                                                        repeat: Infinity,
                                                        ease: "easeInOut",
                                                    }}

                                                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 mb-5 opacity-90 shadow-lg shadow-purple-500/20"
                                                ></motion.div>

                                                <h4 className="text-lg font-semibold group-hover/card:text-cyan-400 transition duration-300">
                                                    {item}
                                                </h4>

                                                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                                                    Modern development workflows powered by intelligent systems.
                                                </p>

                                            </motion.div>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}

export default Skills