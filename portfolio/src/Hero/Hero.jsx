import React from 'react'
import PortfolioData from '../Data/PortfolioData'
function Hero() {
    return (
        <>
            <section id='home' className="relative min-h-screen overflow-hidden bg-[#05010f] text-white">
                {/* Background Glow Effects */}
                <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-purple-600/30 blur-[140px] rounded-full"></div>

                <div className="absolute bottom-[-150px] right-[-120px] w-[350px] h-[350px] bg-cyan-400/20 blur-[160px] rounded-full"></div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

                {/* Main Container */}
                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Content */}
                        <div>
                            {/* Small Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">
                                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>

                                <p className="text-sm text-gray-300 tracking-wide">
                                    Available for Freelance Projects
                                </p>
                            </div>

                            {/* Heading */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                                Building
                                <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                                    {" "}
                                    modern digital
                                </span>
                                <br />
                                experiences through code.
                            </h1>

                            {/* Description */}
                            <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-xl">
                               {PortfolioData.herosection.paragraph}
                            </p>

                            {/* Buttons */}
                            <div className="flex flex-wrap gap-5 mt-10">

                                {/* Primary Button */}
                                <button   className="relative overflow-hidden px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 text-black font-bold shadow-2xl shadow-purple-500/20 hover:scale-105 transition duration-300 cursor-pointer">
                                    <a href="#projects" className="text-black font-bold">
                                        View Projects
                                    </a>
                                </button>

                                {/* Secondary Button */}
                                <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 cursor-pointer transition duration-300">
                                    Download Resume
                                </button>
                            </div>

                            {/* Social Links */}
                            <div className="flex items-center gap-5 mt-12">
                                {["Linkedin", "Github"].map((item) => (
                                    <a
                                        key={item}
                                        href={PortfolioData.herosection.links[item.toLowerCase()]}
                                        className="text-gray-400 hover:text-cyan-400 transition duration-300"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="relative flex justify-center">

                            {/* Glow Ring */}
                            <div className="absolute w-[420px] h-[420px] rounded-full border border-purple-500/20"></div>

                            <div className="absolute w-[320px] h-[320px] rounded-full bg-gradient-to-br from-purple-500/20 to-cyan-400/20 blur-3xl"></div>

                            {/* Main Card */}
                            <div className="relative group">
                                <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-70 blur-sm"></div>

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

                                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-black font-black text-lg shadow-lg shadow-purple-500/30">
                                            S
                                        </div>
                                    </div>

                                    {/* Fake Code UI */}
                                    <div className="space-y-4">

                                        <div className="p-4 rounded-2xl bg-black/40 border border-white/5">
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
                                        </div>

                                        {/* Small Floating Cards */}
                                        <div className="grid grid-cols-2 gap-4">

                                            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:-translate-y-1 transition duration-300">
                                                <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                                    {PortfolioData.herosection.projectsBuilt}
                                                </p>

                                                <p className="text-gray-400 text-sm mt-1">
                                                    Projects Built
                                                </p>
                                            </div>

                                            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:-translate-y-1 transition duration-300">
                                                <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                                    {PortfolioData.herosection.modernFrontend}
                                                </p>

                                                <p className="text-gray-400 text-sm mt-1">
                                                    Modern Frontend
                                                </p>
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

export default Hero