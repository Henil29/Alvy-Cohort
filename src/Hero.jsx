import image from './assets/imgs/image1.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Hero = () => {

    useGSAP(() => {
        gsap.from('.hero',{
            y:50,
            opacity:0,
            duration:2,
            ease:'power3.out',
        })
    },[]);
    return (
        <div className="relative px-4 py-2 hero max-w-screen">
            <div className="z-[2] opacity-30 bg-[#121212] absolute inset-0 rounded-2xl"></div>

            <img
                src={image}
                alt=""
                className="rounded-2xl w-full h-[50vh] lg:h-auto md:h-auto block object-cover"
            />

            <div
                className="
                    absolute z-20 text-white 
                    flex flex-col items-start
                    md:flex-row md:items-end
                    lg:flex-row lg:items-end
                    gap-4 sm:gap-6 
                    bottom-4 sm:bottom-6 md:bottom-10 
                    left-4 sm:left-6 md:left-10 
                    right-4 sm:right-6 md:right-10
                    text-left
                "
            >
                <div className="max-w-full sm:max-w-[90%] md:max-w-[80%] px-4">
                    <h1 className="
                        md:text-4xl lg:text-9xl text-3xl 
                        leading-tight font-['font1'] break-words
                    ">
                        FASHION<br />
                        <span className="block pl-0 md:pl-12 lg:pl-20">
                            &amp; BRANDING
                        </span>
                    </h1>

                    <p className="
                        mt-3 sm:mt-5 text-sm sm:text-base pl-0 md:pl-12 lg:pl-20
                        text-white/80 
                        max-w-md sm:max-w-xl
                        break-words
                    ">
                        Bringing Your Fashion Brand's Unique Identity to Life Through Strategic Marketing and Advertising.
                    </p>
                </div>

                {/* CTA Button */}
                <div className="mt-4 md:mt-6 flex items-center justify-end gap-3 sm:gap-4 pl-4 mb-4">
                    <button className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 hover:border-white/40 transition">
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M15.9531 11.5781L10.3281 17.2031C10.2857 17.2476 10.2348 17.2829 10.1784 17.3071C10.122 17.3313 10.0613 17.3438 9.99993 17.3438C9.93856 17.3438 9.87784 17.3313 9.82143 17.3071C9.76503 17.2829 9.71412 17.2476 9.6718 17.2031L4.0468 11.5781C3.95978 11.4911 3.91089 11.3731 3.91089 11.25C3.91089 11.1269 3.95978 11.0089 4.0468 10.9219C4.13383 10.8349 4.25186 10.786 4.37493 10.786C4.498 10.786 4.61603 10.8349 4.70305 10.9219L9.53118 15.7422V3.125C9.53118 3.00068 9.58056 2.88145 9.66847 2.79354C9.75638 2.70564 9.87561 2.65625 9.99993 2.65625C10.1242 2.65625 10.2435 2.70564 10.3314 2.79354C10.4193 2.88145 10.4687 3.00068 10.4687 3.125V15.7422L15.2968 10.9219C15.3838 10.8349 15.5019 10.786 15.6249 10.786C15.748 10.786 15.866 10.8349 15.9531 10.9219C16.0401 11.0089 16.089 11.1269 16.089 11.25C16.089 11.3731 16.0401 11.4911 15.9531 11.5781Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>
                    <span className="uppercase text-xs sm:text-sm tracking-widest text-white/90">
                        Learn More
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Hero
