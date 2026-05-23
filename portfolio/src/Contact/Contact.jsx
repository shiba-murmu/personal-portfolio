import { useState } from "react";

export default function Contact() {
    const [copied, setCopied] = useState("");

    const copyToClipboard = (text, type) => {
        navigator.clipboard.writeText(text);

        setCopied(type);

        setTimeout(() => {
            setCopied("");
        }, 2000);
    };

    const contacts = [
        {
            id: "email",
            title: "Email",
            value: "yourmail@example.com",
            icon: "@",
            action: "Send",
            link: "mailto:yourmail@example.com",
        },
        {
            id: "github",
            title: "GitHub",
            value: "github.com/shiba",
            icon: "G",
            action: "Visit",
            link: "https://github.com/shiba",
        },
        {
            id: "linkedin",
            title: "LinkedIn",
            value: "linkedin.com/in/shiba",
            icon: "in",
            action: "Visit",
            link: "https://linkedin.com/in/shiba",
        },
    ];

    return (
        <section id="contact"  className="relative py-24 sm:py-32 overflow-hidden bg-[#05010f] text-white ">

            {/* Background Glow */}
            <div className="absolute top-[-100px] left-[-100px] w-[280px] h-[280px] bg-purple-600/20 blur-[140px] rounded-full"></div>

            <div className="absolute bottom-[-100px] right-[-100px] w-[280px] h-[280px] bg-cyan-400/20 blur-[140px] rounded-full"></div>

            {/* Grid Overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

                {/* Heading */}
                <div className="text-center mb-16 sm:mb-20">

                    <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs sm:text-sm mb-4">
                        Contact Me
                    </p>

                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black leading-tight">

                        Let's Build
                        <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                            {" "}Something Amazing
                        </span>

                    </h2>

                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed px-2">
                        Have a project idea, collaboration or opportunity?
                        Let’s connect and create modern digital experiences together.
                    </p>
                </div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">

                    {/* LEFT SIDE */}
                    <div className="space-y-6">

                        {/* Profile Card */}
                        <div className="group relative">

                            <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-20 blur-sm group-hover:opacity-60 transition duration-500"></div>

                            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 overflow-hidden">

                                {/* Header */}
                                <div className="flex items-center gap-4 sm:gap-5 mb-8">

                                    <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-black font-black text-2xl shadow-2xl shadow-purple-500/20">
                                        S
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="text-xl sm:text-2xl font-black truncate">
                                            Shiba Murmu
                                        </h3>

                                        <p className="text-cyan-400 text-sm sm:text-base mt-1">
                                            Full Stack Developer
                                        </p>
                                    </div>
                                </div>

                                <p className="text-gray-400 leading-relaxed text-sm sm:text-lg">
                                    Passionate about building immersive,
                                    scalable and modern applications using
                                    frontend, backend and AI technologies.
                                </p>

                                {/* Contact Cards */}
                                <div className="space-y-4 mt-10">

                                    {contacts.map((item) => (
                                        <div
                                            key={item.id}
                                            className="group/card relative overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur-xl p-4 hover:border-cyan-400/30 transition duration-300"
                                        >

                                            {/* Glow */}
                                            <div className="absolute inset-0 opacity-0 group-hover/card:opacity-100 bg-gradient-to-r from-purple-500/5 to-cyan-400/5 transition duration-500"></div>

                                            {/* Responsive Layout */}
                                            <div className="relative flex flex-col gap-5">

                                                {/* Top */}
                                                <div className="flex items-center gap-4 min-w-0">

                                                    {/* Icon */}
                                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center text-black font-bold shadow-lg shadow-purple-500/20">
                                                        {item.icon}
                                                    </div>

                                                    {/* Content */}
                                                    <div className="min-w-0 flex-1">

                                                        <p className="text-gray-500 text-xs sm:text-sm">
                                                            {item.title}
                                                        </p>

                                                        <p className="text-white font-medium text-sm sm:text-base break-all">
                                                            {item.value}
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Buttons */}
                                                <div className="grid grid-cols-2 gap-3 w-full">

                                                    {/* Copy Button */}
                                                    <button
                                                        onClick={() =>
                                                            copyToClipboard(
                                                                item.link,
                                                                item.id
                                                            )
                                                        }
                                                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/5 text-sm text-white hover:border-purple-400/40 hover:bg-white/10 transition duration-300"
                                                    >
                                                        {copied === item.id
                                                            ? "Copied!"
                                                            : "Copy"}
                                                    </button>

                                                    {/* Action Button */}
                                                    <a
                                                        href={item.link}
                                                        target={
                                                            item.id !== "email"
                                                                ? "_blank"
                                                                : undefined
                                                        }
                                                        rel="noopener noreferrer"
                                                        className="w-full text-center px-4 py-3 rounded-xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 text-black text-sm font-semibold hover:scale-[1.02] transition duration-300"
                                                    >
                                                        {item.action}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Availability Card */}
                        <div className="group relative">

                            <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-20 blur-sm group-hover:opacity-60 transition duration-500"></div>

                            <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 overflow-hidden">

                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">

                                    <div>
                                        <p className="text-gray-400 mb-2 text-sm">
                                            Current Status
                                        </p>

                                        <h4 className="text-2xl sm:text-3xl font-black">
                                            Available for Work
                                        </h4>
                                    </div>

                                    <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-green-400/20 bg-green-400/10 w-fit">

                                        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>

                                        <span className="text-green-400 text-sm">
                                            Online
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="group relative">

                        <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 opacity-20 blur-sm group-hover:opacity-60 transition duration-500"></div>

                        <div className="relative rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-8 overflow-hidden">

                            {/* Form Header */}
                            <div className="mb-10">

                                <p className="text-cyan-400 uppercase tracking-[0.2em] text-xs sm:text-sm mb-3">
                                    Send Message
                                </p>

                                <h3 className="text-2xl sm:text-3xl font-black">
                                    Start a Conversation
                                </h3>
                            </div>

                            {/* Form */}
                            <form className="space-y-6">

                                {/* Name */}
                                <div>
                                    <label className="block text-sm text-gray-400 mb-3">
                                        Your Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-black/30 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40 focus:bg-black/40 transition duration-300"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm text-gray-400 mb-3">
                                        Your Email
                                    </label>

                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-black/30 text-white placeholder:text-gray-500 outline-none focus:border-purple-400/40 focus:bg-black/40 transition duration-300"
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label className="block text-sm text-gray-400 mb-3">
                                        Subject
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Project subject"
                                        className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-black/30 text-white placeholder:text-gray-500 outline-none focus:border-cyan-400/40 focus:bg-black/40 transition duration-300"
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label className="block text-sm text-gray-400 mb-3">
                                        Message
                                    </label>

                                    <textarea
                                        rows="6"
                                        placeholder="Write your message..."
                                        className="w-full px-5 py-4 rounded-2xl border border-white/10 bg-black/30 text-white placeholder:text-gray-500 outline-none resize-none focus:border-purple-400/40 focus:bg-black/40 transition duration-300"
                                    ></textarea>
                                </div>

                                {/* Button */}
                                <button className="w-full px-8 py-5 rounded-2xl bg-gradient-to-r from-purple-500 via-fuchsia-500 to-cyan-400 text-black font-black shadow-2xl shadow-purple-500/20 hover:scale-[1.02] transition duration-300">
                                    Send Message →
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}