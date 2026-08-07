'use client';
import React from "react";
import { Github, GraduationCap, Instagram, Linkedin, Mail, MapPin, Phone, Download, FileText } from 'lucide-react';
import Link from 'next/link';

const Profile = () => {
    const stats = [
        { value: '3+', label: 'Years Experience' },
        { value: '50+', label: 'Projects' },
        { value: '8+', label: 'Professional Certifications' },
    ];

    const socials = [
        { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/nakib33/' },
        { icon: <Github className="w-4 h-4" />, label: 'GitHub', link: 'https://github.com/nakib33' },
        { icon: <Instagram className="w-4 h-4" />, label: 'Instagram', link: 'https://www.instagram.com/_nakiib_/' },
        { icon: <GraduationCap className="w-4 h-4" />, label: 'Scholar', link: 'https://scholar.google.com/citations?hl=en&user=NYlbPAwAAAAJ' },
    ];

    return (
        <div className="relative bg-white border-b border-gray-200">
            {/* subtle technical grid pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.35] [background-image:radial-gradient(#d1d5db_1px,transparent_1px)] [background-size:22px_22px]"></div>

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-x-10 gap-y-6 lg:gap-y-10 items-center">

                    {/* ── Part A: Name (mobile first) ── */}
                    <div className="order-1 lg:col-start-1 lg:row-start-1">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight tracking-tight">
                            Nakib Uddin <span className="text-gray-400">Ahmed</span>
                        </h1>
                    </div>

                    {/* ── Part B: Portrait (mobile second) ── */}
                    <div className="order-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 flex justify-center">
                        <div className="relative">
                            {/* offset frame */}
                            <div className="absolute -top-3 -right-3 w-full h-full border border-gray-300 rounded-2xl"></div>
                            <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden shadow-lg">
                                <img
                                    src="/images/nakib.png"
                                    alt="Nakib Uddin Ahmed"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* floating badge */}
                            <div className="absolute -bottom-4 -left-4 bg-gray-700 text-white rounded-lg px-3.5 py-2.5 shadow-md">
                                <p className="text-xl font-bold leading-none">6+</p>
                                <p className="text-[9px] tracking-widest uppercase text-gray-300 mt-1">Peer-Reviewed Papers</p>
                            </div>
                        </div>
                    </div>

                    {/* ── Part C: other info (mobile third) ── */}
                    <div className="order-3 lg:col-start-1 lg:row-start-2">
                        <div className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-3.5 py-1 mb-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-gray-800"></span>
                            <span className="text-[11px] font-semibold tracking-widest uppercase text-gray-500">
                                AI Researcher &amp; ML Engineer
                            </span>
                        </div>

                        <p className="text-base sm:text-lg text-gray-500 mb-4 text-justify">
                            Building <span className="text-gray-700 font-medium">trustworthy, interpretable AI</span> for
                            healthcare, medical imaging, and intelligent systems.
                        </p>

                        {/* quick highlights */}
                        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600 mb-5">
                            <span className="flex items-center gap-1.5">
                                <MapPin className="w-3.5 h-3.5 text-gray-400" /> Sylhet, Bangladesh
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Mail className="w-3.5 h-3.5 text-gray-400" /> nakibuddin33@gmail.com
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Phone className="w-3.5 h-3.5 text-gray-400" /> +880 1646-819354
                            </span>
                        </div>

                        {/* buttons */}
                        <div className="flex flex-wrap gap-2.5 mb-5">
                            <Link
                                href="/pages/publications"
                                className="inline-flex items-center gap-2 bg-gray-800 text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-700 transition"
                            >
                                <FileText className="w-4 h-4" /> View Research
                            </Link>
                            <a
                                href="/Nakib_CV.pdf"
                                download
                                onClick={() => window.open("/Nakib_CV.pdf", "_blank")}
                                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-gray-800 hover:text-white hover:border-gray-800 transition"
                            >
                                <Download className="w-4 h-4" /> Download CV
                            </a>
                        </div>

                        {/* socials */}
                        <div className="flex flex-wrap gap-2">
                            {socials.map((s, i) => (
                                <a
                                    key={i}
                                    href={s.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-sm text-gray-600 border border-gray-300 px-3 py-1.5 rounded-lg hover:bg-gray-800 hover:text-white hover:border-gray-800 transition-all duration-200"
                                >
                                    {s.icon} {s.label}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── STATS ── */}
                <div className="grid grid-cols-3 gap-4 mt-8 border-t border-gray-200 pt-6">
                    {stats.map((s, i) => (
                        <div key={i} className="text-center">
                            <div className="text-2xl sm:text-3xl font-extrabold text-gray-900">{s.value}</div>
                            <div className="text-[10px] sm:text-xs font-semibold tracking-widest text-gray-500 uppercase mt-1">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Profile;
