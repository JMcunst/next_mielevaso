import { Hero } from "@/components"

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
                        <CustomFilter title="firstHero"/>
                        <CustomFilter title="secondHero"/>
                        <CustomFilter title="thirdHero"/>
                    </div>
                </div>
            </div>
        </main>
    )

}

export default Sample