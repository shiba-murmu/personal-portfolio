import React from 'react'
import PortfolioData from '../Data/PortfolioData'
function Footer() {
    return (
        <>
            <footer className="relative overflow-hidden bg-[#05010f] text-white border-t border-white/10">

                {/* Background Glow Effects */}
                <div className="absolute top-[-120px] left-[-120px] w-[280px] h-[280px] bg-purple-600/20 blur-[140px] rounded-full"></div>

                <div className="absolute bottom-[-120px] right-[-120px] w-[280px] h-[280px] bg-cyan-400/20 blur-[140px] rounded-full"></div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                    {/* Top Footer */}
                    <div className="py-16 grid lg:grid-cols-3 gap-14">

                        {/* Left Branding */}
                        <div>

                            {/* Logo */}
                            <div className="flex items-center gap-4">

                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center text-black font-black text-2xl shadow-2xl shadow-purple-500/20">
                                    <img src="/images/profilepicture.webp" className='rounded-2xl' alt="Shiba Murmu" />
                                </div>

                                <div>
                                    <h2 className="text-2xl font-black">
                                        {PortfolioData.herosection.name}
                                    </h2>

                                    <p className="text-cyan-400 text-sm mt-1">
                                        {PortfolioData.herosection.role}
                                    </p>
                                </div>
                            </div>

                            {/* Description */}
                            <p className="mt-8 text-gray-400 leading-relaxed max-w-md">
                                Passionate about building modern,
                                scalable and immersive digital experiences
                                using frontend, backend and AI technologies.
                            </p>

                            {/* Status */}
                            <div className="mt-8 flex items-center gap-3 px-4 py-3 rounded-2xl border border-green-400/20 bg-green-400/10 w-fit">

                                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

                                <span className="text-green-400 text-sm">
                                    Available for Work
                                </span>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>

                            <h3 className="text-xl font-bold mb-8">
                                Quick Links
                            </h3>

                            <div className="grid grid-cols-2 gap-4">

                                {[
                                    "Home",
                                    "About",
                                    "Skills",
                                    "Projects",
                                    "Experience",
                                    "Contact",
                                ].map((item) => (
                                    <a
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="group flex items-center gap-3 text-gray-400 hover:text-white transition duration-300"
                                    >

                                        <span className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 opacity-70 group-hover:scale-125 transition duration-300"></span>

                                        <span>
                                            {item}
                                        </span>

                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Social & Newsletter */}
                        <div>

                            <h3 className="text-xl font-bold mb-8">
                                Connect With Me
                            </h3>

                            {/* Social Icons */}
                            <div className="flex flex-wrap gap-4">

                                {[
                                    {
                                        name: "GitHub",
                                        icon: "G",
                                        link: PortfolioData.herosection.links.github,
                                    },
                                    {
                                        name: "LinkedIn",
                                        icon: "in",
                                        link: PortfolioData.herosection.links.linkedin,
                                    },
                                    // {
                                    //     name: "Twitter",
                                    //     icon: "X",
                                    //     link: "https://twitter.com",
                                    // },
                                ].map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group relative overflow-hidden w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-lg font-bold hover:border-cyan-400/30 transition duration-300"
                                    >

                                        {/* Glow */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-purple-500/10 to-cyan-400/10 transition duration-500"></div>

                                        <span className="relative z-10 group-hover:scale-110 transition duration-300">
                                            {item.icon}
                                        </span>

                                    </a>
                                ))}
                            </div>

                            {/* Newsletter */}
                            <div className="mt-10">

                                <p className="text-gray-400 mb-5 leading-relaxed">
                                    Stay updated with my latest projects
                                    and development journey.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4">

                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 px-5 py-4 rounded-2xl border border-white/10 bg-black/30 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40 focus:bg-black/40 transition duration-300"
                                    />

                                    <button className="px-6 py-4 rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 text-black font-bold hover:scale-[1.03] transition duration-300">
                                        Join
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Divider */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                    {/* Bottom Footer */}
                    <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-5">

                        {/* Copyright */}
                        <p className="text-gray-500 text-sm text-center md:text-left">
                            © 2026 Shiba Murmu. All rights reserved.
                        </p>

                        {/* Center Text */}
                        <p className="text-sm text-gray-400 text-center">
                            Designed & Developed with
                            <span className="mx-2 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
                                creativity & code
                            </span>
                        </p>

                        {/* Back To Top */}
                        <a
                            href="#home"
                            className="group flex items-center gap-3 px-5 py-3 rounded-2xl border border-white/10 bg-white/5 hover:border-cyan-400/30 transition duration-300"
                        >

                            <span className="text-sm text-gray-300 group-hover:text-white transition duration-300">
                                Back to Top
                            </span>

                            <span className="group-hover:-translate-y-1 transition duration-300">
                                ↑
                            </span>

                        </a>
                    </div>

                </div>
            </footer>


        </>
    )
}

export default Footer