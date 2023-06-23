"use client";
import React from 'react'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
    const handleScroll = () => { }

    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Welcome to Mielevaso App
                </h1>

                <p className='hero_subtitle'>
                    미엘레바소 기사단입니다.
                </p>

                <CustomButton
                    title="Explore Our Guild"
                    containerStyles="bg-primary-blue
                text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image src="/mielevaso.png" alt="hero"
                        fill className="object-contain" />
                </div>
                <div className='hero__image-overlay'></div>
            </div>
        </div>
    )
}

export default Hero