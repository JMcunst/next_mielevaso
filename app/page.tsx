import { CarCard, CustomFilter, Hero, SearchBar } from "@/components"
import { fuels, yearsOfProduction } from "@/constants"
import { fetchCars } from "@/utils"

export default async function Home() {
    const allCars = await fetchCars();

    const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

    return (
        <main className="overfolow-hidden">
            <Hero />
            <div className="mt-12 padding-x padding-y
            max-width" id="discover">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">
                        Guildwar Decs
                    </h1>
                    <p>기사단전 방덱 공략 입니다.</p>
                </div>
                <div className="home_filters">
                    <SearchBar />
                    <div className="home__filter-container">
                        <CustomFilter title='fuel' options={fuels} />
                        <CustomFilter title='year' options={yearsOfProduction} />
                    </div>
                </div>

                {!isDataEmpty ? (
                    <section>
                        <div className='home__cars-wrapper'>
                            {allCars?.map((car) => (
                                <CarCard key={car.id} car={car} />
                            ))}
                        </div>
                    </section>
                ) : (
                    <div className="home__error-container">
                        <h2 className="text-black text-xl font-bold">Oops, no result</h2>
                        <p>{allCars?.message}</p>
                    </div>
                )}
            </div>
        </main>
    )

}