'use server'

import { getOptions } from "../constances";

export const getTrending = async (type) => {
    

    const url = `https://api.themoviedb.org/3/trending/${type}/day?language=en-US`;
    const res = await fetch(url, getOptions)
    const data = await res.json();
    // console.log(data.results);
    return data.results;
}
