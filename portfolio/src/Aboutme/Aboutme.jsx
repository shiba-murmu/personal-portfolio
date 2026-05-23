import React from "react";
import { motion } from "framer-motion";

function Aboutme() {

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
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const staggerContainer = {
        hidden: {},

        show: {
            transition: {
                staggerChildren: 0.35,
            },
        },
    };

    return (
        <>
            <section
                id="about"
                className="relative py-24 sm:py-32 overflow-hidden bg-[#05010f] text-white"
            >

                {/* ========================= */}
                {/* BACKGROUND GLOW EFFECTS */}
                {/* ========================= */}

                <motion.div
                    animate={{
                        y: [0, -25, 0],
                    }}

                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}

                    className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-purple-600/20 blur-[150px] rounded-full"
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

                    className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-cyan-400/20 blur-[150px] rounded-full"
                ></motion.div>

                {/* GRID OVERLAY */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

                {/* ========================= */}
                {/* MAIN CONTAINER */}
                {/* ========================= */}

                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"

                    viewport={{
                        once: true,
                        amount: 0.2,
                    }}

                    className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10"
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
                            className="text-cyan-400 uppercase tracking-[0.3em] text-xs sm:text-sm mb-4"
                        >
                            About Me
                        </motion.p>

                        {/* HEADING */}
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
                                duration: 1.4,
                                ease: [0.22, 1, 0.36, 1],
                            }}

                            viewport={{
                                once: true,
                                amount: 0.3,
                            }}

                            style={{
                                willChange: "transform, opacity",
                            }}

                            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight"
                        >

                            Passionate About

                            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                                {" "}Building Modern Tech
                            </span>

                        </motion.h2>

                        <motion.p
                            variants={fadeUp}
                            className="mt-6 text-gray-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-2"
                        >
                            Combining creativity, development and modern technologies
                            to craft immersive digital experiences with performance,
                            scalability and elegant user interfaces.
                        </motion.p>

                    </motion.div>

                    {/* ========================= */}
                    {/* MAIN GRID */}
                    {/* ========================= */}

                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* ========================= */}
                        {/* LEFT IMAGE SECTION */}
                        {/* ========================= */}

                        <motion.div
                            variants={fadeUp}
                            className="relative flex justify-center"
                        >

                            {/* GLOW RING */}
                            <motion.div
                                animate={{
                                    rotate: 360,
                                }}

                                transition={{
                                    duration: 22,
                                    repeat: Infinity,
                                    ease: "linear",
                                }}

                                className="absolute w-[280px] sm:w-[360px] h-[280px] sm:h-[360px] rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-400/20 blur-3xl"
                            ></motion.div>

                            {/* IMAGE WRAPPER */}
                            <motion.div
                                whileHover={{
                                    y: -12,
                                }}

                                transition={{
                                    duration: 0.5,
                                }}

                                className="group relative w-full max-w-[380px]"
                            >

                                {/* BORDER GLOW */}
                                <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-30 blur-sm group-hover:opacity-70 transition duration-500"></div>

                                {/* CARD */}
                                <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">

                                    {/* IMAGE */}
                                    <div className="relative overflow-hidden">

                                        <motion.img
                                            src="/images/profilepicture.webp"
                                            alt="Shiba Murmu"

                                            whileHover={{
                                                scale: 1.08,
                                            }}

                                            transition={{
                                                duration: 0.8,
                                            }}

                                            className="
                        w-full
                        h-[380px]
                        sm:h-[450px]
                        lg:h-[500px]
                        object-cover
                        object-top
                      "
                                        />

                                        {/* OVERLAY */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#05010f] via-transparent to-transparent"></div>

                                        {/* FLOATING BADGE */}
                                        <motion.div
                                            animate={{
                                                y: [0, -8, 0],
                                            }}

                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}

                                            className="absolute top-5 left-5 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl"
                                        >

                                            <p className="text-sm text-cyan-400">
                                                Full Stack Developer
                                            </p>

                                        </motion.div>
                                    </div>

                                    {/* BOTTOM INFO */}
                                    <div className="p-6">

                                        <div className="flex items-center justify-between gap-4">

                                            <div>
                                                <h3 className="text-2xl font-black">
                                                    Shiba Murmu
                                                </h3>

                                                <p className="text-gray-400 mt-1">
                                                    Developer • Designer • AI Enthusiast
                                                </p>
                                            </div>

                                            {/* FLOAT ICON */}
                                            <motion.div
                                                animate={{
                                                    y: [0, -6, 0],
                                                }}

                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                }}

                                                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-black font-black text-xl shadow-lg shadow-purple-500/20"
                                            >
                                                S
                                            </motion.div>

                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* ========================= */}
                        {/* RIGHT CONTENT */}
                        {/* ========================= */}

                        <motion.div
                            variants={staggerContainer}
                        >

                            {/* MINI BADGE */}
                            <motion.div
                                variants={fadeUp}

                                whileHover={{
                                    scale: 1.03,
                                }}

                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8"
                            >

                                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

                                <p className="text-sm text-cyan-400 tracking-wide">
                                    Who Am I
                                </p>

                            </motion.div>

                            {/* HEADING */}
                            <motion.h3
                                variants={fadeUp}
                                className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight"
                            >

                                Creating immersive

                                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                                    {" "}digital experiences
                                </span>

                            </motion.h3>

                            {/* DESCRIPTION */}
                            <motion.div
                                variants={fadeUp}
                                className="space-y-6 mt-8"
                            >

                                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                                    I'm a Computer Science Engineering graduate passionate
                                    about full stack development, modern UI/UX and AI-powered
                                    technologies.
                                </p>

                                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                                    My focus is on building high-performance web applications
                                    using React, Django and modern frontend technologies.
                                </p>

                            </motion.div>

                            {/* ========================= */}
                            {/* STATS */}
                            {/* ========================= */}

                            <motion.div
                                variants={staggerContainer}
                                className="grid grid-cols-2 gap-5 mt-10"
                            >

                                {[
                                    {
                                        value: "10+",
                                        label: "Projects Built",
                                    },

                                    {
                                        value: "React",
                                        label: "Frontend Stack",
                                    },

                                    {
                                        value: "Django",
                                        label: "Backend Stack",
                                    },

                                    {
                                        value: "AI",
                                        label: "Future Focus",
                                    },

                                ].map((item) => (

                                    <motion.div
                                        key={item.label}

                                        variants={fadeUp}

                                        whileHover={{
                                            y: -10,
                                            scale: 1.03,
                                        }}

                                        transition={{
                                            duration: 0.4,
                                        }}

                                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-cyan-400/30 transition duration-300"
                                    >

                                        {/* HOVER GLOW */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500/5 to-cyan-400/5 transition duration-500"></div>

                                        <div className="relative z-10">

                                            <h4 className="text-3xl font-black bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                                                {item.value}
                                            </h4>

                                            <p className="text-gray-400 text-sm mt-2">
                                                {item.label}
                                            </p>

                                        </div>

                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* ========================= */}
                            {/* BUTTONS */}
                            {/* ========================= */}

                            <motion.div
                                variants={fadeUp}
                                className="flex flex-col sm:flex-row gap-5 mt-12"
                            >

                                {/* DOWNLOAD BUTTON */}
                                <motion.button
                                    whileHover={{
                                        scale: 1.05,
                                        y: -3,
                                    }}

                                    whileTap={{
                                        scale: 0.95,
                                    }}

                                    className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 text-black font-black shadow-2xl shadow-purple-500/20"
                                >

                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        Download Resume
                                    </span>

                                </motion.button>

                                {/* CONTACT BUTTON */}
                                <motion.a
                                    href="#contact"

                                    whileHover={{
                                        scale: 1.03,
                                        y: -3,
                                    }}

                                    className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-cyan-400/30 transition duration-300 text-center"
                                >
                                    Contact Me
                                </motion.a>

                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </>
    );
}

export default Aboutme;