import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchHeroProps {
    hero: string;
    setHero: (hero: string) => void;
}

export interface OptionProps {
    title: string;
    value: string;
}

export interface CustomFilterProps {
    title: string;
    options: OptionProps[];
}

export interface DefenseDecCardProps {
    combined_def: string[];
    atk_list: {
        atk: string[];
        def_win: boolean;
        def_death: boolean[];
    }[];
    def_win_rate: number;
    def_strong_point: number;
}


export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
}