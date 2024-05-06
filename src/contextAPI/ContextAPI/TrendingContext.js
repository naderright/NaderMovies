'use server'

import { getOptions } from "../constances";

export const getTrending = async (type) => {
    await new Promise((resolve)=>setTimeout(resolve,1000))

    const url = `https://api.themoviedb.org/3/trending/${type}/day?language=en-US`;
    const res = await fetch(url, getOptions)
    const data = await res.json();
    // console.log(data.results);
    return data.results;
}
