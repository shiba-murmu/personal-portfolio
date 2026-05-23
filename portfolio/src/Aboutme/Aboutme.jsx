import React from 'react'

function Aboutme() {
    return (
        <>
            <section
                id="about"
                className="relative py-24 sm:py-32 overflow-hidden bg-[#05010f] text-white"
            >

                {/* Background Glow Effects */}
                <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-purple-600/20 blur-[150px] rounded-full"></div>

                <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-cyan-400/20 blur-[150px] rounded-full"></div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                    {/* Section Heading */}
                    <div className="text-center mb-20">

                        <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs sm:text-sm mb-4">
                            About Me
                        </p>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">

                            Passionate About
                            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                                {" "}Building Modern Tech
                            </span>

                        </h2>

                        <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed px-2">
                            Combining creativity, development and modern technologies
                            to craft immersive digital experiences with performance,
                            scalability and elegant user interfaces.
                        </p>
                    </div>

                    {/* Main Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* LEFT SIDE */}
                        <div className="relative flex justify-center">

                            {/* Glow Ring */}
                            <div className="absolute w-[280px] sm:w-[360px] h-[280px] sm:h-[360px] rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-400/20 blur-3xl"></div>

                            {/* Image Wrapper */}
                            <div className="group relative w-full max-w-[380px]">

                                {/* Border Glow */}
                                <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-30 blur-sm group-hover:opacity-70 transition duration-500"></div>

                                {/* Main Card */}
                                <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">

                                    {/* Image */}
                                    <div className="relative overflow-hidden">

                                        <img
                                            src="/images/profilepicture.webp"
                                            alt="Shiba Murmu"
                                            className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
                                        />

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#05010f] via-transparent to-transparent"></div>

                                        {/* Floating Badge */}
                                        <div className="absolute top-5 left-5 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl">

                                            <p className="text-sm text-cyan-400">
                                                Full Stack Developer
                                            </p>

                                        </div>
                                    </div>

                                    {/* Bottom Card */}
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

                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-black font-black text-xl shadow-lg shadow-purple-500/20">
                                                S
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div>

                            {/* Mini Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">

                                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

                                <p className="text-sm text-cyan-400 tracking-wide">
                                    Who Am I
                                </p>
                            </div>

                            {/* Heading */}
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">

                                Creating immersive
                                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                                    {" "}digital experiences
                                </span>

                            </h3>

                            {/* Description */}
                            <div className="space-y-6 mt-8">

                                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                                    I'm a Computer Science Engineering graduate passionate
                                    about full stack development, modern UI/UX and AI-powered
                                    technologies. I enjoy transforming ideas into visually
                                    immersive and scalable applications.
                                </p>

                                <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
                                    My focus is on building high-performance web applications
                                    using React, Django and modern frontend technologies while
                                    continuously exploring intelligent systems and future tech.
                                </p>

                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-5 mt-10">

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
                                    <div
                                        key={item.label}
                                        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-cyan-400/30 transition duration-300"
                                    >

                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500/5 to-cyan-400/5 transition duration-500"></div>

                                        <div className="relative z-10">

                                            <h4 className="text-3xl font-black bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                                                {item.value}
                                            </h4>

                                            <p className="text-gray-400 text-sm mt-2">
                                                {item.label}
                                            </p>

                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="flex flex-col sm:flex-row gap-5 mt-12">

                                {/* Resume */}
                                <button className="group relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 text-black font-black shadow-2xl shadow-purple-500/20 hover:scale-[1.03] transition duration-300">

                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        Download Resume

                                        <span className="group-hover:translate-y-[2px] transition duration-300">
                                            ↓
                                        </span>
                                    </span>

                                </button>

                                {/* Contact */}
                                <a
                                    href="#contact"
                                    className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-cyan-400/30 transition duration-300 text-center"
                                >
                                    Contact Me
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Aboutme