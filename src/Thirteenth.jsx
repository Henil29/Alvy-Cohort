import img9 from './assets/imgs/image9.png'

const Thirteenth = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 py-8 font-['font1']">
      <div className="bg-[#2A2A2A] border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:gap-6 lg:gap-8">
          {/* Image */}
          <div className="flex-shrink-0 mb-4 md:mb-0">
            <img
              src={img9}
              alt="newsletter"
              className="w-full md:w-[72px] lg:w-[88px] h-[220px] md:h-[72px] lg:h-[88px] rounded-lg object-cover"
            />
          </div>

          {/* Text + Form */}
          <div className="flex flex-col lg:flex-row md:flex-col flex-1 gap-10">
            {/* Text */}
            <div>
              <div className="text-[10px] sm:text-xs tracking-[0.22em] text-white/70 mb-1 sm:mb-2">
                NEWSLETTER
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-white font-medium leading-snug">
                GET INSIGHTS BEHIND THE SCENES
              </h3>
            </div>

            {/* Form */}
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3">
              <input
                type="email"
                placeholder="YOUR  EMAIL"
                className="h-10 sm:h-12 w-full sm:w-[300px] md:w-[420px] lg:w-[480px] rounded-md bg-[#2A2A2A] border border-white/20 px-3 sm:px-4 text-white/80 placeholder-white/60 outline-none"
              />
              <button className="h-10 sm:h-12 px-5 sm:px-6 rounded-md bg-[#D4C463] text-black tracking-widest text-xs sm:text-sm font-medium cursor-pointer hover:bg-[#b8a84d] transition">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Thirteenth
