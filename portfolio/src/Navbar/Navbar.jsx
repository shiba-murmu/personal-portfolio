import { useEffect, useRef, useState } from "react";
import PortfolioData from "../Data/PortfolioData";

export default function Navbar() {

    // =========================
    // STATES
    // =========================

    const [isOpen, setIsOpen] = useState(false);
    const [showNavbar, setShowNavbar] = useState(true);

    // Store Previous Scroll Position
    const lastScrollY = useRef(0);

    // Prevent Multiple Scroll Triggers
    const ticking = useRef(false);

    // =========================
    // OPTIMIZED SCROLL SYSTEM
    // =========================

    useEffect(() => {

        const updateNavbar = () => {

            const currentScrollY = window.scrollY;

            // Always show navbar near top
            if (currentScrollY < 80) {
                setShowNavbar(true);
            }

            // Scroll Down -> Hide
            else if (currentScrollY > lastScrollY.current) {
                setShowNavbar(false);

                // Close mobile menu automatically
                setIsOpen(false);
            }

            // Scroll Up -> Show
            else {
                setShowNavbar(true);
            }

            lastScrollY.current = currentScrollY;

            ticking.current = false;
        };

        const handleScroll = () => {

            // RequestAnimationFrame Optimization
            if (!ticking.current) {

                window.requestAnimationFrame(() => {
                    updateNavbar();
                });

                ticking.current = true;
            }
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (
        <>
            {/* Navbar Spacer */}
            <div className="h-20 w-full"></div>

            {/* ========================= */}
            {/* NAVBAR */}
            {/* ========================= */}

            <nav
                className={`
                    fixed top-0 left-0 w-full z-50
                    backdrop-blur-xl bg-black/30 border-b border-white/10

                    transition-transform duration-300 ease-out
                    will-change-transform
                    [backface-visibility:hidden]

                    ${showNavbar
                        ? "translate-y-0"
                        : "-translate-y-full"
                    }
                `}
            >

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                    <div className="flex items-center justify-between h-20">

                        {/* ========================= */}
                        {/* LOGO */}
                        {/* ========================= */}

                        <div className="flex items-center gap-3 cursor-pointer group">

                            {/* Logo Image */}
                            <div className="w-11 h-11 rounded-2xl overflow-hidden shadow-lg shadow-purple-500/20 group-hover:scale-105 transition duration-300">

                                <img
                                    src="/images/profilepicture.webp"
                                    alt="Logo"
                                    className="w-full h-full object-cover"
                                />

                            </div>

                            {/* Logo Text */}
                            <div>

                                <h1 className="text-white font-bold text-base sm:text-lg tracking-wide">
                                    {PortfolioData.herosection.name}
                                </h1>

                                <p className="text-[10px] sm:text-xs text-gray-400 tracking-[0.2em] uppercase">
                                    {PortfolioData.herosection.passion}
                                </p>

                            </div>
                        </div>

                        {/* ========================= */}
                        {/* DESKTOP NAV LINKS */}
                        {/* ========================= */}

                        <div className="hidden lg:flex items-center gap-10">

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

                                    className="
                                        relative text-gray-300 hover:text-white
                                        transition duration-300 text-sm
                                        tracking-wide font-medium group
                                    "
                                >

                                    {item}

                                    <span
                                        className="
                                            absolute left-0 -bottom-2
                                            w-0 h-[2px]
                                            bg-gradient-to-r from-purple-500 to-cyan-400
                                            transition-all duration-300
                                            group-hover:w-full rounded-full
                                        "
                                    ></span>

                                </a>
                            ))}
                        </div>

                        {/* ========================= */}
                        {/* RIGHT BUTTONS */}
                        {/* ========================= */}

                        <div className="hidden lg:flex items-center gap-4">

                            {/* Resume Button */}
                            <button
                                className="
                                    px-5 py-2.5 rounded-xl
                                    border border-white/10
                                    text-gray-300 hover:text-white
                                    hover:border-purple-400/40
                                    hover:bg-white/5
                                    transition duration-300 text-sm
                                "
                            >
                                Resume
                            </button>

                            {/* Hire Me Button */}
                            <button
                                className="
                                    relative overflow-hidden
                                    px-6 py-3 rounded-xl
                                    bg-gradient-to-r from-purple-500 to-cyan-400
                                    text-black font-semibold
                                    shadow-lg shadow-purple-500/20
                                    hover:scale-[1.03]
                                    transition duration-300
                                "
                            >

                                <span className="relative z-10">
                                    Hire Me
                                </span>

                            </button>
                        </div>

                        {/* ========================= */}
                        {/* MOBILE MENU BUTTON */}
                        {/* ========================= */}

                        <button
                            onClick={() => setIsOpen(!isOpen)}

                            className="
                                lg:hidden flex flex-col gap-1.5
                                active:scale-95 transition duration-200
                            "
                        >

                            {/* Line 1 */}
                            <span
                                className={`
                                    w-6 h-0.5 bg-white rounded-full
                                    transition duration-300

                                    ${isOpen
                                        ? "rotate-45 translate-y-2"
                                        : ""
                                    }
                                `}
                            ></span>

                            {/* Line 2 */}
                            <span
                                className={`
                                    w-6 h-0.5 rounded-full
                                    bg-gradient-to-r from-purple-400 to-cyan-400
                                    transition duration-300

                                    ${isOpen
                                        ? "opacity-0"
                                        : ""
                                    }
                                `}
                            ></span>

                            {/* Line 3 */}
                            <span
                                className={`
                                    h-0.5 bg-white rounded-full
                                    transition duration-300

                                    ${isOpen
                                        ? "w-6 -rotate-45 -translate-y-2"
                                        : "w-4 ml-auto"
                                    }
                                `}
                            ></span>

                        </button>
                    </div>
                </div>

                {/* ========================= */}
                {/* BOTTOM GLOW */}
                {/* ========================= */}

                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>

                {/* ========================= */}
                {/* MOBILE MENU */}
                {/* ========================= */}

                <div
                    className={`
                        lg:hidden overflow-hidden
                        transition-all duration-300 ease-out

                        ${isOpen
                            ? "max-h-[700px] opacity-100 pb-4"
                            : "max-h-0 opacity-0"
                        }
                    `}
                >

                    <div
                        className="
                            mx-4 rounded-[32px]
                            border border-white/10
                            bg-black/70 backdrop-blur-2xl
                            shadow-2xl shadow-purple-500/10
                            overflow-hidden
                        "
                    >

                        {/* Inner Container */}
                        <div className="p-6 flex flex-col gap-5">

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

                                    onClick={() => setIsOpen(false)}

                                    className="
                                        text-gray-300 hover:text-white
                                        transition duration-300
                                        text-base border-b border-white/5
                                        pb-4 hover:border-purple-400/40
                                    "
                                >
                                    {item}
                                </a>
                            ))}

                            {/* ========================= */}
                            {/* MOBILE BUTTONS */}
                            {/* ========================= */}

                            <div className="pt-2 flex flex-col gap-4">

                                {/* Resume */}
                                <button
                                    className="
                                        w-full py-4 rounded-2xl
                                        border border-purple-400/20
                                        bg-white/5 text-white
                                        hover:bg-white/10
                                        transition duration-300
                                    "
                                >
                                    Resume
                                </button>

                                {/* Hire Me */}
                                <button
                                    className="
                                        w-full py-4 rounded-2xl
                                        bg-gradient-to-r
                                        from-purple-500 via-fuchsia-500 to-cyan-400

                                        text-black font-semibold
                                        shadow-lg shadow-purple-500/20

                                        hover:scale-[1.02]
                                        transition duration-300
                                    "
                                >
                                    Hire Me
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}