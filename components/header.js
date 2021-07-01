import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/logo.svg'
import { useState } from 'react'
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from 'use-dark-mode';


export default function Header() {

    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };

    const darkMode = useDarkMode(false, {
        'classNameDark': 'dark',
    });

    return (
        <header className="flex justify-between items-center mt-10 mb-32">
                {/* Logo */}
                <div className="w-56 -mb-2 md:w-full dark:invert">
                    <Link href="/"><a><Image src={Logo} alt="Mohammed Sohail" /></a></Link>
                </div>
                {/* end of Logo */}

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6 dark:text-gray-200">
                    <div className="duration-75 ease-in-out transition-all hover:border-b-2 hover:border-black dark:hover:border-white"><Link href="/about"><a>About</a></Link></div>
                    <div className="duration-75 ease-in-out transition-all hover:border-b-2 hover:border-black dark:hover:border-white"><Link href="/work"><a>Work</a></Link></div>
                    <div className="duration-75 ease-in-out transition-all hover:border-b-2 hover:border-black dark:hover:border-white"><Link href="/uses"><a>Uses</a></Link></div>
                    <div className="duration-75 ease-in-out transition-all hover:border-b-2 hover:border-black dark:hover:border-white"><Link href="/articles"><a>Articles</a></Link></div>
                    <div className="duration-75 ease-in-out transition-all hover:border-b-2 hover:border-black dark:hover:border-white"><Link href="/contact"><a>Contact</a></Link></div>

                    {/* Dark mode switcher */}
                    <div className="flex">
                        {/* <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M29 14.5C29 22.5109 22.5108 28.9999 14.4999 28.9999C6.48958 28.9999 0 22.5109 0 14.5C0 6.48972 6.48958 0 14.4999 0C22.5108 0 29 6.48972 29 14.5Z" fill="#010101"/>
                        <path d="M11.4529 19.9103H16.8395H11.4529ZM14.1468 3.77249V4.92519V3.77249ZM21.4826 6.81101L20.6676 7.62597L21.4826 6.81101ZM24.5211 14.1468H23.3684H24.5211ZM4.92516 14.1468H3.77246H4.92516ZM7.62594 7.62597L6.81098 6.81101L7.62594 7.62597ZM10.0708 18.2228C9.26493 17.4167 8.71616 16.3897 8.4939 15.2717C8.27164 14.1538 8.38586 12.995 8.82213 11.9419C9.2584 10.8889 9.99713 9.98883 10.9449 9.35559C11.8927 8.72236 13.0069 8.38437 14.1468 8.38437C15.2866 8.38437 16.4009 8.72236 17.3486 9.35559C18.2964 9.98883 19.0351 10.8889 19.4714 11.9419C19.9077 12.995 20.0219 14.1538 19.7996 15.2717C19.5774 16.3897 19.0286 17.4167 18.2227 18.2228L17.591 18.8533C17.2299 19.2145 16.9435 19.6433 16.7481 20.1152C16.5527 20.5871 16.4521 21.0929 16.4522 21.6036V22.2157C16.4522 22.8271 16.2093 23.4135 15.7769 23.8459C15.3446 24.2782 14.7582 24.5211 14.1468 24.5211C13.5353 24.5211 12.949 24.2782 12.5166 23.8459C12.0843 23.4135 11.8414 22.8271 11.8414 22.2157V21.6036C11.8414 20.572 11.431 19.5818 10.7025 18.8533L10.0708 18.2228Z" stroke="white" strokeWidth="2" stroke-linecap="round" strokeLineJoin="round"/>
                        </svg>

                        <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M29 14.5C29 22.511 22.5108 29 14.4999 29C6.48958 29 0 22.511 0 14.5C0 6.48974 6.48958 0 14.4999 0C22.5108 0 29 6.48974 29 14.5ZM25.7777 14.5C25.7777 11.2136 24.3729 8.25572 22.13 6.19339C22.13 6.19339 21.9501 6.01897 21.8984 5.98059C21.7373 5.85795 21.5309 5.78113 21.3057 5.78113C20.7708 5.78113 20.3391 6.21289 20.3391 6.74772C20.3391 6.81829 20.4221 7.21792 20.4221 7.21792C20.5519 7.90702 20.6223 8.61627 20.6223 9.34438C20.6223 15.5763 15.5762 20.6221 9.34443 20.6221C8.6422 20.6221 7.95871 20.5583 7.29522 20.4354L6.98567 20.3641C6.91531 20.3517 6.84424 20.339 6.76671 20.339C6.23167 20.339 5.79991 20.7707 5.79991 21.3057C5.79991 21.5442 5.88368 21.7564 6.02548 21.9239C6.05179 21.9565 6.19323 22.1301 6.24451 22.1819C8.30039 24.399 11.2388 25.7779 14.5001 25.7779C20.7317 25.7779 25.7777 20.7317 25.7777 14.5Z" fill="#010101"/>
                        </svg> */}
                        <DarkModeToggle
                          onChange={darkMode.toggle}
                          checked={darkMode.value}
                          size={80}
                        />
                    </div>
                    {/* end of Dark mode switcher */}


                </div>
                {/* End of Desktop Menu */}

                {/* Mobile Menu */}

                {/* Toggle */}
                <button onClick={handleClick} className="md:hidden">
                    {active ? <span className="fixed top-8 right-10 text-white z-50 text-7xl rotate-45">+</span> : <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stroke-linecap="round" strokeLineJoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>}
                </button>

                <div
                  className={`${
                    active ? 'h-full w-full fixed z-40 left-0 top-0 bg-opacity-80 bg-black overflow-hidden transition duration-150' : 'hidden'
                  }`}
                >
                    <div className="flex flex-col h-full justify-center items-center text-gray-200 text-5xl space-y-6">
                        <div className="hover:border-b transition-all duration-300 ease-in-out">
                            <Link href="/">
                                <a>
                                    Home
                                </a>
                            </Link>
                        </div>
                        <div className="hover:border-b transition ease-in-out">
                            <Link href="/about">
                                <a>
                                    About
                                </a>
                            </Link>
                        </div>
                        <div className="hover:border-b transition ease-in-out">
                            <Link href="/work">
                                <a>
                                    Work
                                </a>
                            </Link>
                        </div>
                        <div className="hover:border-b transition ease-in-out">
                            <Link href="/uses">
                                <a>
                                    Uses
                                </a>
                            </Link>
                        </div>
                        <div className="hover:border-b transition ease-in-out">
                            <Link href="/articles">
                                <a>
                                    Articles
                                </a>
                            </Link>
                        </div>
                        <div className="hover:border-b transition ease-in-out">
                            <Link href="/contact">
                                <a>
                                    Contact
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* End of Mobile Menu */}

        </header>
    )
}
