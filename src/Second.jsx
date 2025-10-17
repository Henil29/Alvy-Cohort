import { ArrowUpRight } from "lucide-react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
const services = [
    {
        title: "BRANDING",
        desc: "Develop a strong, recognizable fashion brand identity.",
        link: "ABOUT BRANDING",
    },
    {
        title: "IDENTITY",
        desc: "We create a unique and consistent image for your fashion brand.",
        link: "ABOUT IDENTITY",
    },
    {
        title: "MARKETING",
        desc: "Reach and engage your target audience effectively on all platforms.",
        link: "ABOUT MARKETING",
    },
    {
        title: "E-COMMERCE",
        desc: "Optimize online sales and drive growth for your e-commerce store.",
        link: "ABOUT E-COMMERCE",
    },
];

const Services = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(() => {
        gsap.from('.box', {
            y: 50,
            opacity: 0,
            duration: 2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: ".main-box",
                start: "top 85%",
                toggleActions: "play none none none",
                once: true
            },
        })
    }, []);
    return (
        <div className="bg-[#121212] text-white px-4 sm:px-6 md:px-10 py-12 main-box max-w-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 box">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="relative bg-[#1A1A1A] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:bg-[#222222] transition"
                    >
                        <div>
                            <h2 className="text-xl sm:text-2xl font-semibold tracking-wide mb-3">
                                {service.title}
                            </h2>
                            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                {service.desc}
                            </p>
                        </div>

                        <div className="mt-8 text-gray-200 hover:text-white transition pr-14 flex items-center justify-start gap-2">
                            <button aria-label="open" className="right-6 top-1/2 w-11 h-11 rounded-full bg-[#151515] flex items-center justify-center border border-white/10 z-10">
                                <ArrowUpRight size={18} />
                            </button>
                            <span className="uppercase text-xs sm:text-sm tracking-widest">{service.link}</span>
                        </div>


                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
