import React from 'react'
import Button from '../components/Button'
import { phone } from '../assets'
function Header({ headerRef }) {
    return <header className='header md:min-h-fit min-h-screen w-full px-6 pt-32 text-white' ref={headerRef}>
        <div className='w-full max-w-[1150px] mx-auto'>
            <div className='flex-1 flex flex-col gap-y-[40px] items-start'>
                <h1 className='md:text-[62px] font-bold md:max-w-[510px] md:leading-[64px] text-[35px] leading-[40px]'>
                    Boost Your business.
                </h1>
                <div className='flex flex-col gap-y-4'>
                    <p className='max-w-[1024px] text-[17px] leading-[22px]'>Our global team with their fine expertise will deliver a wider outlook where your clients can engage and relate. We make relevant and effective visual communication strategies for your business keeping an eye on the online communities and cultures for greater collaboration and the user experience.</p>
                    <p className='max-w-[1024px] text-[17px] leading-[22px]'>Let us give you a boost.</p>
                </div>
                <Button text='Find Out More' />
            </div>
            <div className='mt-2 p-8'>
                <button className='text-white py-3 px-3 bg-mainBlue max-w-[220px] ml-auto text-[14px] font-semibold text-left flex-row gap-x-2 items-center button rounded-md hidden md:flex'>
                    <p>Book a free 15-minute consultation today.</p>
                    <div>
                        <img src={phone} alt="telephone" className='w-[64px]' />
                    </div>
                </button>
            </div>
        </div>
    </header>
}

export default Header