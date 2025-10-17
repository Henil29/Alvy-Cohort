import img2 from './assets/imgs/image2.png'
const Fourth = () => {
    return (
        <div className='flex max-w-screen px-4 md:px-6 lg:px-10 gap-4 bg-[#121212] flex-col lg:flex-row md:flex-row py-12'>
            <div className='lg:w-1/2 md:1/2 sm:w-full'>
                <img src={img2} alt="" className='object-cover h-[40vh] lg:h-[90vh] md:h-[70vh] rounded-3xl' />
            </div>
            <div className='lg:w-1/2 md:1/2 sm:w-full bg-[#1E1E1E] rounded-3xl font-["font1"] flex flex-col items-end justify-end text-start p-4'>
                <div className='text-4xl md:text-6xl lg:text-8xl pt-8 lg:p-0 md:pt-0'>
                    Bringing Fashion Brands to life
                </div>
                <div
                    className="
                            text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] 
                            text-white/90 leading-relaxed 
                            md:columns-2 md:gap-10 
                            transition-all duration-500 ease-in-out mt-6 lg:mt-0 md:mt-0
                        "
                >
                    At our agency, we are passionate about bringing fashion brands to life.
                    With a combination of creative vision, strategic thinking, and industry expertise.
                    We help our clients transform their ideas into vibrant realities that resonate
                    with their target audience, leaving a lasting impact in the fashion industry.
                </div>

            </div>
        </div>
    )
}

export default Fourth