import { ArrowUpRight } from 'lucide-react'

const Eighth = () => {
  return (
    <section className="p-4">
      <div className="bg-[#CEBD63] rounded-2xl p-8 md:p-12 lg:p-16 relative overflow-hidden">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-start justify-between gap-6">
          
          <div className="w-full lg:w-3/4 text-black">
            <div className="text-sm tracking-widest mb-4">CONTACT</div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-['font1'] leading-tight">
              LET'S MAKE YOUR<br />FASHION BRAND SHINE
            </h2>
          </div>

          <div className="mt-6 lg:mt-0 w-full lg:w-auto lg:self-end lg:pb-4">
            <button className="w-full lg:w-auto  cursor-pointer bg-[#0f0f0f] text-white px-6 py-3 rounded-lg tracking-widest flex items-center justify-center gap-1 hover:bg-[#151515] transition">
              GET IN TOUCH <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Eighth
