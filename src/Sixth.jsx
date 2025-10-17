import { ArrowUpRight } from "lucide-react";


const Sixth = () => {
    return (
        <div className="flex items-center justify-between px-10">
            <div className="font-['font1'] text-3xl md:text-4xl lg:text-5xl">Selected Brands</div>
            <div>
                <button aria-label="open" className="right-6 top-1/2 w-11 h-11 rounded-full bg-[#151515] flex items-center justify-center border border-white/10 z-10">
                    <ArrowUpRight size={18} />
                </button>
            </div>
        </div>
    )
}

export default Sixth