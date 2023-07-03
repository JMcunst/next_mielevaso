import { DefenseDecCard, CustomFilter, Hero, SearchBar } from "@/components"
import { picked_rate, win_rate } from "@/constants"
import { fetchDefenseDecs } from "@/utils"

export default async function Home() {
    // const allHeros = await fetchHeros();
    const allDefenseDecs = fetchDefenseDecs();

    const isDataEmpty = !Array.isArray(allDefenseDecs) || allDefenseDecs.length < 1 || !allDefenseDecs;
    console.log('EMPTY?', isDataEmpty);
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
                        <CustomFilter title='win_rate' options={win_rate} />
                        <CustomFilter title='picked_rate' options={picked_rate} />
                    </div>
                </div>

                {!isDataEmpty ? (
                    <section>
                        <div className='home__defense-decs-wrapper'>
                            {allDefenseDecs?.map((hero) => {
                                console.log("디벤스덱:",hero); // 로그 출력
                                return <DefenseDecCard key={hero.id} hero={hero} />;
                            })}
                        </div>
                    </section>
                ) : (
                    <div className="home__error-container">
                        <h2 className="text-black text-xl font-bold">Oops, no result</h2>
                        <p>{allDefenseDecs?.message}</p>
                    </div>
                )}
            </div>
        </main>
    )

}