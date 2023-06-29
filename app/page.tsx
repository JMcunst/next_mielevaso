import { DefenseDecCard, CustomFilter, Hero, SearchBar } from "@/components"
import { fuels, yearsOfProduction } from "@/constants"
import { fetchHeros } from "@/utils"

export default async function Home() {
    const allHeros = await fetchHeros();

    const isDataEmpty = !Array.isArray(allHeros) || allHeros.length < 1 || !allHeros;

    return (
        <main className="overfolow-hidden">
            <Hero />
            <div className="mt-12 padding-x padding-y
            max-width" id="discover">
                <div className="home__text-container">
                    <h1 className="text-4xl font-extrabold">
                        Guild War Defense Decs
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
                        <div className='home__defense-decs-wrapper'>
                            {allHeros?.map((hero) => (
                                <DefenseDecCard key={hero.id} hero={hero} />
                            ))}
                        </div>
                    </section>
                ) : (
                    <div className="home__error-container">
                        <h2 className="text-black text-xl font-bold">Oops, no result</h2>
                        <p>{allHeros?.message}</p>
                    </div>
                )}
            </div>
        </main>
    )

}