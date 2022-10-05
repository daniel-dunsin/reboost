import React from 'react'
import Button from './Button'

function Service({ img, title, body }) {
    return <article className='py-[20px] px-[40px] rounded-md border-2 flex flex-col md:justify-between md:gap-y-12 gap-y-8'>
        <div>
            <div className='flex flex-col-reverse md:gap-y-0 gap-y-4 md:justify-between md:flex-row justify-center items-center'>
                <h1 className='text-[18px] md:text-[24px] font-bold md:text-left text-center'>{title}</h1>
                <div>
                    <img src={img} alt={title} className='w-[40px] h-[40px]' />
                </div>
            </div>
            <div className='md:mt-10 md:mb-[24px] mt-8'>
                <p className='text-[14px] font-semibold'>{body}</p>
            </div>
        </div>
        <div>
            <Button text='More Info' />
        </div>
    </article>
}

export default Service