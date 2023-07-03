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
    hero1: {
        id: string;
        img_url: string;
    };
    hero2: {
        id: string;
        img_url: string;
    };
    hero3: {
        id: string;
        img_url: string;
    };
    win_rate: number;
    picked_rate: number;
};


export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
}