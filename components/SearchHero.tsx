"use client"

import { useState, Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'

import { heros } from '@/constants'
import { SearchHeroProps } from '@/types'
import Image from 'next/image'

const SearchHero = ({ hero, setHero }: SearchHeroProps) => {
    const [query, setQuery] = useState('');


    const filteredHeros =
        query === ""
            ? heros
            : heros.filter((item) => (item.name.toLowerCase().replace(/\s+/g, "").includes(query.toLowerCase().replace(/\s+/g, ""))))

    return (
        <div className='search-hero'>
      <Combobox value={hero} onChange={setHero}>
        <div className='relative w-full'>
          {/* Button for the combobox. Click on the icon to see the complete dropdown */}
          <Combobox.Button className='absolute top-[14px]'>
            <Image
              src='/car-logo.svg'
              width={20}
              height={20}
              className='ml-4'
              alt='car logo'
            />
          </Combobox.Button>

          {/* Input field for searching */}
          <Combobox.Input
            className='search-hero__input'
            displayValue={(item: string) => item}
            onChange={(event) => setQuery(event.target.value)} // Update the search query when the input changes
            placeholder='영웅 선택'
          />

          {/* Transition for displaying the options */}
          <Transition
            as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
            leave='transition ease-in duration-100'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            afterLeave={() => setQuery("")} // Reset the search query after the transition completes
          >
            <Combobox.Options
              className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
              static
            >
              {filteredHeros.length === 0 && query !== "" ? (
                <Combobox.Option
                  value={query}
                  className='search-hero__option'
                >
                  Create "{query}"
                </Combobox.Option>
              ) : (
                filteredHeros.map((item) => (
                  <Combobox.Option
                    key={item.name}
                    className={({ active }) =>
                      `relative search-hero__option ${
                        active ? "bg-primary-blue text-white" : "text-gray-900"
                      }`
                    }
                    value={item.name}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item.name}
                        </span>

                        {/* Show an active blue background color if the option is selected */}
                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active? "text-white": "text-pribg-primary-purple"}`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
    )
}

export default SearchHero