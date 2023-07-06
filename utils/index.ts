import { herosDefenseCardDecs } from "@/constants/dummyTestSet";


export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);

    // Set the specified search parameter to the given value
    searchParams.set(type, value);

    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

    return newPathname;
};

export function fetchDefenseDecs() {
    const result = herosDefenseCardDecs;

    return result;
}

export async function fetchDefenseDecsDjango(){
    const url = new URL("http://127.0.0.1:8000/guildwar/defenses/?format=json");

    const response = await fetch(url);
    
    console.log('RES:', response);

    return response.json();
}