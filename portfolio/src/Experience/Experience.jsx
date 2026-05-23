import React from 'react'

function Experience() {
    return (
        <>
            <section id='experience' className="relative py-32 overflow-hidden bg-[#05010f] text-white">

                {/* Background Glow Effects */}
                <div className="absolute top-[-100px] left-[-120px] w-[320px] h-[320px] bg-purple-600/20 blur-[150px] rounded-full"></div>

                <div className="absolute bottom-[-100px] right-[-120px] w-[320px] h-[320px] bg-cyan-400/20 blur-[150px] rounded-full"></div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

                    {/* Section Heading */}
                    <div className="text-center mb-24">

                        <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
                            My Journey
                        </p>

                        <h2 className="text-4xl md:text-5xl font-black leading-tight">
                            Experience &
                            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                                {" "}Education
                            </span>
                        </h2>

                        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                            My learning journey, development experience and
                            continuous growth in modern technology & software engineering.
                        </p>
                    </div>

                    {/* Timeline Wrapper */}
                    <div className="relative">

                        {/* Center Timeline Line */}
                        <div className="hidden lg:block absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-purple-500 via-fuchsia-500 to-cyan-400 opacity-40"></div>

                        <div className="space-y-16">

                            {/* Education */}
                            <div className="relative grid lg:grid-cols-2 gap-10 items-center">

                                {/* Empty Space */}
                                <div className="hidden lg:block"></div>

                                {/* Card */}
                                <div className="group relative">

                                    {/* Timeline Dot */}
                                    <div className="hidden lg:flex absolute -left-[60px] top-10 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-2xl shadow-purple-500/40 items-center justify-center">
                                        <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                                    </div>

                                    <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-20 blur-sm group-hover:opacity-60 transition duration-500"></div>

                                    <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden">

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
                                        <div className="flex flex-wrap gap-3 mt-8">
                                            {[
                                                "Java",
                                                "Python",
                                                "DBMS",
                                                "Web Development",
                                            ].map((item) => (
                                                <span
                                                    key={item}
                                                    className="px-4 py-2 rounded-xl border border-white/10 bg-black/30 text-sm text-gray-300"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Experience */}
                            <div className="relative grid lg:grid-cols-2 gap-10 items-center">

                                {/* Card */}
                                <div className="group relative">

                                    {/* Timeline Dot */}
                                    <div className="hidden lg:flex absolute -right-[60px] top-10 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-2xl shadow-purple-500/40 items-center justify-center">
                                        <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                                    </div>

                                    <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-20 blur-sm group-hover:opacity-60 transition duration-500"></div>

                                    <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden">

                                        {/* Badge */}
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

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-3 mt-8">
                                            {[
                                                "React",
                                                "Django",
                                                "JWT",
                                                "REST API",
                                                "Tailwind CSS",
                                            ].map((item) => (
                                                <span
                                                    key={item}
                                                    className="px-4 py-2 rounded-xl border border-white/10 bg-black/30 text-sm text-gray-300"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Empty Space */}
                                <div className="hidden lg:block"></div>
                            </div>

                            {/* AI Learning */}
                            <div className="relative grid lg:grid-cols-2 gap-10 items-center">

                                <div className="hidden lg:block"></div>

                                {/* Card */}
                                <div className="group relative">

                                    {/* Timeline Dot */}
                                    <div className="hidden lg:flex absolute -left-[60px] top-10 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 shadow-2xl shadow-purple-500/40 items-center justify-center">
                                        <div className="w-2.5 h-2.5 rounded-full bg-black"></div>
                                    </div>

                                    <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-20 blur-sm group-hover:opacity-60 transition duration-500"></div>

                                    <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden">

                                        {/* Badge */}
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
                                        <div className="flex flex-wrap gap-3 mt-8">
                                            {[
                                                "AI",
                                                "Machine Learning",
                                                "Automation",
                                                "Prompt Engineering",
                                            ].map((item) => (
                                                <span
                                                    key={item}
                                                    className="px-4 py-2 rounded-xl border border-white/10 bg-black/30 text-sm text-gray-300"
                                                >
                                                    {item}
                                                </span>
                                            ))}
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

export default Experience