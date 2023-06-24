import { CustomFilter, Hero, SearchBar } from "@/components"
import { heros } from "@/constants"

function Sample() {
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
                    <SearchBar/>
                    <div className="home__filter-container">
                        <CustomFilter title='firstHero' options={heros} />
                        <CustomFilter title="secondHero" options={heros}/>
                        <CustomFilter title="thirdHero" options={heros}/>
                    </div>
                </div>
            </div>
        </main>
    )

}

export default Sample