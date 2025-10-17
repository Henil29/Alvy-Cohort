import img8 from './assets/imgs/image8.png'
import img9 from './assets/imgs/image9.png'
import img10 from './assets/imgs/image10.png'

const data = [
    {
        img: img8,
        blur: 'Marketing',
        title: 'The Power of Influencer Marketing',
        desc: "Discover how leveraging influencer partnerships can skyrocket your fashion brand's visibility and engagement.",
    },
    {
        img: img9,
        blur: 'BRANDING',
        title: 'Effective Advertising Strategies for Fashion Brands',
        desc: "Uncover the proven tactics and techniques to create compelling advertisements that drive results for your fashion brand.",
    },
    {
        img: img10,
        blur: 'BRANDING',
        title: 'Role of Public Relations in Building a Fashion Brand',
        desc: 'Explore the vital role PR plays in establishing brand reputation, fostering industry relationships, and driving brand growth.'
    }
];

const Twelfth = () => {
    return (
        <div className="bg-[#0D0D0D] text-white px-4 sm:px-6 md:px-10 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item, idx) => (
                    <article
                        key={item.title}
                        className={[
                            "bg-[#1A1A1A] rounded-2xl p-4 sm:p-5 lg:p-6 border border-white/5 group cursor-pointer hover:bg-[#2a2a2a]",
                            idx === 2 ? "block md:hidden lg:block" : "",
                        ].join(" ")}
                    >
                        <div className="relative rounded-xl overflow-hidden">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-[220px] sm:h-[260px] lg:h-[300px] object-cover"
                            />

                            <span className="absolute left-4 bottom-4 text-[12px] sm:text-[13px] tracking-wide bg-white/5 text-white rounded-md px-3 py-1 border border-white/10 backdrop-blur-[2px] uppercase">
                                {item.blur}
                            </span>

                            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button
                                    aria-label="Open"
                                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#262626]/70 border border-white/15 flex items-center justify-center text-gray-200 hover:text-white hover:border-white/30 transition"
                                >
                                    <svg
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 17L17 7M17 7H9M17 7V15"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="pt-5">
                            <h3 className="text-xl sm:text-2xl font-semibold leading-snug mb-3">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed text-[15px] sm:text-base">
                                {item.desc}
                            </p>

                            <div className="mt-6 flex items-center gap-4">
                                <button
                                    aria-label="Read"
                                    className="w-10 h-10 rounded-full bg-[#151515] border border-white/10 flex items-center justify-center text-gray-200"
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M7 17L17 7M17 7H9M17 7V15"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                                <span className="tracking-wider text-sm sm:text-base text-gray-200">
                                    READ MORE
                                </span>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};


export default Twelfth