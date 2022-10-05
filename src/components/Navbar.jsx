import React, { useState, useEffect } from 'react';
import { logo, fabars, fabarsblack } from '../assets';
function Navbar({ headerRef, sidebarOpen, setSidebarOpen }) {
    const [showLogo, setShowLogo] = useState(true);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            const scrollHeight = window.pageYOffset;
            if (scrollHeight > headerRef.current.getBoundingClientRect().height - 64) {
                setShowLogo(false);
            } else {
                setShowLogo(true);
            }
        })
    })

    return <nav className='w-full p-6 fixed top-0 left-0 text-white'>
        <div className='w-full max-w-[1150px] mx-auto flex flex-row md:justify-between justify-end items-center'>
            <div className='md:block hidden'>
                {showLogo && <img src={logo} alt="reboost" className='w-[240px]' />}
            </div>
            <div className={`flex gap-x-10 items-center transition duration-500 ${sidebarOpen ? `md:-translate-x-[400px] -translate-x-[100vw]` : 'translate-x-0'}`}>
                <button className='text-[16px] text-white bg-mainBlue px-4 py-2 rounded-md'>
                    Contact
                </button>
                <img src={
                    showLogo ? fabars : fabarsblack
                } alt="menu" onClick={() => {
                    setSidebarOpen(true);
                }} />
            </div>
        </div>
    </nav>
}

export default Navbar