import React, { useState } from 'react'

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false)

    const menuItems = [
        'Projects',
        'Services',
        'Studio',
        'Blog',
        'Pages'
    ]

    return (
        <header className="w-screen bg-transparent font-['font1'] px-4 md:px-6 lg:px-8">
            <nav className="hidden md:flex items-center justify-between h-20 px-0">
                <div className="flex items-center">
                    <h1 className="text-2xl tracking-widest">ALVY</h1>
                </div>

                <ul className="flex gap-4  font-semibold tracking-widest font-['font2'] cursor-pointer">
                    {menuItems.map((item) => (
                        <li
                            key={item}
                            className="px-4 py-2 bg-[#1E1E1E] rounded-md text-sm text-white shadow-sm hover:bg-[#2a2a2a] transition"
                        >
                            {item}
                        </li>
                    ))}
                    <li className="px-4 py-2 bg-[#1E1E1E] rounded-md text-sm text-white shadow-sm flex items-center justify-center">
                        CART <span className="ml-2 inline-flex items-center justify-center w-6 h-6 text-black bg-yellow-300 rounded-full text-xs">0</span>
                    </li>
                    <li>
                        <button className="px-5 py-2 bg-[#cebd63] hover:bg-[#AD9D49] rounded-md text-black font-semibold cursor-pointer">GET IN TOUCH</button>
                    </li>
                </ul>
            </nav>

            {/* Mobile navbar */}
            <nav className="md:hidden flex items-center justify-between h-16 px-0">
                <div className="flex items-center gap-3">
                    <h1 className="text-xl tracking-wider">ALVY</h1>
                </div>

                <div className="flex items-center gap-3">
                    <button aria-label="cart" className="flex items-center gap-2 px-3 py-1 bg-[#1b1b1b] rounded-md">
                        <span className="text-sm text-white/90">CART</span>
                        <span className="inline-flex items-center justify-center w-5 h-5 text-black bg-[#AD9D49] rounded-full text-xs">0</span>
                    </button>

                    <button
                        aria-label={mobileOpen ? 'close menu' : 'open menu'}
                        onClick={() => setMobileOpen((s) => !s)}
                        className="w-10 h-10 flex items-center justify-center bg-[#151515] rounded-md"
                    >
                        {mobileOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18M3 12h18M3 18h18" />
                            </svg>
                        )}
                    </button>
                </div>
            </nav>

        {mobileOpen && (
            <div className="md:hidden fixed inset-0 z-50 flex justify-center items-start pt-20 px-4">
                <div className="absolute inset-0" onClick={() => setMobileOpen(false)} />

                <div className="relative w-full max-w-sm bg-[#0f0f0f] rounded-xl p-4 shadow-xl border border-neutral-800 z-10">
                    <div className="max-h-[60vh] pb-4">
                        <ul className="flex flex-col gap-3">
                            {['Projects','Services','Studio','Jobs','Blog','Shop','Contact'].map((item) => (
                                <li key={item} className="bg-[#1b1b1b] rounded-md px-4 py-4 uppercase tracking-widest text-sm text-white hover:bg-[#2a2a2a] transition cursor-pointer">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-4">
                        <button className="w-full px-4 py-3 hover:bg-[#AD9D49] bg-[#cebd63] text-black rounded-md tracking-widest cursor-pointer">MORE TEMPLATES</button>
                    </div>
                </div>
            </div>
        )}
        </header>
    )
}

export default Navbar