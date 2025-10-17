import { ArrowUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
    const sections = [
        {
            title: 'PAGES',
            links: ['HOME', 'SERVICES', 'STUDIO', 'JOBS', 'CONTACT'],
            cta: { label: 'MORE TEMPLATES' },
        },
        {
            title: 'CMS',
            links: ['PROJECTS', 'PROJECT SINGLE', 'BLOG', 'BLOG SINGLE', 'SHOP', 'SHOP SINGLE'],
        },
        {
            title: 'UTILITY PAGES',
            links: ['404 ERROR PAGE', 'PASSWORD PROTECTED', 'STYLEGUIDE', 'LICENSING', 'CHANGELOG'],
        },
    ]
    const svgs = [
        {
            name: 'instagram',
            svg: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6.75C8.40326 6.75 7.83097 6.98705 7.40901 7.40901C6.98705 7.83097 6.75 8.40326 6.75 9C6.75 9.59674 6.98705 10.169 7.40901 10.591C7.83097 11.0129 8.40326 11.25 9 11.25C9.59674 11.25 10.169 11.0129 10.591 10.591C11.0129 10.169 11.25 9.59674 11.25 9C11.25 8.40326 11.0129 7.83097 10.591 7.40901C10.169 6.98705 9.59674 6.75 9 6.75ZM9 5.25C9.99456 5.25 10.9484 5.64509 11.6517 6.34835C12.3549 7.05161 12.75 8.00544 12.75 9C12.75 9.99456 12.3549 10.9484 11.6517 11.6517C10.9484 12.3549 9.99456 12.75 9 12.75C8.00544 12.75 7.05161 12.3549 6.34835 11.6517C5.64509 10.9484 5.25 9.99456 5.25 9C5.25 8.00544 5.64509 7.05161 6.34835 6.34835C7.05161 5.64509 8.00544 5.25 9 5.25ZM13.875 5.0625C13.875 5.31114 13.7762 5.5496 13.6004 5.72541C13.4246 5.90123 13.1861 6 12.9375 6C12.6889 6 12.4504 5.90123 12.2746 5.72541C12.0988 5.5496 12 5.31114 12 5.0625C12 4.81386 12.0988 4.5754 12.2746 4.39959C12.4504 4.22377 12.6889 4.125 12.9375 4.125C13.1861 4.125 13.4246 4.22377 13.6004 4.39959C13.7762 4.5754 13.875 4.81386 13.875 5.0625ZM9 3C7.1445 3 6.8415 3.00525 5.97825 3.0435C5.39025 3.07125 4.99575 3.15 4.62975 3.2925C4.32346 3.40495 4.04656 3.5852 3.81975 3.81975C3.58501 4.04655 3.40451 4.32344 3.29175 4.62975C3.14925 4.99725 3.0705 5.391 3.0435 5.97825C3.0045 6.80625 3 7.09575 3 9C3 10.8555 3.00525 11.1585 3.0435 12.0217C3.07125 12.609 3.15 13.0043 3.29175 13.3695C3.41925 13.6958 3.56925 13.9305 3.81825 14.1795C4.071 14.4315 4.30575 14.5822 4.62825 14.7067C4.99875 14.85 5.39325 14.9295 5.97825 14.9565C6.80625 14.9955 7.09575 15 9 15C10.8555 15 11.1585 14.9948 12.0217 14.9565C12.6082 14.9288 13.0035 14.85 13.3695 14.7083C13.6753 14.5952 13.9521 14.4154 14.1795 14.1818C14.4323 13.929 14.583 13.6943 14.7075 13.3717C14.85 13.002 14.9295 12.6067 14.9565 12.0217C14.9955 11.1937 15 10.9043 15 9C15 7.1445 14.9948 6.8415 14.9565 5.97825C14.9288 5.39175 14.85 4.99575 14.7075 4.62975C14.5945 4.32375 14.4143 4.04697 14.1803 3.81975C13.9536 3.58488 13.6766 3.40438 13.3702 3.29175C13.0027 3.14925 12.6082 3.0705 12.0217 3.0435C11.1937 3.0045 10.9043 3 9 3ZM9 1.5C11.0378 1.5 11.292 1.5075 12.0915 1.545C12.8903 1.5825 13.434 1.70775 13.9125 1.89375C14.4075 2.08425 14.8245 2.34225 15.2415 2.7585C15.6229 3.13342 15.918 3.58694 16.1063 4.0875C16.2915 4.56525 16.4175 5.10975 16.455 5.9085C16.4903 6.708 16.5 6.96225 16.5 9C16.5 11.0378 16.4925 11.292 16.455 12.0915C16.4175 12.8903 16.2915 13.434 16.1063 13.9125C15.9185 14.4133 15.6233 14.867 15.2415 15.2415C14.8665 15.6227 14.413 15.9178 13.9125 16.1063C13.4347 16.2915 12.8903 16.4175 12.0915 16.455C11.292 16.4903 11.0378 16.5 9 16.5C6.96225 16.5 6.708 16.4925 5.9085 16.455C5.10975 16.4175 4.566 16.2915 4.0875 16.1063C3.58674 15.9184 3.13315 15.6232 2.7585 15.2415C2.37705 14.8666 2.08195 14.4131 1.89375 13.9125C1.70775 13.4347 1.5825 12.8903 1.545 12.0915C1.50975 11.292 1.5 11.0378 1.5 9C1.5 6.96225 1.5075 6.708 1.545 5.9085C1.5825 5.109 1.70775 4.566 1.89375 4.0875C2.08143 3.58663 2.3766 3.13299 2.7585 2.7585C3.13325 2.37692 3.58682 2.0818 4.0875 1.89375C4.566 1.70775 5.109 1.5825 5.9085 1.545C6.708 1.50975 6.96225 1.5 9 1.5Z" fill="currentColor"></path>
            </svg>
        },
        {
            name: 'twitter',
            svg: <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6212 4.24195C16.0487 4.49522 15.4415 4.66155 14.8197 4.73545C15.475 4.34352 15.9655 3.72671 16.1997 2.99994C15.5847 3.36594 14.9105 3.62244 14.2077 3.76119C13.7357 3.25613 13.11 2.92117 12.428 2.80838C11.7459 2.6956 11.0457 2.81131 10.4362 3.13753C9.82668 3.46376 9.34203 3.98221 9.05757 4.61229C8.77312 5.24237 8.7048 5.94878 8.86323 6.6217C7.61607 6.55919 6.39598 6.23509 5.2822 5.67044C4.16842 5.1058 3.18583 4.31323 2.39823 3.3442C2.11945 3.82303 1.97295 4.36736 1.97373 4.92144C1.97373 6.00894 2.52723 6.9697 3.36873 7.5322C2.87074 7.51652 2.38371 7.38203 1.94823 7.13995V7.17894C1.94838 7.90322 2.19901 8.60516 2.65762 9.16574C3.11623 9.72632 3.7546 10.1111 4.46448 10.2547C4.0022 10.38 3.51746 10.3984 3.04698 10.3087C3.24713 10.9321 3.63724 11.4773 4.16268 11.868C4.68812 12.2587 5.32258 12.4753 5.97723 12.4874C5.3266 12.9984 4.58162 13.3762 3.7849 13.5991C2.98817 13.822 2.15533 13.8856 1.33398 13.7864C2.76776 14.7085 4.43681 15.198 6.14148 15.1964C11.9112 15.1964 15.0665 10.4167 15.0665 6.27145C15.0665 6.13645 15.0627 5.99994 15.0567 5.86645C15.6709 5.42257 16.2009 4.87271 16.622 4.24269L16.6212 4.24195Z" fill="currentColor"></path>
            </svg>
        },
        {
            name: 'behance',
            svg: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><path fill="none" d="M0 0h24v24H0z"></path><path d="M7.443 5.35c.639 0 1.23.05 1.77.198a3.83 3.83 0 0 1 1.377.544c.394.247.689.594.885 1.039.197.445.295.99.295 1.583 0 .693-.147 1.286-.491 1.731-.295.446-.787.841-1.377 1.138.836.248 1.475.693 1.868 1.286.394.594.64 1.336.64 2.177 0 .693-.148 1.286-.394 1.781-.246.495-.639.94-1.082 1.237a5.078 5.078 0 0 1-1.573.692c-.59.149-1.18.248-1.77.248H1V5.35h6.443zm-.394 5.54c.541 0 .984-.148 1.328-.395.344-.247.492-.693.492-1.237 0-.297-.05-.594-.148-.791-.098-.198-.246-.347-.442-.495-.197-.099-.394-.198-.64-.247-.246-.05-.491-.05-.787-.05H4v3.216h3.05zm.148 5.838c.295 0 .59-.05.836-.099a1.72 1.72 0 0 0 .688-.297 1.76 1.76 0 0 0 .492-.544c.098-.247.197-.544.197-.89 0-.693-.197-1.188-.59-1.534-.394-.297-.935-.445-1.574-.445H4v3.81h3.197zm9.492-.05c.393.396.983.594 1.77.594.541 0 1.033-.148 1.426-.395.394-.297.64-.594.738-.891h2.41c-.394 1.187-.984 2.028-1.77 2.572-.788.495-1.722.792-2.853.792a5.753 5.753 0 0 1-2.115-.396 3.93 3.93 0 0 1-1.574-1.088 3.93 3.93 0 0 1-.983-1.633c-.246-.643-.345-1.335-.345-2.127 0-.742.099-1.434.345-2.078a5.34 5.34 0 0 1 1.032-1.682c.443-.445.984-.84 1.574-1.088a5.49 5.49 0 0 1 2.066-.396c.836 0 1.574.149 2.213.495.64.346 1.131.742 1.525 1.336a6.01 6.01 0 0 1 .885 1.88c.098.692.147 1.385.098 2.176H16c0 .792.295 1.534.689 1.93zm3.098-5.194c-.344-.346-.885-.544-1.525-.544-.442 0-.787.099-1.082.247-.295.149-.491.347-.688.545a1.322 1.322 0 0 0-.344.692c-.05.248-.099.445-.099.643h4.426c-.098-.742-.344-1.236-.688-1.583zM15.459 6.29h5.508v1.336H15.46V6.29z"></path></svg>
        }
    ]

    return (
        <footer className="px-4 sm:px-6 md:px-10 py-10 font-['font1']">
            <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] md:grid-rows-[auto_auto] gap-5">
                {/* Left brand panel — spans both rows */}
                <div className="bg-[#1F1F1F] rounded-2xl border border-white/10 p-6 flex flex-col justify-between min-h-[260px] md:row-span-2">
                    <div>
                        <div className="text-white/80 tracking-[0.3em] text-sm">ALVY</div>
                    </div>
                    <div className="flex items-center gap-3">
                        {svgs.map(({ name, svg }) => (
                            <button
                                key={name}
                                aria-label={name}
                                className="w-9 h-9 rounded-full bg-[#151515] border border-white/10 text-white/70 flex items-center justify-center hover:text-white cursor-pointer"
                            >
                                {svg}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right content card (top right) */}
                <div className="bg-[#1F1F1F] rounded-2xl border border-white/10 p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sections.map((sec) => (
                            <div key={sec.title}>
                                <h4 className="text-white font-semibold tracking-wider mb-4">{sec.title}</h4>
                                <ul className="space-y-3 text-white/80 text-sm">
                                    {sec.links.map((l) => (
                                        <li key={l} className="cursor-pointer">
                                            <span className="relative inline-block hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                                                {l}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                                {sec.cta && (
                                    <div className="pt-5">
                                        <button className="text-black text-xs tracking-widest px-4 py-2 rounded-md cursor-pointer hover:bg-[#AD9D49] bg-[#cebd63]">
                                            {sec.cta.label}
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom bar (bottom right) */}
                <div className="bg-[#1F1F1F] rounded-2xl border border-white/10 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-white/70 text-sm w-full">
                        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-x-2 gap-y-1 text-center sm:text-left">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#D4C463]"></span>
                            <span className="whitespace-nowrap">MADE BY</span>
                            <span className="underline cursor-pointer font-semibold text-white whitespace-nowrap">PAVEL_GOLA</span>
                            <span className="select-none text-white/40">-</span>
                            <span className="whitespace-nowrap">POWERED BY</span>
                            <span className="underline cursor-pointer font-semibold text-white whitespace-nowrap">WEBFLOW</span>
                        </div>
                    </div>
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm cursor-pointer sm:whitespace-nowrap shrink-0"
                    >
                        TO TOP
                        <ArrowUp size={18} />
                    </button>
                </div>
            </div>
        </footer>
    )
}

export default Footer
