import React from 'react'

function Resume() {
    return (
        <>
            <section className="relative py-32 overflow-hidden bg-[#05010f] text-white">

                {/* Background Glow Effects */}
                <div className="absolute top-[-100px] right-[-120px] w-[320px] h-[320px] bg-purple-600/20 blur-[150px] rounded-full"></div>

                <div className="absolute bottom-[-100px] left-[-120px] w-[320px] h-[320px] bg-cyan-400/20 blur-[150px] rounded-full"></div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

                    {/* Main Resume Card */}
                    <div className="group relative">

                        {/* Gradient Border Glow */}
                        <div className="absolute -inset-[1px] rounded-[2.5rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-30 blur-sm group-hover:opacity-70 transition duration-500"></div>

                        {/* Card */}
                        <div className="relative rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">

                            {/* Content */}
                            <div className="grid lg:grid-cols-2 gap-16 items-center p-8 sm:p-12 lg:p-16">

                                {/* Left Side */}
                                <div>

                                    {/* Small Badge */}
                                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-black/30 mb-8">

                                        <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

                                        <p className="text-sm text-cyan-400 tracking-wide">
                                            Professional Resume
                                        </p>
                                    </div>

                                    {/* Heading */}
                                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">

                                        Download My
                                        <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                                            {" "}Resume
                                        </span>

                                    </h2>

                                    {/* Description */}
                                    <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-xl">
                                        Explore my technical skills, development journey,
                                        projects and modern technology expertise through
                                        a professionally crafted resume designed for
                                        modern software engineering opportunities.
                                    </p>

                                    {/* Buttons */}
                                    <div className="flex flex-wrap gap-5 mt-10">

                                        {/* Download Button */}
                                        <button className="group/button relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 text-black font-bold shadow-2xl shadow-purple-500/20 hover:scale-105 transition duration-300">

                                            <span className="relative z-10 flex items-center gap-3">
                                                Download CV
                                                <span className="group-hover/button:translate-y-[2px] transition duration-300">
                                                    ↓
                                                </span>
                                            </span>

                                        </button>

                                        {/* Preview Button */}
                                        <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:border-cyan-400/40 transition duration-300">
                                            Preview Resume
                                        </button>
                                    </div>

                                    {/* Mini Stats */}
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 mt-14">

                                        <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-5">
                                            <h4 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                                10+
                                            </h4>

                                            <p className="text-gray-400 text-sm mt-2">
                                                Projects
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-5">
                                            <h4 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                                React
                                            </h4>

                                            <p className="text-gray-400 text-sm mt-2">
                                                Frontend
                                            </p>
                                        </div>

                                        <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-5">
                                            <h4 className="text-3xl font-black bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                                AI
                                            </h4>

                                            <p className="text-gray-400 text-sm mt-2">
                                                Future Tech
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side Resume Preview */}
                                <div className="relative flex justify-center">

                                    {/* Outer Glow */}
                                    <div className="absolute w-[320px] h-[420px] rounded-[2rem] bg-gradient-to-br from-purple-500/20 to-cyan-400/20 blur-3xl"></div>

                                    {/* Resume Mockup */}
                                    <div className="relative w-full max-w-[360px]">

                                        {/* Floating Card Glow */}
                                        <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-40 blur-sm"></div>

                                        {/* Resume Card */}
                                        <div className="relative rounded-[2rem] border border-white/10 bg-[#0b0718]/90 backdrop-blur-2xl overflow-hidden shadow-2xl shadow-purple-500/10">

                                            {/* Top Header */}
                                            <div className="p-6 border-b border-white/10">

                                                <div className="flex items-center justify-between">

                                                    <div>
                                                        <h3 className="text-2xl font-black">
                                                            Shiba Murmu
                                                        </h3>

                                                        <p className="text-cyan-400 text-sm mt-1">
                                                            Full Stack Developer
                                                        </p>
                                                    </div>

                                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-black font-black text-xl shadow-lg shadow-purple-500/20">
                                                        S
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Resume Content */}
                                            <div className="p-6 space-y-6">

                                                {/* Skill Bars */}
                                                {[
                                                    "React Development",
                                                    "Backend Engineering",
                                                    "UI/UX Design",
                                                    "AI Integration",
                                                ].map((skill, index) => (
                                                    <div key={skill}>

                                                        <div className="flex items-center justify-between mb-2">
                                                            <p className="text-sm text-gray-300">
                                                                {skill}
                                                            </p>

                                                            <p className="text-xs text-cyan-400">
                                                                {90 - index * 5}%
                                                            </p>
                                                        </div>

                                                        <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">

                                                            <div
                                                                className="h-full rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400"
                                                                style={{
                                                                    width: `${90 - index * 5}%`,
                                                                }}
                                                            ></div>

                                                        </div>
                                                    </div>
                                                ))}

                                                {/* Fake Resume Blocks */}
                                                <div className="space-y-4 pt-4">

                                                    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                                                        <div className="w-24 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 mb-3"></div>

                                                        <div className="space-y-2">
                                                            <div className="w-full h-2 rounded-full bg-white/10"></div>
                                                            <div className="w-[80%] h-2 rounded-full bg-white/10"></div>
                                                        </div>
                                                    </div>

                                                    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                                                        <div className="w-20 h-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 mb-3"></div>

                                                        <div className="space-y-2">
                                                            <div className="w-full h-2 rounded-full bg-white/10"></div>
                                                            <div className="w-[70%] h-2 rounded-full bg-white/10"></div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume