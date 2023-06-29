"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { DefenseDecProps } from '@/types'
import { calculateCarRent, generateHeroImageUrl } from '@/utils';
import CustomButton from './CustomButton';
import DefenseDecCardDetails from './DefenseDecCardDetails';

interface DefenseDecCardProps {
    hero: DefenseDecProps;
}

const DefenseDecCard = ({ hero }: DefenseDecCardProps) => {
    const { win_rate, pick_rate_for_month } = hero;

    const [isOpen, setIsOpen] = useState(false);

    // const carRent = calculateCarRent(city_mpg, year);
    return (
        <div className='defense-dec-card group'>
            <div className='defense-dec-card__content'>
                <h2 className='defense-dec-card__content-title'>
                    적 방덱
                </h2>
            </div>

            <div className='flex justify-center w-full gap-10 m-4'>
                <div className='flex relative h-24 bg-primary-blue-100 rounded-lg'>
                    <Image src='/heros/BM5W2JNCYLN0007.png' alt='hero model' width={96} height={96} className='object-contain' />
                </div>
                <div className='flex relative h-24 bg-primary-blue-100 rounded-lg'>
                    <Image src='/heros/GM5W2JNCNLN0009.png' alt='hero model' width={96} height={96} className='object-contain' />
                </div>
                <div className='flex relative h-24 bg-primary-blue-100 rounded-lg'>
                    <Image src='/heros/RM5W1JNCNLN0005.png' alt='hero model' width={96} height={96} className='object-contain' />
                </div>
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-gray'>
                    <div className="defense-dec-card__icon">
                        <Image src="/tire.svg" width={20} height={20} alt="seat" />
                        <p className="defense-dec-card__icon-text">방승률: {win_rate}%</p>
                    </div>
                    <div className="defense-dec-card__icon">
                        <Image src="/gas.svg" width={20} height={20} alt="seat" />
                        <p className="defense-dec-card__icon-text">30일간 픽률: {pick_rate_for_month}%</p>
                    </div>
                </div>

                <div className="defense-dec-card__btn-container">
                    <CustomButton
                        title='View More'
                        containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
                        textStyles='text-white text-[14px] leading-[17px] font-bold'
                        rightIcon='/right-arrow.svg'
                        handleClick={() => setIsOpen(true)}
                    />
                </div>

            </div>

            <DefenseDecCardDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} hero={hero} />
        </div>
    )
}

export default DefenseDecCard