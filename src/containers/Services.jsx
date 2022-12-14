import React from 'react'
import { service1, service2, service3, service4 } from '../assets'
import Service from '../components/Service'

const services = [
    {
        img: service1,
        title: 'UI/UX Design',
        body: 'Our design team has vast experience in designing apps and B2B solutions and together we will create a system that your users will love. Our experts smoothly blend into the software development process to conveniently deliver the products you want.'
    },
    {
        img: service2,
        title: 'Web & Mobile App Development',
        body: 'The largest department of our organization contains expert web developers who are anxiously waiting to work with you and turn your website dream into a reality. We provide web development services including a content management system (CMS), Informational website or an e-commerce store, you name it and we create it.'
    },
    {
        img: service3,
        title: 'Branding & Social Media',
        body: 'Our Marketing team makes efforts to nourish and support the unprecedented growth of your business. We believe in bringing your aspiring brand into reality and fanning the flames of the existing ones with aims, values and growth. We provide expertise in impressive branding, fascinating designs and extraordinary creativity to sky-rocket your brand..'
    },
    {
        img: service4,
        title: 'SEO & Copywriting',
        body: 'Imaging, you have invested a good budget on the design, outlook and management of your website but still, you fail to get the engagement. Ever wondered why? This could be because of the unclear content available on the site that fails to get you loyal customers and increase your online visibility. For that, you need a professional team for publishing clear content that can not only bring you long-term customers but rank your brand higher on the search engine.'
    }
]


function Services() {
    return <section className='px-7 my-[80px] max-w-[1150px] mx-auto'>
        <div className='border-b border-black'>
            <h1 className='mb-5 font-bold md:text-[40px] text-[28px]'>What we do...</h1>
            <p className='text-right text-[16px]'>Services</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-[70px] gap-[2rem]'>
            {
                services.map((service, index) => (
                    <Service key={index} {...service} />
                ))
            }
        </div>
    </section>
}

export default Services