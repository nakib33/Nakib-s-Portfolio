'use client';
import React from "react";
import { Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

const Profile = () => {
    const stats = [
        { label: 'Experience', value: '3+ yrs' },
        { label: 'Projects', value: '50+' },
        { label: 'Publication', value: '3+' },
    ];

    return (
        <div className="bg-slate-50 border-b border-gray-200">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 sm:gap-8">

                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                        <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-56 lg:h-56 rounded-full overflow-hidden border-4 border-white shadow-lg">
                            <img
                                src="/images/nakib.png"
                                alt="Nakib Uddin Ahmed"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-950 mb-1 tracking-wide">
                            Nakib Uddin Ahmed
                        </h1>
                        <p className="text-base sm:text-lg lg:text-xl text-sky-800 font-normal mb-3">
                            Full-Stack AI Engineer & Data Scientist
                        </p>

                        {/* Contact row */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-3 text-sm text-gray-600 mb-4">
                            <span className="flex items-center gap-1.5 break-words">
                                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                                Sylhet, Bangladesh
                            </span>
                            <a href="mailto:nakibuddin33@gmail.com" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors break-words">
                                <Mail className="w-3.5 h-3.5 text-gray-400" />
                                nakibuddin33@gmail.com
                            </a>
                            <a href="tel:+8801646819354" className="flex items-center gap-1.5 hover:text-blue-600 transition-colors break-words">
                                <Phone className="w-3.5 h-3.5 text-gray-400" />
                                +880 1646 - 819354
                            </a>
                        </div>

                        {/* Social links */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mb-5">
                            {[
                                { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', link: 'https://www.linkedin.com/in/nakib33/', hover: 'blue-600' },
                                { icon: <Github className="w-4 h-4" />, label: 'GitHub', link: 'https://github.com/nakib33', hover: 'gray-900' },
                                { icon: <Instagram className="w-4 h-4" />, label: 'Instagram', link: 'https://www.instagram.com/_nakiib_/', hover: 'pink-600' },
                                { icon: <Facebook className="w-4 h-4" />, label: 'Facebook', link: 'https://www.facebook.com/nakibuddinahmed0304', hover: 'blue-600' },
                                { icon: <Twitter className="w-4 h-4" />, label: 'X', link: 'https://www.twitter.com/nakibuddinahmed0304', hover: 'stone-900' },
                                { icon: null, label: 'Leetcode', link: 'https://leetcode.com/u/nakib33/', hover: 'orange-600' },
                            ].map((s, i) => (
                                <a
                                    key={i}
                                    href={s.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`inline-flex items-center gap-1.5 text-sm text-gray-600 border border-gray-300 px-2 sm:px-3 py-1 rounded hover:border-${s.hover} hover:text-${s.hover} transition-colors duration-200 break-words`}
                                >
                                    {s.icon} {s.label}
                                </a>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-sm">
                            {stats.map((s, i) => (
                                <div key={i} className="text-center min-w-[70px]">
                                    <div className="text-lg sm:text-xl font-semibold text-sky-900">{s.value}</div>
                                    <div className="text-gray-500 font-bold">{s.label}</div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;