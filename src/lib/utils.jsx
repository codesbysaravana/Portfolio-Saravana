/* this is for combining classNames of TailwindCss */
import {clsx} from 'clsx';
import {twMerge} from 'tailwind-merge';

export const cn = (...inputs) => {
    return twMerge(
        clsx(inputs)    
    )
}

//this file takes a list of classNames from the main files and componenets .jsx and merges them into A SINGLE CLASSNAME ...merging