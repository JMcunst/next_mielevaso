import { DefenseDecCard, CustomFilter, Hero, SearchBar } from "@/components"
import UploadForm from "@/components/UploadForm";
import { picked_rate, win_rate } from "@/constants"
import { fetchDefenseDecsDjango } from "@/utils"

export default async function Home() {
    const allDefenseDecsRes = await fetchDefenseDecsDjango(); // Local API Test with Django
    const allDefenseDecs = allDefenseDecsRes['data'];

    const isDataEmpty = !Array.isArray(allDefenseDecs) || allDefenseDecs.length < 1 || !allDefenseDecs;

    return (
        <main className="overfolow-hidden">
            <Hero />
            <div className="mt-12 padding-x padding-y
            max-width" id="discover">
                <div className="home__text-container">
                    <div className="flex items-center">
                        <h1 className="text-4xl font-extrabold">Guild War Defense Decs</h1>
                        <UploadForm/>
                    </div>
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
                            {allDefenseDecs?.map((hero, index) => {
                                console.log("디벤스덱2:", hero); // 로그 출력
                                return <DefenseDecCard key={index} combined_def={hero.combined_def} atk_list={hero.atk_list} def_win_rate={hero.def_win_rate} def_strong_point={hero.def_strong_point} />;
                            })}
                        </div>
                    </section>
                ) : (
                    <div className="home__error-container">
                        <h2 className="text-black text-xl font-bold">Oops, no result</h2>
                        <p>allDefenseDecs?.message</p>
                    </div>
                )}
            </div>
        </main>
    )

}