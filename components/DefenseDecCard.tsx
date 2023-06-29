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
    const { city_mpg, year, make, model, transmission, drive } = hero;

    const [isOpen, setIsOpen] = useState(false);

    const carRent = calculateCarRent(city_mpg, year);
    return (
        <div className='defense-dec-card group'>
            <div className='defense-dec-card__content'>
                <h2 className='defense-dec-card__content-title'>
                    {make} {model}
                </h2>
            </div>
            <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
                <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
                {carRent}
                <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
            </p>

            <div className='relative w-full h-40 my-3 object-contain'>
                <Image src={generateHeroImageUrl(hero)} alt='car model' fill priority className='object-contain' />
            </div>

            <div className='relative flex w-full mt-2'>
                <div className='flex group-hover:invisible w-full justify-between text-gray'>
                    <div className='flex flex-col justify-center items-center gap-2'>
                        <Image src='/steering-wheel.svg' width={20} height={20} alt='steering wheel' />
                        <p className='text-[14px] leading-[17px]'>
                            {transmission === "a" ? "Automatic" : "Manual"}
                        </p>
                    </div>
                    <div className="defense-dec-card__icon">
                        <Image src="/tire.svg" width={20} height={20} alt="seat" />
                        <p className="defense-dec-card__icon-text">{drive.toUpperCase()}</p>
                    </div>
                    <div className="defense-dec-card__icon">
                        <Image src="/gas.svg" width={20} height={20} alt="seat" />
                        <p className="defense-dec-card__icon-text">{city_mpg} MPG</p>
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