"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { DefenseDecCardProps } from '@/types'
import CustomButton from './CustomButton';
import DefenseDecCardDetails from './DefenseDecCardDetails';

const DefenseDecCard = ( {combined_def, def_win_rate, atk_list, def_strong_point} : DefenseDecCardProps) => {

    const defenseDec = {combined_def, def_win_rate, atk_list, def_strong_point} ;
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
                    <Image src={`/heros/${combined_def[0]}.png`} alt={combined_def[0]} width={96} height={96} className='object-contain' />
                </div>
                <div className='flex relative h-24 bg-primary-blue-100 rounded-lg'>
                    <Image src={`/heros/${combined_def[1]}.png`} alt={combined_def[1]} width={96} height={96} className='object-contain' />
                </div>
                <div className='flex relative h-24 bg-primary-blue-100 rounded-lg'>
                    <Image src={`/heros/${combined_def[2]}.png`} alt={combined_def[2]} width={96} height={96} className='object-contain' />
                </div>
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-gray'>
                    <div className="defense-dec-card__icon">
                        <Image src="/shield.svg" width={20} height={20} alt="seat" />
                        <p className="defense-dec-card__icon-text">방승률: {def_win_rate}%</p>
                    </div>
                    <div className="defense-dec-card__icon">
                        <Image src="/picked.svg" width={20} height={20} alt="seat" />
                        <p className="defense-dec-card__icon-text">안정성 점수: {def_strong_point}%</p>
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

            <DefenseDecCardDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} defenseDec={defenseDec}  />
        </div>
    )
}

export default DefenseDecCard