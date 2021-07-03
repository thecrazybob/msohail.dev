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
                    <div className="flex dark:border-white border rounded-full p-1">
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
                    <div onClick={handleClick} className="flex flex-col h-full justify-center items-center text-gray-200 text-5xl space-y-6">
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
