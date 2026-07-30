'use client';
import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, MapPin, Send, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    // Show sending state
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    btn.innerHTML = '⏳ Sending...';
    btn.disabled = true;

    try {
      const res = await fetch('https://formsubmit.co/ajax/nakibforai@gmail.com', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        setSubmitted(true);
        form.reset();
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch {
      // Fallback: use mailto direct
      const name = formData.get('name');
      const email = formData.get('email');
      const subject = formData.get('subject');
      const message = formData.get('message');
      const mailtoLink = `mailto:nakibforai@gmail.com?subject=${encodeURIComponent(subject || 'Contact Form Message')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
      window.open(mailtoLink, '_blank');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    }

    btn.innerHTML = originalText;
    btn.disabled = false;
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-10">
          <p className="text-sm font-medium text-gray-500 mb-1">
            Get in touch
          </p>
          <h1 className="text-2xl font-bold text-gray-900 border-b border-gray-200 pb-3">
            Contact
          </h1>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10">
          {/* ── LEFT: Contact Form ── */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              {/* honeypot to prevent spam */}
              <input type="text" name="_honey" className="hidden" />
              <input type="hidden" name="_captcha" value="true" />
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800 transition"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800 transition"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="What is this about?"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800 transition"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Your message..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-md text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-800 focus:border-gray-800 transition resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white font-bold text-sm rounded-md hover:bg-gray-700 transition"
              >
                📩 Send Message
              </button>
            </form>
          </div>

          {/* ── RIGHT: Contact Info ── */}
          <div className="space-y-6">
            {/* Direct Contact */}
            <div className="border border-gray-200 rounded-md p-6">
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-5">
                Direct Contact
              </h2>
              <div className="space-y-4">
                <a
                  href="mailto:nakibuddin33@gmail.com"
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 bg-gray-100 rounded-md group-hover:bg-gray-200 transition">
                    <Mail className="w-4 h-4 text-[#1a3a4a]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm font-medium text-gray-800 group-hover:text-[#1a3a4a] transition">
                      nakibuddin33@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+8801646819354"
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 bg-gray-100 rounded-md group-hover:bg-gray-200 transition">
                    <Phone className="w-4 h-4 text-[#1a3a4a]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Phone</p>
                    <p className="text-sm font-medium text-gray-800 group-hover:text-[#1a3a4a] transition">
                      +880 1646-819354
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Online */}
            <div className="border border-gray-200 rounded-md p-6">
              <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-5">
                Online
              </h2>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/nakib33/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 bg-gray-100 rounded-md group-hover:bg-gray-200 transition">
                    <Linkedin className="w-4 h-4 text-[#1a3a4a]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">LinkedIn</p>
                    <p className="text-sm font-medium text-gray-800 group-hover:text-[#1a3a4a] transition">
                      linkedin.com/in/nakib33
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/nakib33"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 bg-gray-100 rounded-md group-hover:bg-gray-200 transition">
                    <Github className="w-4 h-4 text-[#1a3a4a]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">GitHub</p>
                    <p className="text-sm font-medium text-gray-800 group-hover:text-[#1a3a4a] transition">
                      github.com/nakib33
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Note */}
            <div className="bg-gray-50 border border-gray-200 rounded-md p-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                Open to research collaboration, co-authorship, and software engineering roles. Response time is typically within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
