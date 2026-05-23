import React from 'react'
import { motion } from 'framer-motion'

function Experience() {

    // =========================
    // MOBILE FRIENDLY ANIMATION
    // =========================

    const fadeUp = {
        hidden: {
            opacity: 0,
            y: 60,
        },

        show: {
            opacity: 1,
            y: 0,

            transition: {
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const staggerContainer = {
        hidden: {},

        show: {
            transition: {
                staggerChildren: 0.12,
            },
        },
    };

    return (
        <>
            <section
                id='experience'
                className="relative py-24 sm:py-32 overflow-hidden bg-[#05010f] text-white"
            >

                {/* Background Glow Effects */}
                <motion.div
                    animate={{
                        y: [0, -18, 0],
                    }}

                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}

                    className="absolute top-[-100px] left-[-120px] w-[320px] h-[320px] bg-purple-600/20 blur-[150px] rounded-full"
                ></motion.div>

                <motion.div
                    animate={{
                        y: [0, 18, 0],
                    }}

                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}

                    className="absolute bottom-[-100px] right-[-120px] w-[320px] h-[320px] bg-cyan-400/20 blur-[150px] rounded-full"
                ></motion.div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"

                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}

                    className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10"
                >

                    {/* ========================= */}
                    {/* SECTION HEADING */}
                    {/* ========================= */}

                    <motion.div
                        variants={fadeUp}
                        className="text-center mb-20 sm:mb-24"
                    >

                        <motion.p
                            variants={fadeUp}
                            className="text-cyan-400 uppercase tracking-[0.3em] text-xs sm:text-sm mb-4"
                        >
                            My Journey
                        </motion.p>

                        <motion.h2
                            initial={{
                                opacity: 0,
                                y: 60,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}

                            transition={{
                                duration: 1,
                                ease: [0.22, 1, 0.36, 1],
                            }}

                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}

                            className="text-4xl md:text-5xl font-black leading-tight"
                        >

                            Experience &

                            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                                {" "}Education
                            </span>

                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mt-6 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
                        >
                            My learning journey, development experience and
                            continuous growth in modern technology & software engineering.
                        </motion.p>
                    </motion.div>

                    {/* ========================= */}
                    {/* TIMELINE */}
                    {/* ========================= */}

                    <div className="relative">

                        {/* Timeline Line */}
                        <motion.div
                            initial={{
                                opacity: 0,
                                scaleY: 0,
                            }}

                            whileInView={{
                                opacity: 0.4,
                                scaleY: 1,
                            }}

                            transition={{
                                duration: 1.4,
                            }}

                            viewport={{
                                once: true,
                            }}

                            className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 origin-top w-[2px] h-full bg-gradient-to-b from-purple-500 via-fuchsia-500 to-cyan-400"
                        ></motion.div>

                        <motion.div
                            variants={staggerContainer}
                            className="space-y-14 sm:space-y-16"
                        >

                            {/* ========================= */}
                            {/* EDUCATION */}
                            {/* ========================= */}

                            <motion.div
                                variants={fadeUp}
                                className="relative grid lg:grid-cols-2 gap-10 items-center"
                            >

                                <div className="hidden lg:block"></div>

                                <motion.div
                                    whileHover={{
                                        y: -6,
                                    }}

                                    transition={{
                                        duration: 0.3,
                                    }}

                                    className="group relative"
                                >

                                    {/* Timeline Dot */}
                                    <motion.div
                                        animate={{
                                            y: [0, -5, 0],
                                        }}

                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}

                                        className="hidden lg:flex absolute -left-[60px] top-10 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-2xl shadow-purple-500/40 items-center justify-center"
                                    >
                                        <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                                    </motion.div>

                                    <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-20 blur-sm group-hover:opacity-60 transition duration-500"></div>

                                    <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 overflow-hidden">

                                        {/* Badge */}
                                        <div className="inline-flex px-4 py-2 rounded-full border border-white/10 bg-black/30 text-cyan-400 text-sm mb-6">
                                            Education
                                        </div>

                                        <h3 className="text-2xl font-black mb-3">
                                            B.Tech in Computer Science Engineering
                                        </h3>

                                        <p className="text-purple-300 font-medium mb-2">
                                            Maryland Institute of Technology and Management
                                        </p>

                                        <p className="text-gray-500 text-sm mb-6">
                                            Jamshedpur, Jharkhand
                                        </p>

                                        <p className="text-gray-400 leading-relaxed">
                                            Built strong foundations in programming,
                                            software engineering, databases and modern
                                            application development while exploring
                                            full stack development and AI technologies.
                                        </p>

                                        {/* Skills */}
                                        <motion.div
                                            variants={staggerContainer}
                                            className="flex flex-wrap gap-3 mt-8"
                                        >

                                            {[
                                                "Java",
                                                "Python",
                                                "DBMS",
                                                "Web Development",
                                            ].map((item) => (

                                                <motion.span
                                                    key={item}

                                                    variants={fadeUp}

                                                    whileHover={{
                                                        y: -3,
                                                    }}

                                                    className="px-4 py-2 rounded-xl border border-white/10 bg-black/30 text-sm text-gray-300"
                                                >
                                                    {item}
                                                </motion.span>
                                            ))}
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            {/* ========================= */}
                            {/* EXPERIENCE */}
                            {/* ========================= */}

                            <motion.div
                                variants={fadeUp}
                                className="relative grid lg:grid-cols-2 gap-10 items-center"
                            >

                                <motion.div
                                    whileHover={{
                                        y: -6,
                                    }}

                                    transition={{
                                        duration: 0.3,
                                    }}

                                    className="group relative"
                                >

                                    {/* Timeline Dot */}
                                    <motion.div
                                        animate={{
                                            y: [0, -5, 0],
                                        }}

                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}

                                        className="hidden lg:flex absolute -right-[60px] top-10 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-2xl shadow-purple-500/40 items-center justify-center"
                                    >
                                        <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                                    </motion.div>

                                    <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-20 blur-sm group-hover:opacity-60 transition duration-500"></div>

                                    <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 overflow-hidden">

                                        <div className="inline-flex px-4 py-2 rounded-full border border-white/10 bg-black/30 text-cyan-400 text-sm mb-6">
                                            Experience
                                        </div>

                                        <h3 className="text-2xl font-black mb-3">
                                            Full Stack Development Projects
                                        </h3>

                                        <p className="text-purple-300 font-medium mb-2">
                                            React • Django • PostgreSQL
                                        </p>

                                        <p className="text-gray-500 text-sm mb-6">
                                            Personal & Learning Projects
                                        </p>

                                        <p className="text-gray-400 leading-relaxed">
                                            Designed and developed responsive full stack
                                            applications with authentication systems,
                                            APIs, modern UI/UX and scalable backend
                                            architecture using modern technologies.
                                        </p>

                                        {/* Skills */}
                                        <motion.div
                                            variants={staggerContainer}
                                            className="flex flex-wrap gap-3 mt-8"
                                        >

                                            {[
                                                "React",
                                                "Django",
                                                "JWT",
                                                "REST API",
                                                "Tailwind CSS",
                                            ].map((item) => (

                                                <motion.span
                                                    key={item}

                                                    variants={fadeUp}

                                                    whileHover={{
                                                        y: -3,
                                                    }}

                                                    className="px-4 py-2 rounded-xl border border-white/10 bg-black/30 text-sm text-gray-300"
                                                >
                                                    {item}
                                                </motion.span>
                                            ))}
                                        </motion.div>
                                    </div>
                                </motion.div>

                                <div className="hidden lg:block"></div>
                            </motion.div>

                            {/* ========================= */}
                            {/* AI SECTION */}
                            {/* ========================= */}

                            <motion.div
                                variants={fadeUp}
                                className="relative grid lg:grid-cols-2 gap-10 items-center"
                            >

                                <div className="hidden lg:block"></div>

                                <motion.div
                                    whileHover={{
                                        y: -6,
                                    }}

                                    transition={{
                                        duration: 0.3,
                                    }}

                                    className="group relative"
                                >

                                    {/* Timeline Dot */}
                                    <motion.div
                                        animate={{
                                            y: [0, -5, 0],
                                        }}

                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}

                                        className="hidden lg:flex absolute -left-[60px] top-10 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-2xl shadow-purple-500/40 items-center justify-center"
                                    >
                                        <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                                    </motion.div>

                                    <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-20 blur-sm group-hover:opacity-60 transition duration-500"></div>

                                    <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 overflow-hidden">

                                        <div className="inline-flex px-4 py-2 rounded-full border border-white/10 bg-black/30 text-cyan-400 text-sm mb-6">
                                            Future Focus
                                        </div>

                                        <h3 className="text-2xl font-black mb-3">
                                            AI & Intelligent Systems
                                        </h3>

                                        <p className="text-purple-300 font-medium mb-2">
                                            Exploring Artificial Intelligence
                                        </p>

                                        <p className="text-gray-500 text-sm mb-6">
                                            Continuous Learning Journey
                                        </p>

                                        <p className="text-gray-400 leading-relaxed">
                                            Currently exploring AI engineering,
                                            intelligent automation, prompt engineering
                                            and modern AI-powered applications to build
                                            future-ready digital experiences.
                                        </p>

                                        {/* Skills */}
                                        <motion.div
                                            variants={staggerContainer}
                                            className="flex flex-wrap gap-3 mt-8"
                                        >

                                            {[
                                                "AI",
                                                "Machine Learning",
                                                "Automation",
                                                "Prompt Engineering",
                                            ].map((item) => (

                                                <motion.span
                                                    key={item}

                                                    variants={fadeUp}

                                                    whileHover={{
                                                        y: -3,
                                                    }}

                                                    className="px-4 py-2 rounded-xl border border-white/10 bg-black/30 text-sm text-gray-300"
                                                >
                                                    {item}
                                                </motion.span>
                                            ))}
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </motion.div>

                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}

export default Experience