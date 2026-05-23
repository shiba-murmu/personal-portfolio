import React from 'react'

function Skills() {
    return (
        <>
            <section id='skills' className="relative py-32 overflow-hidden bg-[#05010f] text-white">
                {/* Background Effects */}
                <div className="absolute top-0 left-[-120px] w-[320px] h-[320px] bg-purple-600/20 blur-[140px] rounded-full"></div>

                <div className="absolute bottom-0 right-[-120px] w-[320px] h-[320px] bg-cyan-400/20 blur-[150px] rounded-full"></div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

                    {/* Section Heading */}
                    <div className="text-center mb-20">
                        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
                            My Expertise
                        </p>

                        <h2 className="text-4xl md:text-5xl font-black leading-tight">
                            Skills &
                            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                                {" "}Technologies
                            </span>
                        </h2>

                        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            A modern stack focused on building scalable, performant
                            and immersive digital experiences.
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid lg:grid-cols-2 gap-8">

                        {/* Frontend */}
                        <div className="group relative">
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

                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-black font-black shadow-lg shadow-purple-500/20">
                                        FE
                                    </div>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-4">
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
                                        <div
                                            key={skill}
                                            className="px-5 py-3 rounded-2xl border border-white/10 bg-black/30 text-gray-300 hover:text-white hover:border-purple-400/40 hover:bg-white/10 transition duration-300 cursor-pointer hover:-translate-y-1"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Backend */}
                        <div className="group relative">
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

                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-black font-black shadow-lg shadow-purple-500/20">
                                        BE
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-4">
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
                                        <div
                                            key={skill}
                                            className="px-5 py-3 rounded-2xl border border-white/10 bg-black/30 text-gray-300 hover:text-white hover:border-cyan-400/40 hover:bg-white/10 transition duration-300 cursor-pointer hover:-translate-y-1"
                                        >
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* AI Section */}
                        {/* AI Section */}
                        <div className="group relative lg:col-span-2">
                            <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-30 blur-sm group-hover:opacity-70 transition duration-500"></div>

                            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 overflow-hidden">

                                {/* Responsive Grid */}
                                <div className="grid lg:grid-cols-2 gap-14 items-center">

                                    {/* Left Content */}
                                    <div className="text-center lg:text-left">

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

                                        <button className="mt-8 w-full sm:w-fit px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 text-black font-bold shadow-xl shadow-purple-500/20 hover:scale-105 transition duration-300">
                                            Explore Projects
                                        </button>
                                    </div>

                                    {/* Right Floating Tech Cards */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4 lg:mt-0">

                                        {[
                                            "Machine Learning",
                                            "AI Integration",
                                            "Prompt Engineering",
                                            "Automation",
                                        ].map((item) => (
                                            <div
                                                key={item}
                                                className="group/card rounded-3xl border border-white/10 bg-black/30 backdrop-blur-xl p-6 hover:-translate-y-2 hover:border-purple-400/40 transition duration-300"
                                            >
                                                {/* Icon */}
                                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 mb-5 opacity-90 shadow-lg shadow-purple-500/20"></div>

                                                <h4 className="text-lg font-semibold group-hover/card:text-cyan-400 transition duration-300">
                                                    {item}
                                                </h4>

                                                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                                                    Modern development workflows powered by intelligent systems.
                                                </p>
                                            </div>
                                        ))}
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

export default Skills