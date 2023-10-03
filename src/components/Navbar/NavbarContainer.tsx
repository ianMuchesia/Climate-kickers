import React, { useEffect, useState } from 'react'
import Hamburger from './Hamburger';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import FadeIn from '../../Animations/FadeIn';
import { Link } from 'react-router-dom';



interface Props {
    toggleMenu: () => void;
    isOpen: boolean;
}
const NavbarContainer = ({ toggleMenu, isOpen }: Props) => {

    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        const changeHeight = () => {
            if (window.scrollY > 100) {
                setNavbar(true);
            } else {
                setNavbar(false);
            }
        };

        const onScroll = setTimeout(() => {
            window.addEventListener("scroll", changeHeight);
        }, 500);

        return () => {
            clearTimeout(onScroll);
            window.removeEventListener("scroll", changeHeight);
        };
    }, []);


    return (
        <>
            <header
                className={`fixed z-50 top-0 right-0 left-0 flex items-center px-6 md:px-10 bg-black-500/80 lg:px-[50px] backdrop-blur-[10px] ease-in-out duration-300 ${navbar
                        ? "h-[70px] shadow-[0_10px_30px_-10px] shadow-shadow-black"
                        : "h-[100px]"
                    }`}
            >
                <nav className="flex items-center justify-between w-full">
                <FadeIn delay={0.2}>
                    <Link to="/"
                        className='text-blue-400'
                    >
                      {/* <img
                      src="/react.svg"
                      width={40} height={40}
                      alt='logo'
                      className='rounded-full'
                      /> */}


                    </Link>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                    <Hamburger

                        onToggleMenu={toggleMenu}
                        isMenuOpen={isOpen}
                    />
                    </FadeIn>

                    <DesktopNavbar />
                    <MobileNavbar
                        isMenuOpen={isOpen} onToggleMenu={toggleMenu}
                    />



                </nav>

            </header>
         
        </>
    )
}

export default NavbarContainer