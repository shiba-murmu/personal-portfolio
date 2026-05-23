import React from 'react'
import { motion } from 'framer-motion'

function Projects() {

    // =========================
    // MOBILE OPTIMIZED ANIMATION
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
                id='projects'
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

                    className="absolute top-0 right-[-120px] w-[320px] h-[320px] bg-purple-600/20 blur-[150px] rounded-full"
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

                    className="absolute bottom-0 left-[-120px] w-[320px] h-[320px] bg-cyan-400/20 blur-[150px] rounded-full"
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
                        className="text-center mb-16 sm:mb-20"
                    >

                        <motion.p
                            variants={fadeUp}
                            className="text-cyan-400 uppercase tracking-[0.3em] text-xs sm:text-sm mb-4"
                        >
                            Featured Work
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

                            Recent

                            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                                {" "}Projects
                            </span>

                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mt-6 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
                        >
                            A collection of modern full stack applications,
                            AI-powered solutions and immersive digital experiences.
                        </motion.p>
                    </motion.div>

                    {/* ========================= */}
                    {/* PROJECTS GRID */}
                    {/* ========================= */}

                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* FEATURED PROJECT */}
                        <motion.div
                            variants={fadeUp}

                            whileHover={{
                                y: -6,
                            }}

                            transition={{
                                duration: 0.3,
                            }}

                            className="group relative lg:col-span-2"
                        >

                            <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-30 blur-sm group-hover:opacity-70 transition duration-500"></div>

                            <div className="relative h-full rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">

                                {/* Project Image */}
                                <div className="relative overflow-hidden h-[260px] sm:h-[320px]">

                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-400/20 z-10"></div>

                                    <motion.img
                                        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
                                        alt="Project"

                                        whileHover={{
                                            scale: 1.08,
                                        }}

                                        transition={{
                                            duration: 0.6,
                                        }}

                                        className="w-full h-full object-cover"
                                    />

                                    {/* Floating Badge */}
                                    <motion.div
                                        animate={{
                                            y: [0, -4, 0],
                                        }}

                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}

                                        className="absolute top-6 left-6 z-20 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl text-sm text-white"
                                    >
                                        Featured Project
                                    </motion.div>
                                </div>

                                {/* Content */}
                                <div className="p-6 sm:p-8">

                                    <motion.div
                                        variants={staggerContainer}
                                        className="flex flex-wrap gap-3 mb-6"
                                    >

                                        {["React", "Django", "JWT", "PostgreSQL"].map((tech) => (

                                            <motion.span
                                                key={tech}

                                                variants={fadeUp}

                                                whileHover={{
                                                    y: -3,
                                                    scale: 1.03,
                                                }}

                                                className="px-4 py-2 rounded-xl border border-white/10 bg-black/30 text-sm text-gray-300"
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </motion.div>

                                    <motion.h3
                                        variants={fadeUp}
                                        className="text-2xl sm:text-3xl font-black mb-4"
                                    >
                                        Real-Time Chat Application
                                    </motion.h3>

                                    <motion.p
                                        variants={fadeUp}
                                        className="text-gray-400 leading-relaxed text-base sm:text-lg"
                                    >
                                        A modern real-time communication platform built
                                        with React and Django featuring JWT authentication,
                                        responsive UI and scalable backend architecture.
                                    </motion.p>

                                    {/* Buttons */}
                                    <motion.div
                                        variants={fadeUp}
                                        className="flex flex-wrap gap-4 mt-8"
                                    >

                                        <motion.button
                                            whileHover={{
                                                scale: 1.03,
                                                y: -2,
                                            }}

                                            whileTap={{
                                                scale: 0.96,
                                            }}

                                            className="px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 text-black font-bold shadow-xl shadow-purple-500/20"
                                        >
                                            Live Demo
                                        </motion.button>

                                        <motion.button
                                            whileHover={{
                                                scale: 1.03,
                                                y: -2,
                                            }}

                                            whileTap={{
                                                scale: 0.96,
                                            }}

                                            className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition duration-300"
                                        >
                                            GitHub
                                        </motion.button>

                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* SIDE PROJECTS */}
                        <motion.div
                            variants={staggerContainer}
                            className="flex flex-col gap-8"
                        >

                            {[
                                {
                                    title: "Library Management System",
                                    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
                                    tech: ["React", "Tailwind"],
                                    desc: "Smart library management dashboard with modern UI, book tracking and responsive design.",
                                },

                                {
                                    title: "AI Productivity Assistant",
                                    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
                                    tech: ["Python", "AI", "Automation"],
                                    desc: "Intelligent assistant system focused on automation, productivity workflows and smart integrations.",
                                },

                            ].map((project) => (

                                <motion.div
                                    key={project.title}

                                    variants={fadeUp}

                                    whileHover={{
                                        y: -6,
                                    }}

                                    transition={{
                                        duration: 0.3,
                                    }}

                                    className="group relative"
                                >

                                    <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-20 blur-sm group-hover:opacity-60 transition duration-500"></div>

                                    <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 overflow-hidden">

                                        {/* Image */}
                                        <div className="rounded-2xl overflow-hidden mb-6 h-[180px]">

                                            <motion.img
                                                src={project.image}
                                                alt={project.title}

                                                whileHover={{
                                                    scale: 1.08,
                                                }}

                                                transition={{
                                                    duration: 0.6,
                                                }}

                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-4">

                                            {project.tech.map((tech) => (

                                                <motion.span
                                                    key={tech}

                                                    whileHover={{
                                                        y: -2,
                                                    }}

                                                    className="px-3 py-1 rounded-lg border border-white/10 bg-black/30 text-xs text-gray-300"
                                                >
                                                    {tech}
                                                </motion.span>
                                            ))}
                                        </div>

                                        <h4 className="text-xl font-bold mb-3">
                                            {project.title}
                                        </h4>

                                        <p className="text-gray-400 text-sm leading-relaxed">
                                            {project.desc}
                                        </p>

                                        <motion.button
                                            whileHover={{
                                                x: 4,
                                            }}

                                            className="mt-6 text-cyan-400 hover:text-white transition duration-300"
                                        >
                                            View Project →
                                        </motion.button>

                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* ========================= */}
                    {/* BOTTOM CTA */}
                    {/* ========================= */}

                    <motion.div
                        variants={fadeUp}
                        className="flex justify-center mt-20"
                    >

                        <motion.button
                            whileHover={{
                                scale: 1.04,
                                y: -2,
                            }}

                            whileTap={{
                                scale: 0.96,
                            }}

                            className="group relative overflow-hidden px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 text-black font-bold shadow-2xl shadow-purple-500/20"
                        >

                            <span className="relative z-10">
                                View All Projects
                            </span>

                        </motion.button>
                    </motion.div>

                </motion.div>
            </section>
        </>
    )
}

export default Projects