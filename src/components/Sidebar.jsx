import React from 'react'
import { useState } from 'react';
import { facebook, fatimes, instagram, linkedin, twitter, caret } from '../assets';

const links = [
    {
        id: 1,
        text: 'Home',
        link: '#'
    },
    {
        id: 2,
        text: 'Services',
        sublinks: [
            'UI/UX Design',
            'Web Development',
            'Branding & Social Media',
            'SEO & Copywriting'
        ],
        link: '#'
    },
    {
        id: 3,
        text: 'About Us',
        link: '#'
    },
    {
        id: 4,
        text: 'Work',
        link: '#'
    },
    {
        id: 5,
        text: 'Career',
        link: '#'
    },
    {
        id: 6,
        text: 'Sign Up / Login',
        link: '#'
    }
];


const socials = [
    twitter, instagram, facebook, linkedin
]


function Sidebar({ sidebarOpen, setSidebarOpen }) {

    // for the only link with dropDown
    const [accordionOpen, setAccordionOpen] = useState(false);
    return <aside className={`fixed top-0 right-0 h-screen bg-mainBlue text-white w-full md:w-[400px] z-10 px-[30px] py-[40px] transition duration-500 ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className='w-full'>
            <img src={fatimes} alt="close-icon" className='w-[32px] h-[32px] ml-auto' onClick={() => {
                setSidebarOpen(false);
            }} />
        </div>
        <ul className='mt-6 flex flex-col gap-y-4'>
            {
                links.map(link => (
                    !link.sublinks
                        ? <li key={link.id}>
                            <a href={link.link} className='text-[24px] font-semibold cursor-pointer'>
                                {link.text}
                            </a>
                        </li>
                        : <li key={link.id}>
                            <header className='flex flex-row gap-x-4' onClick={() => {
                                setAccordionOpen(prev => !prev);
                            }}>
                                <p className='text-[24px] font-semibold cursor-pointer'>{link.text}</p>
                                <img src={caret} alt="caret" className={`transition duration-300 ${accordionOpen ? 'rotate-180' : null}`} />
                            </header>
                            {
                                accordionOpen && <ul className='flex flex-col gap-y-[7px] mt-[7px]'>
                                    {
                                        link.sublinks.map((sublink, index) => (
                                            <li key={index} className='text-[16px]'>
                                                {sublink}
                                            </li>
                                        ))
                                    }
                                </ul>
                            }
                        </li>
                ))
            }
        </ul>
    </aside>
}

export default Sidebar