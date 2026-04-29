"use client";
import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AsciiImage from "./ascii-image";
import { Mail, MessageSquare, ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react";
import Link from "next/link";

const ContactSection = () => {
    const [status, setStatus] = useState("Send Message");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event:any) => {
        event.preventDefault();
        setIsSubmitting(true);
        setStatus("Sending...");

        const formData = new FormData(event.target);
        // Your Access Key integrated here
        formData.append("access_key", "0dfa929e-2f81-4c61-ba6d-a2b45980cf70");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setStatus("Success!");
                event.target.reset();
                setTimeout(() => setStatus("Send Message"), 3000);
            } else {
                setStatus("Error!");
                setTimeout(() => setStatus("Send Message"), 3000);
            }
        } catch (error) {
            setStatus("Error!");
            setTimeout(() => setStatus("Send Message"), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section 
            className="relative z-20 min-h-screen w-full flex items-center overflow-hidden selection:bg-black selection:text-red-500"
        >
            <div className="relative z-10 w-full max-w-6xl mx-auto px-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    
                    {/* Left: Form Side */}
                    <div className="flex flex-col space-y-10">
                        <div className="space-y-4">
                            <h3 className="contact-title text-5xl md:text-7xl font-bold uppercase tracking-tighter text-white font-host leading-[0.8]">
                                Let's <br /> 
                                <span className="text-black">Connect</span>
                            </h3>
                            <p className="contact-title font-inter text-white/80 max-w-md text-sm md:text-lg">
                                Have an idea that needs a perfectionist's touch? 
                                Drop a message or reach out via socials.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="contact-form space-y-6">
                            <div className="group relative">
                                <label className="block font-bold font-inter text-sm uppercase text-black mb-2">01. Full Name</label>
                                <input 
                                    name="name"
                                    type="text" 
                                    required
                                    placeholder="John Doe"
                                    className="w-full bg-transparent border-b-2 border-black/20 py-4 text-white placeholder:text-black/20 focus:outline-none focus:border-black transition-colors font-inter text-sm md:text-xl"
                                />
                            </div>

                            <div className="group relative">
                                <label className="block font-bold font-inter text-sm uppercase text-black mb-2">02. Email Address</label>
                                <input 
                                    name="email"
                                    type="email" 
                                    required
                                    placeholder="john@example.com"
                                    className="w-full bg-transparent border-b-2 border-black/20 py-4 text-white placeholder:text-black/20 focus:outline-none focus:border-black transition-colors font-inter text-sm md:text-xl"
                                />
                            </div>

                            <div className="group relative">
                                <label className="block font-bold font-inter text-sm uppercase text-black mb-2">03. Your Message</label>
                                <textarea 
                                    name="message"
                                    rows={4}
                                    required
                                    placeholder="Tell me about the project..."
                                    className="w-full bg-transparent border-b-2 border-black/20 py-4 text-white placeholder:text-black/20 focus:outline-none focus:border-black transition-colors font-inter text-sm md:text-xl resize-none"
                                />
                            </div>

                            <button 
                                type="submit"
                                disabled={isSubmitting}
                                className="group flex items-center gap-4 px-10 py-5 bg-black text-white font-jet text-sm font-bold hover:bg-white hover:text-black transition-all duration-500 uppercase disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {status}
                                <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                            </button>
                        </form>
                    </div>

                    {/* Right: Info & Visual Side */}
                    <div className="flex flex-col justify-between md:py-10">
                        <div className="absolute z-0 flex justify-center lg:justify-end opacity-40 grayscale contrast-125">
                            <AsciiImage
                                src="/images/phone.png"
                                width={200}
                                className="text-white text-[1vw] lg:text-[0.7vw]"
                            />
                        </div>

                        <div className="contact-info space-y-12 z-20">
                            {/* Contact Details */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-black text-white"><Mail size={20} /></div>
                                    <div>
                                        <p className="font-jet text-sm uppercase text-black/60">Email</p>
                                        <p className="text-sm md:text-xl font-host text-white">ayyush227@gmail.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-black text-white"><MessageSquare size={20} /></div>
                                    <div>
                                        <p className="font-jet text-sm uppercase text-black/60">Based in</p>
                                        <p className="text-sm md:text-xl font-host text-white">Earth / Nepal / Kathmandu</p>
                                    </div>
                                </div>
                            </div>

                            {/* Socials Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <Link  target='_blank' href="https://github.com/shrexshes" className="flex items-center justify-between p-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all font-jet text-sm">
                                    GITHUB <Github size={16} />
                                </Link>
                                <Link  target='_blank' href="https://www.linkedin.com/in/ayushshrestha36/" className="flex items-center justify-between p-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all font-jet text-sm">
                                    LINKEDIN <Linkedin size={16} />
                                </Link>
                                <Link  target='_blank' href="https://x.com/AyushShrestha69" className="flex items-center justify-between p-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all font-jet text-sm">
                                    TWITTER <Twitter size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-8 left-8 w-4 h-4 border-l border-t border-black opacity-30"></div>
            <div className="absolute bottom-8 right-8 w-4 h-4 border-r border-b border-black opacity-30"></div>
        </section>
    );
};

export default ContactSection;