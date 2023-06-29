"use client"

import React, { useState } from 'react'
import SearchHero from './SearchHero'
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image
            src={"/magnifying-glass.svg"}
            alt={"magnifying glass"}
            width={40}
            height={40}
            className='object-contain'
        />
    </button>
);

const SearchBar = () => {
    const [firstHero, setFirstHero] = useState('');
    const [secondHero, setSecondHero] = useState('');
    const [thirdHero, setThirdHero] = useState('');
    const [model, setModel] = useState("");

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (firstHero.trim() === "" && secondHero.trim() === "" && thirdHero.trim() === "" && model.trim() === "") {
            return alert("Please provide some input");
        }

        updateSearchParams(model.toLowerCase(), firstHero.toLowerCase(), secondHero.toLowerCase(), thirdHero.toLowerCase());
    };

    // 검색 기능
    const updateSearchParams = (model: string, firstHero: string, secondHero: string, thirdHero: string) => {
        // Create a new URLSearchParams object using the current URL search parameters
        const searchParams = new URLSearchParams(window.location.search);

        // Update or delete the 'model' search parameter based on the 'model' value
        if (model) {
            searchParams.set("model", model);
        } else {
            searchParams.delete("model");
        }

        // Update or delete the 'hero' search parameter based on the 'hero' value
        if (firstHero) {
            searchParams.set("hero", firstHero);
        } else {
            searchParams.delete("hero");
        }

        // Generate the new pathname with the updated search parameters
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

        router.push(newPathname);
    };

    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className='searchbar__item'>
                <SearchHero
                    hero={firstHero}
                    setHero={setFirstHero}
                />
            </div>
            <div className='searchbar__item'>
                <SearchHero
                    hero={secondHero}
                    setHero={setSecondHero}
                />
            </div>
            <div className='searchbar__item'>
                <SearchHero
                    hero={thirdHero}
                    setHero={setThirdHero}
                />
            </div>
            <SearchButton otherClasses='max-sm:hidden' />
        </form>
    )
}

export default SearchBar 