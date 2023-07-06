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

export async function fetchDefenseDecsDjango() {
    try {
        const response = await fetch('http://127.0.0.1:8000/guildwar/defenses/?format=json', {
            headers: {
                'Cache-Control': 'no-cache',
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch data from the Django backend.');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}