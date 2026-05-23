import React from 'react'

function Projects() {
    return (
        <>

            <section id='projects' className="relative py-32 overflow-hidden bg-[#05010f] text-white">

                {/* Background Glow Effects */}
                <div className="absolute top-0 right-[-120px] w-[320px] h-[320px] bg-purple-600/20 blur-[150px] rounded-full"></div>

                <div className="absolute bottom-0 left-[-120px] w-[320px] h-[320px] bg-cyan-400/20 blur-[150px] rounded-full"></div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

                    {/* Section Heading */}
                    <div className="text-center mb-20">

                        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
                            Featured Work
                        </p>

                        <h2 className="text-4xl md:text-5xl font-black leading-tight">
                            Recent
                            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                                {" "}Projects
                            </span>
                        </h2>

                        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            A collection of modern full stack applications,
                            AI-powered solutions and immersive digital experiences.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid lg:grid-cols-3 gap-8">

                        {/* Featured Large Project */}
                        <div className="group relative lg:col-span-2">

                            <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-30 blur-sm group-hover:opacity-70 transition duration-500"></div>

                            <div className="relative h-full rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">

                                {/* Project Image */}
                                <div className="relative overflow-hidden h-[320px]">

                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-400/20 z-10"></div>

                                    <img
                                        src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
                                        alt="Project"
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                    />

                                    {/* Floating Badge */}
                                    <div className="absolute top-6 left-6 z-20 px-4 py-2 rounded-full border border-white/10 bg-black/40 backdrop-blur-xl text-sm text-white">
                                        Featured Project
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">

                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {["React", "Django", "JWT", "PostgreSQL"].map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-2 rounded-xl border border-white/10 bg-black/30 text-sm text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-3xl font-black mb-4">
                                        Real-Time Chat Application
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed text-lg">
                                        A modern real-time communication platform built
                                        with React and Django featuring JWT authentication,
                                        responsive UI and scalable backend architecture.
                                    </p>

                                    {/* Buttons */}
                                    <div className="flex flex-wrap gap-4 mt-8">

                                        <button className="px-7 py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 text-black font-bold shadow-xl shadow-purple-500/20 hover:scale-105 transition duration-300">
                                            Live Demo
                                        </button>

                                        <button className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 transition duration-300">
                                            GitHub
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side Project Cards */}
                        <div className="flex flex-col gap-8">

                            {/* Card 1 */}
                            <div className="group relative">

                                <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-20 blur-sm group-hover:opacity-60 transition duration-500"></div>

                                <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 overflow-hidden">

                                    {/* Image */}
                                    <div className="rounded-2xl overflow-hidden mb-6 h-[180px]">
                                        <img
                                            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
                                            alt="Library"
                                            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                        />
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {["React", "Tailwind"].map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 rounded-lg border border-white/10 bg-black/30 text-xs text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <h4 className="text-xl font-bold mb-3">
                                        Library Management System
                                    </h4>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Smart library management dashboard with modern UI,
                                        book tracking and responsive design.
                                    </p>

                                    <button className="mt-6 text-cyan-400 hover:text-white transition duration-300">
                                        View Project →
                                    </button>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="group relative">

                                <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-20 blur-sm group-hover:opacity-60 transition duration-500"></div>

                                <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 overflow-hidden">

                                    {/* Image */}
                                    <div className="rounded-2xl overflow-hidden mb-6 h-[180px]">
                                        <img
                                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                                            alt="AI Project"
                                            className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                        />
                                    </div>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {["Python", "AI", "Automation"].map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 rounded-lg border border-white/10 bg-black/30 text-xs text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <h4 className="text-xl font-bold mb-3">
                                        AI Productivity Assistant
                                    </h4>

                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Intelligent assistant system focused on automation,
                                        productivity workflows and smart integrations.
                                    </p>

                                    <button className="mt-6 text-cyan-400 hover:text-white transition duration-300">
                                        View Project →
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="flex justify-center mt-20">

                        <button className="group relative overflow-hidden px-10 py-5 rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 text-black font-bold shadow-2xl shadow-purple-500/20 hover:scale-105 transition duration-300">

                            <span className="relative z-10">
                                View All Projects
                            </span>

                        </button>
                    </div>

                </div>
            </section>

        </>
    )
}

export default Projects