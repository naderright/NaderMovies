'use server'
import axios from "axios";
import { getOptions } from "../constances";


export const getAllMovies = async (type,page) => {

    try {
        const url = `https://api.themoviedb.org/3/movie/${type}?language=en-US&page=${page}`;
        const { data } = await axios(url, getOptions);
        return data.results
    } catch (error) {
        console.log(error);
    }


}