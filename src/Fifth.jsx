import { ArrowRight } from 'lucide-react'
import img3 from './assets/imgs/image3.png'

const info = [
    {
        title: "Video Production",
        desc: "Our expert team produces high-quality videos that showcase your fashion brand in a visually stunning and engaging way.",
    },
    {
        title: "Branding & Identity",
        desc: "We create unique and captivating brand identities that leave a lasting impression on your target audience.",
    },
    {
        title: "Online Marketing",
        desc: "We develop impactful marketing strategies and execute compelling advertising campaigns.",
    },
    {
        title: "E-Commerce",
        desc: "We design and build seamless online shops that provide an intuitive and enjoyable shopping experience.",
    }
]
const Fifth = () => {
    return (
        <div className='flex lg:flex-row md:flex-row flex-col-reverse px-4 md:px-6 lg:px-10 my-8 gap-4'>
            <div className='lg:w-1/2 md:w-1/2 sm:w-full'>
                <div className='rounded-3xl font-["font2"] flex flex-col gap-2 items-start justify-center text-start h-full'>
                    {info.map((item, index) => (
                        <div key={index} className='p-8 bg-[#1E1E1E] w-full h-1/4 rounded-3xl flex items-center gap-4 cursor-pointer hover:bg-[#2a2a2a] transition'>
                            <div className='w-3/4'>
                                <div className='text-2xl mb-4'>
                                    {item.title}
                                </div>
                                <div className='text-[16px] text-gray-400 leading-relaxed hidden lg:block'>
                                    {item.desc}
                                </div>
                            </div>
                            <div className='h-10 w-10 rounded-full flex items-center justify-center'>
                                <button aria-label="open" className="w-10 h-10 rounded-full bg-[#151515] hover:bg-[#3a3a3a] transition flex items-center justify-center border border-white/10 cursor-pointer">
                                    <ArrowRight size={18} className="text-white" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className='lg:w-1/2 md:w-1/2 sm:w-full'>
                <img src={img3} alt="" className='object-cover h-[40vh] lg:h-[90vh] md:h-full rounded-3xl' />
            </div>
        </div>
    )
}

export default Fifth